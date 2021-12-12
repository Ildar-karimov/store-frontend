import axios from "axios";

const $api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL + '/api',
});

const $authApi = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL + '/api',
});

const authInterceptor = config => {
    config.headers.authorization = localStorage.getItem('token')
    return config
}

$authApi.interceptors.request.use(authInterceptor)

export {
    $api,
    $authApi
}