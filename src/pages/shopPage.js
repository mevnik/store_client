
import React, {useContext,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeBar from '../components/typeBar.js';
import BrandBar from '../components/brandBar.js';
// import NavLink from 'react-bootstrap/NavLink' надо так:
// import { NavLink } from "react-router-dom"; // https://reactrouter.com/docs/en/v6/components/nav-link
// import { useLocation } from "react-router-dom";
import DeviceList from '../components/DeviceList.js';
import {observer} from "mobx-react-lite";
import{Context} from '../index.js';
import {fetchTypes} from '../http/deviceApi.js'
import {fetchBrands} from '../http/deviceApi.js'
import {fetchDevices} from '../http/deviceApi.js'
import {Pages} from './Pages.js'



const ShopPage = observer(() => {
    const {devices} = useContext(Context)
    useEffect(() => {
    fetchTypes().then((data) => {
      devices.setTypes(data)
    })
    fetchBrands().then((data) => {
      devices.setBrands(data)

    })
    fetchDevices(null,null,2,2).then((data) => {
      devices.setDevices(data.rows)
      devices.setTotal(data.count)

    })
  },[])

    useEffect(() => {
    fetchDevices(devices.selectedTypes.id,devices.selectedBrand.id,devices.Page,devices.Limit).then((data) => {
      devices.setDevices(data.rows)
      devices.setTotal(data.count)


    })
  },[devices.Page, devices.selectedTypes.id, devices.selectedBrand.id])

 return (

    <Container>
    <Row>
          <Col className = "border border-primery text-center p-3"> Brand</Col>

      </Row>
      <Row>
          <Col className = "border border-primery col-md-2 ">
           <TypeBar/>
          </Col>
          <Col className = "col-md-10 "> 
              <BrandBar/>
              <DeviceList/>
              <Pages/>
          </Col>

      </Row>
    </Container>


 ) 
})

export default ShopPage;

