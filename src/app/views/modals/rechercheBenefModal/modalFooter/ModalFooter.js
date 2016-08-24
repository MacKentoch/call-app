import React, { PropTypes } from 'react';
import {
  Modal,
  Button
}                           from 'react-bootstrap';

const Footer = Modal.Header;

const ModalFooter = ({ onCloseClick }) => {
  return (
    <Footer>
      <Button
        onClick={onCloseClick}>
        Fermer
      </Button>
    </Footer>
  );
};

ModalFooter.propTypes = {
  onCloseClick: PropTypes.func.isRequired
};

export default ModalFooter;
