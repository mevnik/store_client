import React,  {useState,useContext} from 'react';
import{Context} from '../index.js';
import Navbar from 'react-bootstrap/Navbar';
import {Button,Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import {SHOP_ROUTE,LOGIN_ROUTE, ADMIN_ROUTE} from '../utils/constants.js';
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Vector from '../assets/images/Vector.png';
import {UserBasket} from './modals/userBasket.js';





//import { Link } from "react-router-dom";




// How yo use snippets: https://www.geeksforgeeks.org/how-to-create-snippets-in-sublime-text/


const NavBar = observer((props) => {

  const {user} = useContext(Context);
	const {devices} = useContext(Context);
  const history = useNavigate();
  const [basketVisible, setBasketVisible] = useState(false);
  //const [count_in_cart, setCount_in_cart] = useState('');
  let userCart = props.userCart[0]
  let count_in_cart = props.userCart[1]

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    user.setIsAdmin(false);
  };

  const goHome = () => {
devices.setselectedTypes({})
devices.setselectedBrand({})
  }
	return (
  <Navbar className="border-bottom border-dark position-relative mt-3 pb-3" bg="light" variant="light">
  <Container className = "mt-2">
                <NavLink style={{color:'red'}} to={SHOP_ROUTE} onClick = {goHome}>КупиДевайс</NavLink>
    
    { user.isAdmin &&
    <Nav className="position-absolute end-0 me-5">

            <Button variant = "outline-dark" onClick={() => history(ADMIN_ROUTE)}>
                                Admin
            </Button>

      <Button variant="outline-info " className = "ms-2 " onClick = {() => logOut()}>Exit</Button>
    
    </Nav>
    }
        
		
        
    { (user.isAuth && !user.isAdmin) &&
        <Nav className="position-absolute end-0 me-5">
          <Button variant="outline-info " className = "ms-2 " onClick = {() => logOut()}>Exit</Button>
         <Image  onClick={() => setBasketVisible(true)} width ={13} height ={12} src = {Vector} className = 'm-auto'/>
         <div>{count_in_cart}</div>
        </Nav>
      }
       
    { (!user.isAuth && !user.isAdmin) &&

          <Nav className="position-absolute end-0 me-5">

            <Button variant="outline-primary" onClick = {() => history(LOGIN_ROUTE)}>Authorisation</Button>
           
          </Nav>
    }
  </Container>
       <UserBasket show = {basketVisible} Cart = {userCart} onHide = {() => setBasketVisible(false)}/>

  </Navbar>

		);
});

export default NavBar;