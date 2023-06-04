import axios, { AxiosResponse } from "axios";

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

const apiUrl = "http://localhost:8081/";
export const APISERVICE = {
  get: async (url: string, params = ""): Promise<any> => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        `${apiUrl + url + params}`,
        {}
      );
      const data: any = response.data;
      data.status = response.status;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  post: async (url: string, body: any): Promise<any> => {
    try {
      const response: AxiosResponse<any> = await axios.post(
        `${apiUrl + url}`,
        body,
        {}
      );
      const data: any = response.data;
      data.status = response.status;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  put: async (url: string, body: any): Promise<any> => {
    try {
      const response: AxiosResponse<any> = await axios.put(
        `${apiUrl + url}`,
        body,
        {}
      );
      const data: any = response.data;
      data.status = response.status;
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (url: string): Promise<any> => {
    try {
      const response: AxiosResponse<any> = await axios.delete(
        `${apiUrl + url}`,
        {}
      );
      const data: any = response.data;
      data.status = response.status;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
