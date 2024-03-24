import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  config.headers.Accept = 'application/json';
  config.headers['Content-Type'] = 'application/json';
  config.params = {
    ...config.params,
    applicationId: process.env.APP_ID,
  };

  return config;
}

export const rakutenApiClient = axios.create({
  baseURL: process.env.API_URL,
});

rakutenApiClient.interceptors.request.use(authRequestInterceptor);
rakutenApiClient.interceptors.response.use(
  (response: AxiosResponse<any, any>): any => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);
