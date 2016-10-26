import React, { PropTypes } from 'react';
import { Modal } from 'react-bootstrap';

const Header = Modal.Header;
const Title = Modal.Title;

const ModalHeader = ({title}) => {
  return (
    <Header closeButton>
      <Title
        id="contained-modal-title-lg">
        <i
          className="fa fa-search"
          style={{marginRight: '20px'}}
          aria-hidden="true">
        </i>
        {title}
      </Title>
  </Header>
  );
};

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default ModalHeader;
