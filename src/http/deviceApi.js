// как работать с axios: https://zetcode.com/javascript/axios/
import {$host,$authHost} from './index.js';
import jwt_decode from 'jwt-decode'
import {reactLocalStorage} from 'reactjs-localstorage';


export const setType = async (type) => {
try {
const {data} = await $authHost.post('api/type', type);
console.log('data_settype=',data)
//const response = await axios.post(`http://localhost:5000/api/user/registration`, {email, password, role: 'admin'});
return data;

}
catch (e){
console.log('respons=',e)
}
};

export const fetchTypes = async () => {
try {
const {data} = await $host.get('api/type');

//const response = await axios.post(`http://localhost:5000/api/user/registration`, {email, password, role: 'admin'});
return data;

}
catch (e){
console.log('respons=',e)
}
};

export const setBrand = async (brand) => {
try {
const {data} = await $authHost.post('api/brand', brand);
console.log('data_setBrand=',brand)


//const response = await axios.post(`http://localhost:5000/api/user/registration`, {email, password, role: 'admin'});
return data;

}
catch (e){
console.log('respons=',e)
}
};

export const fetchBrands = async () => {
try {
const {data} = await $host.get('api/brand');

//const response = await axios.post(`http://localhost:5000/api/user/registration`, {email, password, role: 'admin'});
return data;

}
catch (e){
console.log('respons=',e)
}
};

export const setDevices = async (device) => {
try {
const {data} = await $authHost.post('api/device', device);
console.log('data',data)
//const response = await axios.post(`http://localhost:5000/api/user/registration`, {email, password, role: 'admin'});
return data;

}
catch (e){
console.log('respons=',e)
}
};

export const fetchDevices = async (typeId,brandId,page,limit = 5) => {
try {
const {data} = await $host.get('api/device',{
	params:{
	typeId,brandId,page,limit
}});
// const response = await axios.post(`http://localhost:5000/api/user/registration`, {email, password, role: 'admin'});
// На сервере findAndCountAll возвращает объект {count:5, rows: Array()}. Поэтому при вызове fetchDevices
//  в последствие берем только rows
return data;

}
catch (e){
console.log('respons=',e)
}
};

export const fetchOneDevice = async (id) => {
try {
const {data} = await $host.get('api/device/'+id);
//const response = await axios.post(`http://localhost:5000/api/user/registration`, {email, password, role: 'admin'});
return data;
}

catch (e){
console.log('respons=',e)
}
};

export const check = async () => {
const {data} = await $authHost.get('api/user/auth', {role: 'admin'});
reactLocalStorage.set('token',data.token)
return jwt_decode(data.token);
};