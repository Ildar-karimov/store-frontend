import {makeAutoObservable} from "mobx";

export default class AuthStore {
    constructor() {
        this._products = []
        this._currentProduct = {}
        this._total = 0
        makeAutoObservable(this)
    }

    setProducts(products) {
        this._products = products
    }

    setCurrentProduct(currentProduct) {
        this._currentProduct = currentProduct
    }

    setTotal(total) {
        this._total = total
    }

    get total(){
        return this._total
    }

    get products(){
        return this._products
    }

    get currentProduct(){
        return this._currentProduct
    }
}