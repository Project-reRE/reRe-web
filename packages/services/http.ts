import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

const apiConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  useLoading: true,
  useToken: true,
};

type apiConfigType = typeof apiConfig;
type fetchOptionType = apiConfigType & RequestInit;

type ErrorMessageType = { statusCode: number; code: string; message: string[] };

function createFormData(input: Record<string, any>): FormData {
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

  constructor() {
    this.#config.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    // this.#headers.append('Content-Type', 'application/json');
  }

  async headerInit(_token?: string) {
    const appendToken = (token: string) => {
      if (this.#headers.get('Authorization')) this.#headers.set('Authorization', `Bearer ${token}`);
      else this.#headers.append('Authorization', `Bearer ${token}`);
    };

    if (_token) appendToken(_token);
    else {
      const session = (await getSession()) as Session & { token: string };
      if (session) appendToken(session.token);
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
        console.log(errorData);

        if (errorData.statusCode === 401) {
        }

        throw new Error(errorData);
      }

      return res.json() as T;
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
        console.log(errorData);

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
