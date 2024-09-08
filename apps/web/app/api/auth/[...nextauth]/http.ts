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
      });

      if (!res.ok) {
        const errorData = await res.json();

        if (errorData.statusCode === 401) {
        }

        throw new Error(errorData);
      }

      const data = res.json() as T;
      console.log(data);
      return data;
    } catch (e: any) {
      // throw new Error(e);
    }
  }

  async post<T, D = {}>(uri: string, data: D, config?: fetchOptionType) {
    let requestUrl = config?.baseURL || apiConfig.baseURL + uri;
    let body;
    body = data;

    try {
      const configs = await this.init({ configOptions: config });
      const headers = await this.headerInit();
      body = createFormData(data!);

      const res = await fetch(requestUrl, {
        method: 'POST',
        body: body,
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
      // throw new Error(e);
    }
  }
  put() {}
  patch() {}
  delete() {}
}

const http = new RequestInterceptors();

export default http;
