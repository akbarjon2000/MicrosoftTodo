import Axios from "axios"

const axios = Axios.create({
    baseURL: "/api",
    withCredentials: true
})

axios.interceptors.request.use((config) => {
    console.log("config:", config);
    const token = localStorage.token;
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
})

export default axios;