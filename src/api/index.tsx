import axios from "axios";

export const spoonacularApi = axios.create({
    baseURL: process.env.REACT_APP_ENV_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    params:{
        apiKey: process.env.API_KEY,
    }

});