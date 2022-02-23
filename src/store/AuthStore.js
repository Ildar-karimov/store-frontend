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

    setUser(name, surname, role, email) {
        this._user = {name,surname, role, email}
    }

    get isAuth(){
        return this._isAuth
    }

    get user(){
        return this._user
    }
}