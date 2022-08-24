import instance from "./index";
import type { AxiosResponse } from "axios";
interface Result<T> {
    count: number;
    cursor: string;
    data: T;
    err_msg: string;
    err_no: number;
    has_more: boolean;
}

const axios = {
    get<T>(url: string, params: any = {}): Promise<AxiosResponse<Result<T>>> {
        return new Promise((resolve, reject) => {
            instance
                .get(url, { params })
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        });
    },
    post<T>(url: string, params: any = {}): Promise<AxiosResponse<Result<T>>> {
        return new Promise((resolve, reject) => {
            instance
                .post(url, JSON.stringify(params))
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => {
                    reject(err.data);
                });
        });
    }
};

export default axios;
