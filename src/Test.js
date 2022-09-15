import React, {useContext,useState,useEffect} from 'react';

import {getAll} from './http/basketApi.js'
import {fetchOneDevice} from './http/deviceApi.js'
import {cartHelper} from './assets/helpers/cartHelper.js'
import{Context} from './index.js';
import {observer} from "mobx-react-lite";




// Navigate || Redirect: hhttps://stackoverflow.com/questions/63690695/react-redirect-is-not-exported-from-react-router-dom

export const Test = observer(() => {

    const {user} = useContext(Context)
    const [mystate,setMystate] = useState([])


useEffect(() => {
/*

        getAll(3).then((data) => {
          
         // const x = cartHelper(data)

          console.log('x',data)
          data[0].device.then((result) => {
         // user.setUserCart(result)

            setMystate(result)

          console.log('vot',result.name)
          })

})
            //console.log('userBasket',user.cart)
        

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
*/


         async function q(data){
                cartHelper(data)
                return data

         }
        getAll(3).then((data) => {
            
         q(data).then((result) => {
          console.log('list',result)
            setMystate(result)
            })


        })



},[])

          console.log('mystate',mystate)







})
