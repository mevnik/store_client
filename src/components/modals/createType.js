import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {setType} from '../../http/deviceApi.js'



export const CreateType = ({show, onHide}) => {
  const [value,setValue] = useState('')

  const addType = () => {
    setType({name: value}).then(data => {setValue('')
      onHide()}
      )

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
          Add new Type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder = {'Enter Type'}
          value = {value}
          onChange = {e => setValue(e.target.value)}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = 'outline-dark' onClick={onHide}>Close</Button>
        <Button variant = 'outline-excess' onClick={addType}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}
