// как работать с axios: https://zetcode.com/javascript/axios/
import {$host,$authHost} from './index.js';
import jwt_decode from 'jwt-decode'
import {reactLocalStorage} from 'reactjs-localstorage';



export const registration = async (email, password) => {
try {
const response = await $host.post('api/user/registration', {email, password});

//const response = await axios.post(`http://localhost:5000/api/user/registration`, {email, password, role: 'admin'});
const data = response.data;
reactLocalStorage.set('token',data.token)

return jwt_decode(data.token);

}
catch (e){
console.log('error_respons=',e)
}
};

export const login = async (email, password) => {
const {data} = await $host.post('api/user/login', {email, password});
// const response = await axios.post(`http://localhost:5000/api/user/login`,{email, password});
reactLocalStorage.set('token',data.token)
return jwt_decode(data.token);
};



export const check = async () => {
const {data} = await $authHost.get('api/user/auth');
reactLocalStorage.set('token',data.token)
return jwt_decode(data.token);
};