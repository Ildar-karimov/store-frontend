/* eslint-disable */
import {$api, $authApi} from "./api";

export const createProduct = async (product) => {
    const {data} = await $authApi.post('/product/create', product)
    return data
}

export const getProducts = async (pageNum, pageSize = 1) => {
    const {data} = await $authApi.get('/product?currentPage=' + pageNum + '&rowsOnPageCount=' + pageSize)
    return data
}

export const getProduct = async (id) => {
    const {data} = await $authApi.get('/product/' + id)
    return data
}