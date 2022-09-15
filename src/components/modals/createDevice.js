import React,  {useContext, useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import{Context} from '../../index.js';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {fetchTypes, fetchBrands, setDevices} from '../../http/deviceApi.js'
import {observer} from "mobx-react-lite";



export const CreateDevice = observer(({show, onHide}) => {

  const {devices} = useContext(Context);
  const [info, setInfo] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);


  useEffect(() => {
    fetchTypes().then((data) => devices.setTypes(data))
    fetchBrands().then((data) => devices.setBrands(data))

  },[]
    )
//для понимания ... https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// https://stasonmars.ru/javascript/operator-spread-i-rest-parametry-v-javascript/
const addInfo = () => {
  const idx = (info.length === 0) ? 0 : info[info.length-1].id + 1;
  setInfo([...info,{id: idx, title: '',description: '',number: Date.now()}]);
}

const selectFile = e => {setFile(e.target.files[0])}
//const selectFile = e => {console.log(e.target.files[0])}

const deleteInfo = (id) => {
setInfo(info.filter((item) => item.id !== id))
}

const changeInfo = (key,value,number) => {
  setInfo(info.map((item) =>(item.number === number) ?  {...item,[key]:value} : item))
}


const addDevice = () => {
  const formData = new FormData()
  formData.append('name',name)
  formData.append('price',String(price))
  formData.append('image',file)
  formData.append('typeId',devices.selectedTypes.id)
  formData.append('brandId',devices.selectedBrand.id)
  formData.append('info',JSON.stringify(info))
  setDevices(formData).then(data => onHide())
}


  return (
    <Modal
    show = {show}
    onHide = {onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new Device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className = 'mb-2'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {devices.selectedTypes.name||'Choose type'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {devices.Types.map((type) => <Dropdown.Item 
                key = {type.id}
                onClick={()=> devices.setselectedTypes(type)}
                >
                 {type.name}
                 </Dropdown.Item>)}
            </Dropdown.Menu>

          </Dropdown>

          <Dropdown className = 'mb-2'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {devices.selectedBrand.name||'Choose brand'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {devices.Brands.map((brand) => <Dropdown.Item 
                key = {brand.id}
                onClick={() => devices.setselectedBrand(brand)}
                > 
                {brand.name}
                </Dropdown.Item>)}
            </Dropdown.Menu>

          </Dropdown>
          <Form.Control placeholder = 'Enter name' className = 'mt-3'
          value = {name} onChange = {e => setName(e.target.value)}
          />
          <Form.Control type = 'number' placeholder = 'Enter price' className = 'mt-3'
          value = {price} onChange = {e => setPrice(Number(e.target.value))}
          />
          <Form.Control type = 'file' className = 'mt-3' onChange = {selectFile}/>

          <hr/>

          <Button variant = 'outline-dark' onClick = {addInfo}>Add Information</Button>
          {info.map((item) =>
            <Row key = {item.number} className = 'my-2'>
              <Col className = 'col-md-4'>
                <Form.Control placeholder = 'Enter Title'
                value = {item.title}
                onChange = {(e) => changeInfo('title', e.target.value, item.number)}

                />
              </Col>
              <Col className = 'col-md-4'>
                <Form.Control placeholder = 'Enter Description'
                value = {item.description}
                onChange = {(e) => changeInfo('description', e.target.value, item.number)}

                />
                
              </Col>
              <Col className = 'col-md-4'>
                <Button variant = 'outline-danger' onClick = {() => deleteInfo(item.id)}>Delite</Button>
              </Col>
            </Row>
          )}

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = 'outline-dark' onClick={onHide}>Close</Button>
        <Button variant = 'outline-excess' onClick={addDevice}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
})
