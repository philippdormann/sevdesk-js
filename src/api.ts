import { serviceOptions } from "./index";
import axios, { AxiosHeaderValue } from "axios";
// 
export function sevDeskLogin(sevDeskApiKey: AxiosHeaderValue) {
  const instance = axios.create({
    baseURL: "https://my.sevdesk.de/api/v1",
    timeout: 5000,
    headers: { Authorization: sevDeskApiKey },
  });
  serviceOptions.axios = instance;
}
// 
export * from "./index"