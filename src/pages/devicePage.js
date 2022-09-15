
import React, {useState,useEffect} from 'react';
import {Container} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Star_1 from '../assets/images/Star_1.png';
import Image from 'react-bootstrap/Image';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import {fetchOneDevice} from '../http/deviceApi.js'
import {REACT_APP_API_URL} from '../config.js';
import {useParams} from 'react-router-dom'








//import {Container,Tab,Col,Nav,Link,Row} from 'react-bootstrap';



const DevicePage = () => {
const {id} = useParams()
const [device, setDevice] = useState({description: []})
useEffect(() => {
      fetchOneDevice(id).then((data) => setDevice(data))


  },[])
console.log('info',device)
//console.log('img',REACT_APP_API_URL + data.image)

    
 	return (
<Container>
    <Row>
        <Col className = 'col- md-4'>
                <Image width ={300} height ={300} src = {REACT_APP_API_URL + device.image}/>

        </Col>
        <Col className = 'col- md-4 d-flex flex-column justify-content-center'>
        <h2 className = 'text-center mt-2 mb-2'>{device.name}</h2>
        <div className = 'd-flex align-items-center align-self-center justify-content-center fs-1' style = {{background: `url(${Star_1}) no-repeat center center`,width:300, height:300}}>

{device.rating}
            
        </div>
        </Col>
        <Col className = 'col- md-4'>
            <Card style = {{width:399, height:319}} className = 'd-flex flex-column justify-content-between'>
                <h3 className = 'text-center mt-3'>from {device.price} euros</h3>
                <Button variant = {'outline-dark'} className = 'text-center mb-3 w-75 mx-auto ' > Put in basket</Button>
            </Card>
        </Col>
    </Row>
    {
        device.info?
    <Row>
        <Col>
        <Container>
        <h3>Description</h3>
            {device.info.map((item) => {
                return(<div key = {item.id} className = 'p-2' style = {{background: item.id %2 === 0 ? 'lightgray' :  'transparent'}}>
                    {item.title}:{item.description}
                </div>);
            })}
            </Container>
        </Col>
    </Row>
    :
    <Row></Row>
    }
</Container>
    


 		);
 } 


export default DevicePage;
/*
<div className="card" style={{width: 399, height: 319}}>
              <div className ="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
*/