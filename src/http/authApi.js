import {$api, $authApi} from "./api";
import jwtDecode from "jwt-decode";

export const registration = async (user) => {
    const {data} = await $api.post('/user/registration', user)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $api.post('/user/login', {email, password})
    return jwtDecode(data.token)
}

export const checkAuthToken = async () => {
    const res = await $api.post('/user/check-auth-token')
    return res
}