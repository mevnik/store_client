// https://axios-http.com/docs/intro   What is Axios?
//process.env.REACT_APP_API_URL не работает у меня в client, хотя в server работает
//возможно потому, что это работает только в build
//сделал вариант получения переменной из config
//хороший сайт https://zetcode.com/javascript/axios/
import 'dotenv/config';
import {reactLocalStorage} from 'reactjs-localstorage';
import axios from 'axios';
import {REACT_APP_API_URL} from '../config.js';

	
const $host = axios.create({

	//baseURL: process.env.REACT_APP_API_URL
	baseURL: REACT_APP_API_URL
	//baseURL: 'http://localhost:5000/'
}
);



const $authHost = axios.create({

	baseURL: REACT_APP_API_URL

});
// для автоматического подставления токена к каждому запросу:

const authInterceptor = config => {
	config.headers.athorisation = `Bearer ${reactLocalStorage.get('token')}`
	return config
}

$authHost.interceptors.request.use(authInterceptor)

export {$host, $authHost}