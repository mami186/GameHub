import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'2059cd3a07674574807bd7dc7d5f48a4'
    }
})
