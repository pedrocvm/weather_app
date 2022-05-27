/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from 'axios';

class ApiService {
  get(config: AxiosRequestConfig): Promise<{ data: any }> {
    return new Promise((resolve, reject) => {
      axios
        .get(config.baseURL!, config)
        .then((res) => resolve(res))
        .catch((error) => {
          resolve({
            data: {
              status: error.response.status,
              message: error.message
            }
          });
          reject(error);
        });
    });
  }
}

export default new ApiService();
