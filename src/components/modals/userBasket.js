import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {observer} from "mobx-react-lite";





export const UserBasket = observer(({show, onHide, Cart}) => {
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
          It's your cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
        { Cart?
          Cart.map((item) => <Row key = {item.device.id}>
            <Col md = {2}>{item.device.name}</Col>
            <Col>{item.device.image}</Col>
            <Col md = {2}>{item.count_device_id}</Col>

        </Row>)
          :
          <Row></Row>

        }
               
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = 'outline-dark' onClick={onHide}>Close</Button>
        <Button variant = 'outline-excess'>Add</Button>
      </Modal.Footer>
    </Modal>
  );
})
