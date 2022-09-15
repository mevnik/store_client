import React, {useContext} from 'react';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import Image from 'react-bootstrap/Image';
import Vector from '../assets/images/Vector.png';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {DEVICE_ROUTE} from '../utils/constants.js';
import {REACT_APP_API_URL} from '../config.js';
import {add,getAll} from '../http/basketApi.js'
import{Context} from '../index.js';


// histoty в версии v6 не используется, вместо нее-navigate




const DeviceItem = ({device}) => {
const history = useNavigate();
const {user} = useContext(Context)
const add_to_cart = (device_id,user_Id) => {add(device_id,user_Id)
.then((data) => {getAll(data.user_ID)
	.then((data) => user.setUserCart(data))
})
}//.then(user.setUserCart(device_id))}}
	return (
		<Col className="col-md-3 text-center mb-2">
			<Card style = {{width:150, cursor: 'pointer', border: 'light'}} onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
				<Image width ={150} height ={150} src = {REACT_APP_API_URL + device.image}/>
				<div className="d-flex flex-row  justify-content-between">
					<div>{device.price}</div>
					<div className="d-flex flex-row justify-content-around">
						<div>{device.rating}</div>
						<Image width ={13} height ={12} src = {Vector} className = 'm-auto'/>
					</div>
				</div>
				<div className = 'mt-1 fw-bolder'>{device.name}</div>

			</Card>
          <Button variant="outline-info " className = "ms-2 " onClick = {() => add_to_cart(device.id,user.user.id)}>Add to cart</Button>
			</Col>
				);
};
 export default DeviceItem;