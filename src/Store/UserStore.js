import {makeAutoObservable} from 'mobx';


 export default class UserStore{
	constructor(){
        this._isAuth = false; // подчеркивание значит, что переменная не может меняться
		this._isAdmin = false; // подчеркивание значит, что переменная не может меняться
		this._user = {id: 1, name: 'djon',role: ''};
        this._cart = 0;
		makeAutoObservable(this); // будет следить за изменением
	}

	setIsAuth(bool) {
        this._isAuth = bool
    }

    setIsAdmin(bool) {
        this._isAdmin = bool
    }

    setUser(data) {

        this._user = data

    }


    setUserCart(data) {

        this._cart = data

    }

    get isAuth() {
        return this._isAuth
    }

    get isAdmin() {
        return this._isAdmin
    }

    get user() {
        return this._user
    }


    get cart() {
        return this._cart
    }

}

