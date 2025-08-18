import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
	count: number;
    next: string | null;
	results: T[];
}

 const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "8c58a15c1c3d45ad9b5bdcbeeea1dcc9",
	},
});

class ApiClient<T> {
	endpoint: string;
	constructor(endpoint: string) {
		this.endpoint = endpoint;
    	}
	getAll = (config?:AxiosRequestConfig) => {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint,config)
			.then((res) => res.data);
	};
	get = (id: number | string) => {
		return axiosInstance
			.get<T>(`${this.endpoint}/${id}`)
			.then((res) => res.data);
	};
    
}
export default ApiClient;
