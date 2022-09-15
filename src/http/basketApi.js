// как работать с axios: https://zetcode.com/javascript/axios/
import {$host,$authHost} from './index.js';
import {cartHelper} from '../assets/helpers/cartHelper.js'



export const add = async (device_id,user_ID) => {
try {
const basket = {device_id:device_id,user_ID:user_ID}
const {data} = await $authHost.post('api/basket_device', basket);
//const response = await axios.post(`http://localhost:5000/api/user/registration`, {email, password, role: 'admin'});
console.log('res_add_basket=',data)
return data;

}
catch (e){
console.log('respons=',e)
}
};

export const getAll = async (user_ID) => {
try {

const {data} = await $host.get(`api/basket_device/${ user_ID }`);
// вот так передаем параметр в get-запросе
	// почему нельзя так: params:{user_ID}} ?
return cartHelper(data.rows);

}
catch (e){
console.log('respons=',e)
}
};