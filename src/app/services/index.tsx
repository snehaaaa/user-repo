import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ApiConfig } from "../config/apiConfig";

class ServiceRequest {
    public invoke(args: AxiosRequestConfig): any {
        const customAxiosParams = {
            ...ApiConfig,
            ...args,
        };
        console.log("callal")
        return axios(customAxiosParams)
            .then((response: AxiosResponse) => {
                return { data: response.data, status: response.status };
            })
            .catch((e: AxiosResponse) => {
                return { status: 400, message: `Error:${e}` };
            });
    }
}
export default ServiceRequest.prototype;
