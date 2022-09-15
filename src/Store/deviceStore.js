import {makeAutoObservable} from 'mobx';


export default class DeviceStore{

	constructor(){
		this._types = [
        
        ];
        this._brands = [
        
        ];
        this._devices = [
        
        ];

        this._page = 1;
        this._total = 3;
        this._limit = 3;
        this._selectedTypes = {}
        this._selectedBrand = {}

		makeAutoObservable(this); // будет следить за изменением
	}

//Фантастика!  get самостоятельные методы!

	setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices
    }

    setselectedTypes(types){
        //this._page = 1;
        this.setPage(1);
        return this._selectedTypes = types
    }

    setselectedBrand(brands){
        //this._page = 1;
        this.setPage(1);
        return this._selectedBrand = brands
    }

    setPage(page) {
        this._page = page
    }

    setTotal(total) {
        this._total = total
    }

    setLimit(limit) {
        this._limit = limit
    }

    get Types() {
        return this._types
    }
    get Brands() {
        return this._brands
    }
    get Devices() {
        return this._devices
    }

      get selectedTypes(){
        return this._selectedTypes
    }

    get selectedBrand(){
        return this._selectedBrand
    }

    get Page() {
        return this._page
    }

    get Total() {
        return this._total
    }

    get Limit() {
        return this._limit
    }
}

