import React from 'react';

import { Modal } from 'react-bootstrap';

const ModalUI = props => {
  return (
    <Modal size={props.size} show={props.show} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.body}
      </Modal.Body>
      {props.children}
    </Modal>
  )
}

export default ModalUI;