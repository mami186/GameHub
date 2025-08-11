import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'8c58a15c1c3d45ad9b5bdcbeeea1dcc9'
    }
})


export interface FetchResponse<T> {
	count: number;
	results: T[];
}