import React from 'react';
import { Modal } from 'react-bootstrap';
import ModalForm from './ModalForm';

function ModalShow(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.isModalOpen}
    >
      <ModalForm  hideModal = {props.hideModal} data = {props.data}/>
    </Modal>
  );
}

export default ModalShow;
