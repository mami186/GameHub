import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'bff9418a4097416ca20c7fa821fd3bb5'
    }
})
