/* eslint-disable */
import {$api, $authApi} from "./api";
import jwtDecode from "jwt-decode";

export const registration = async (user) => {
    const {data} = await $api.post('/user/registration', user)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $api.post('/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const checkAuthToken = async () => {
    const {data} = await $authApi.get('/user/check-auth-token')
    localStorage.setItem('token', data.token)
    return data
}