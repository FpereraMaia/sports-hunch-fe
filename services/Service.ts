import { MetadataObj } from "../types/generic.types";
const axios = require('axios').default;

export default class Service {
  private client: typeof axios;

  constructor(baseURL: string, headers?: any, timeout: number = 60000) {
    this.client = axios.create({
      baseURL,
      headers,
      timeout,
      proxy: undefined
    });
  }

  private buildRequestConfig(config: MetadataObj) {
    return {
      ...config,
    };
  }

  get(url: string, config = {}) {
    return this.client.get(url, this.buildRequestConfig(config));
  }

  post(url: string, config = {}) {
    return this.client.post(url, this.buildRequestConfig(config));
  }

  put(url: string, config = {}) {
    return this.client.put(url, this.buildRequestConfig(config));
  }

  patch(url: string, config = {}) {
    return this.client.patch(url, this.buildRequestConfig(config));
  }

  delete(url: string, config = {}) {
    return this.client.delete(url, this.buildRequestConfig(config));
  }

}
