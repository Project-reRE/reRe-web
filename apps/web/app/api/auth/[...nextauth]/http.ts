import { getCookie } from 'utils/cookie';

const apiConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  useLoading: true,
  useToken: true,
};

type apiConfigType = typeof apiConfig;
type fetchOptionType = apiConfigType & RequestInit;

type ErrorMessageType = { statusCode: number; code: string; message: string[] };

export function createFormData(input: Record<string, any>): FormData {
  return Object.keys(input || {}).reduce((formData, key) => {
    const property = input[key];
    formData.append(
      key,
      property instanceof Blob
        ? property
        : typeof property === 'object' && property !== null
          ? JSON.stringify(property)
          : `${property}`
    );
    return formData;
  }, new FormData());
}

class RequestInterceptors {
  #config = apiConfig as fetchOptionType;
  #headers = new Headers();

  constructor() {}

  private async headerInit() {
    const access_token = await getCookie('connect.sid');
    this.#headers.set('Content-Type', '	application/json');

    if (access_token) {
      this.#headers.set('Authorization', `Bearer ${access_token}`);
    }

    return this.#headers;
  }

  private async init({ configOptions }: { configOptions?: fetchOptionType }) {
    this.#config = { ...this.#config, ...configOptions };

    return this.#config;
  }

  async get<T>(uri: string, params?: {}, config?: fetchOptionType) {
    let requestUrl = config?.baseURL || apiConfig.baseURL + uri;
    if (params) {
      requestUrl += '?' + new URLSearchParams(params).toString();
    }

    try {
      const configs = await this.init({ configOptions: config });
      const headers = await this.headerInit();

      const res = await fetch(requestUrl, {
        method: 'GET',
        ...configs,
        headers,
        cache: 'no-store', // ssr
      });

      if (!res.ok) {
        const errorData = await res.json();

        if (errorData.statusCode === 401) {
        }

        throw new Error(errorData);
      }

      const data = res.json() as T;
      return data;
    } catch (e: any) {
      console.log(e);
    }
  }

  async post<T, D = {}>(uri: string, data: D, config?: fetchOptionType) {
    let requestUrl = config?.baseURL || apiConfig.baseURL + uri;

    try {
      const configs = await this.init({ configOptions: config });
      const headers = await this.headerInit();

      const res = await fetch(requestUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        ...configs,
        headers,
      });

      if (!res.ok) {
        const errorData = await res.json();

        if (errorData.statusCode === 401) {
        }

        throw new Error(errorData);
      }

      return res.json() as T;
    } catch (e: any) {
      const errorData = await e.json();
      throw new Error(errorData);
    }
  }
  put() {}
  patch() {}

  async delete<T>(uri: string, config?: fetchOptionType) {
    let requestUrl = config?.baseURL || apiConfig.baseURL + uri;

    try {
      const configs = await this.init({ configOptions: config });
      const headers = await this.headerInit();

      const res = await fetch(requestUrl, {
        method: 'DELETE',
        headers,
        ...configs,
      });

      if (!res.ok) {
        const errorData = await res.json();

        if (errorData.statusCode === 401) {
        }

        throw new Error(errorData);
      }

      return res.json() as T;
    } catch (e: any) {
      const errorData = await e.json();
      throw new Error(errorData);
    }
  }
}

const http = new RequestInterceptors();

export default http;
