import React, {useState,useContext} from 'react';
import{Context} from '../index.js';
import {Container} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import NavLink from 'react-bootstrap/NavLink' надо так:
import { NavLink } from "react-router-dom"; // https://reactrouter.com/docs/en/v6/components/nav-link
import { useLocation } from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/constants.js";
import {observer} from "mobx-react-lite";
import {registration, login} from '../http/userAPI.js';
import {useNavigate} from 'react-router-dom';
import {SHOP_ROUTE} from '../utils/constants.js';





const AuthPage = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation().pathname;
    const isLogin = location === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();


    const click = async () => {
        let data = {}

       try {
            if (isLogin) {

               data = await login(email, password);
                if (data.role === 'admin') user.setIsAdmin(true)

            } else {
                data = await registration(email, password);
            }
            user.setUser(data)
            user.setIsAuth(true)
            if (user.user.role === 'admin') user.setIsAdmin(true)
            history(SHOP_ROUTE)

        } catch (e) {
            console.log('err',e.message)
            document.getElementById("message").innerHTML ='errors';
            alert('err')
        }
    }
    
/*
            try {

// сделал try, потому что иначе после перелогировании(с другим логином) выдает user.setUser is not a function
//хотя получается, что эту команду вообще можно опустить, т.к. она никогда не выполняется (всегда исключение)
            user.setUser(data)
            }
            catch (e){   
            user.setIsAdmin(false)  
            console.log('err',e.message,'user=',user.isAuth)

            }
            user.setIsAuth(true)

            history(SHOP_ROUTE)
        } catch (e) {
            console.log('err',e.message)
            document.getElementById("message").innerHTML ='errors';
            alert('err')
        }
    }
*/
    return (

       
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width:600}} className = "p-5">
            <div className = 'd-flex flex-row justify-content-end'>
               <NavLink className="ms-5" style = {{color:'red'}} to={SHOP_ROUTE}>
            X
          </NavLink>
           </div>
            <h2 className = "mx-auto">{isLogin ? 'Athorisation' : 'Registration'}</h2>
                <Form>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
               </Form.Group>
              <div className = "d-flex flex-row justify-content-between">
                  {isLogin ? 
                   <div className = " d-flex flex-row justify-content-between"><p className = "me-5">Haven't account?</p>
                        <NavLink to = {REGISTRATION_ROUTE} className = "">Registration
                        </NavLink>
                  </div> 
                  :
                  <div className = " d-flex flex-row justify-content-between"><p className = "me-5">Have account?</p>
                        <NavLink to = {LOGIN_ROUTE} className = "">Athorisation
                        </NavLink>
                  </div>
                  }
                   <div className = "">
                      <Button variant={"primary"} className = "align-self-end" onClick={click}>
                       {
                        isLogin ? 'Log in' : 'Registration'
                       } 
                      </Button>
                    </div>
                 </div>                         
                </Form>
            </Card>
            <div id = 'message' className = ''></div>
        </Container>
    );
});


export default AuthPage;
