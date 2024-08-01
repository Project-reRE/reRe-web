const apiConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  useLoading: true,
  useToken: true,
};

type apiConfigType = typeof apiConfig;
type fetchOptionType = apiConfigType & RequestInit;

class RequestInterceptors {
  #config = apiConfig as fetchOptionType;
  //   #token = localStorage.getItem('access_token');
  //   #isLogin = this.#token || false;

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
      //   if (!this.#token) return;
      //   headers.append('Authorization', this.#token);
      this.#config.headers = headers;
    }

    return headers;
  }

  async get(uri: string, params?: {}, config?: fetchOptionType) {
    let requestUrl = config?.baseURL || apiConfig.baseURL + uri;
    await this.#init(config);

    if (params) {
      requestUrl += '?' + new URLSearchParams(params).toString();
    }
    const res = await fetch(requestUrl, { method: 'GET', ...this.#config }).then((res) => res.json());
    return res;
  }

  post() {}
  put() {}
  patch() {}
  delete() {}
}

const http = new RequestInterceptors();

export default http;
