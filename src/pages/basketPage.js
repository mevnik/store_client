
import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {CreateType }from '../components/modals/createType.js';
import {CreateBrand }from '../components/modals/createBrand.js';
import {CreateDevice }from '../components/modals/createDevice.js';
import { NavLink } from "react-router-dom";
import {SHOP_ROUTE} from '../utils/constants.js';




// hook-и работают только в функциях;



export const BasketPage = () => {
    
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    return (
   <Container>
           <h3>It's Basket</h3>
   <Row>
       <Col className = ''>
           <div className = 'd-flex flex-row justify-content-end'>
               <NavLink className="ms-5" style = {{color:'red'}} to={SHOP_ROUTE}>
            X
          </NavLink>
           </div>
       </Col>
   </Row>
       <Row>
           <Col className = 'd-flex flex-column'>
               <Button variant = {'outline-dark'} className = 'mt-2 p-2' onClick={() => setTypeVisible(true)}>add new Type</Button>
               <Button variant = {'outline-dark'} className = 'mt-2 p-2' onClick={() => setBrandVisible(true)}>add new Brand</Button>
               <Button variant = {'outline-dark'} className = 'mt-2 p-2' onClick={() => setDeviceVisible(true)}>add new Device</Button>
           </Col>
       </Row>
       <CreateType show = {typeVisible} onHide = {() => setTypeVisible(false)}/>
       <CreateBrand show = {brandVisible} onHide = {() => setBrandVisible(false)}/>
       <CreateDevice show = {deviceVisible} onHide = {() => setDeviceVisible(false)}/>
   </Container>


        );
 }  



