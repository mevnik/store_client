import React, {useState,useContext,useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import {AppRoutes} from './components/AppRoutes.js';
import NavBar from './components/NavBar.js';
import {observer} from "mobx-react-lite";
import{Context} from './index.js';
import {check} from './http/userAPI.js'
import Spinner from 'react-bootstrap/Spinner';
import {getAll} from './http/basketApi.js';





// Navigate || Redirect: hhttps://stackoverflow.com/questions/63690695/react-redirect-is-not-exported-from-react-router-dom

const App = observer(() => {
    const [mystate,setMystate] = useState([])

 
    const [loading, setLoading] = useState(true)
    const {user} = useContext(Context)
    const isAuth = user.isAuth


      useEffect(() => {
        check().then((data) => {
        user.setUser(data)
        user.setIsAuth(true)
        getAll(user.user.id).then((data) => { 
            setMystate(data)

            user.setUserCart(data)
         })

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

      },reason =>console.log('reason',reason)).finally(() => setLoading(false));

    },[])

    
      useEffect(() => {

        getAll(user.user.id).then((data) => { 

            setMystate(data)
            user.setUserCart(data)
            // пока не понимаю! Сохранить данные и передать их другим компонентам через store не удается


         })

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/then



    },[isAuth])

    if(loading){
      return <Spinner animation = {"grow"}/>
    }


  return (
    <BrowserRouter>
            <NavBar userCart = {mystate}/>
              <AppRoutes/>


    </BrowserRouter>
  );
});

export default App;
