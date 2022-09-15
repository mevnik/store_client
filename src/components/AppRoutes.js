import React, {useContext} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import {SHOP_ROUTE} from '../utils/constants.js'

import {authRoutes,publicRoutes} from '../routes.js';
import {Context} from '../index.js';
import {observer} from "mobx-react-lite";



function handlerRoutes(arr){

	const test = arr.map((item)=>{
		return(

				<Route key = {item} element = {item.element} path = {item.path} exact/> 


				);
	});
	return (
			test
			);

				 // exact-показывает, что марщрут должен точно соответствовать
				// key - всегда указываем уникальный ключ массива
				
	

}
	/*

const AppRoutes = () => {
   // const {user} = useContext(Context)

   // console.log(user)

           
	const t = handlerRoutes(publicRoutes.concat(authRoutes));
           console.log('t=',t);
           return t;
    
};



export default AppRoutes;


function handlerRoutes(arr){
	const test = arr.map((item)=>{
		return(

				<Route key = {item} element = {item.element} path = {item.path} exact/> 


				);
	});
	return (
			test
			);

				 // exact-показывает, что марщрут должен точно соответствовать
				// key - всегда указываем уникальный ключ массива
				
	

}

// Такой вариант не работает  TypeError: 'arguments', 'callee', and 'caller' cannot be accessed in this context
const AppRoutes =()=>{
const {user} = useContext(Context);
	return handlerRoutes(publicRoutes.concat(authRoutes));
	console.log('func')
	const rule = false;
	if (!rule) return handlerRoutes(publicRoutes.concat(authRoutes));
	else return handlerRoutes(publicRoutes);
};
export default AppRoutes;


// моя версия

console.log (user)
const rule = true;


export default (
	rule?handlerRoutes(publicRoutes.concat(authRoutes)):handlerRoutes(publicRoutes)
	)




*/

export const AppRoutes = observer(() => {
   const {user} = useContext(Context)
	//const rule = user.isAuth;
	const arr = user.isAuth?handlerRoutes(publicRoutes.concat(authRoutes)):handlerRoutes(publicRoutes);
	//console.log('app_routes=',arr)

  return (

	<Routes>
				{arr}
            <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} /> 

    </Routes>
    );

})




