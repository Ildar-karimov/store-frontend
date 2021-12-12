import {makeAutoObservable} from "mobx";

export default class AuthStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(status) {
        this._isAuth = status
    }

    setUser(user) {
        this._user = user
    }

    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }
}