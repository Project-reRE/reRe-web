import { getToken } from 'next-auth/jwt';
import { getSession } from 'next-auth/react';

const apiConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  useLoading: true,
  useToken: true,
};

type apiConfigType = typeof apiConfig;
type fetchOptionType = apiConfigType & RequestInit;

type ErrorMessageType = { statusCode: number; code: string; message: string[] };

class RequestInterceptors {
  #config = apiConfig as fetchOptionType;
  // session = getUSer();

  // #token = getSession();
  // #isLogin = this.#token ?? false;

  constructor() {
    this.#config.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    // this.#isLogin = !!this.#token;
    // if (!this.#isLogin) this.#config = { ...this.#config, useToken: false };
  }

  async #init(configOptions?: fetchOptionType) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.#config = { ...this.#config, ...configOptions };

    if (this.#config.useToken) {
      // if (!this.#token) return;
      // headers.append('Authorization', token ?? '');
      this.#config.headers = headers;
    }

    return headers;
  }

  async get<T>(uri: string, params?: {}, config?: fetchOptionType) {
    let requestUrl = config?.baseURL || apiConfig.baseURL + uri;
    await this.#init(config);

    if (params) {
      requestUrl += '?' + new URLSearchParams(params).toString();
    }

    try {
      const res = await fetch(requestUrl, { method: 'GET', ...this.#config });
      return res.json() as T;
    } catch (e) {
      // console.log(e);
    }

    // if (res.statusCode >= 400) {
    //   throw new Error(res);
    // }
  }

  post() {}
  put() {}
  patch() {}
  delete() {}
}

const http = new RequestInterceptors();

export default http;
