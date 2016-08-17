import React, {
  Component,
  PropTypes
}                         from 'react';
import shallowCompare     from 'react-addons-shallow-compare';
import {
  Modal,
  Button
}                         from 'react-bootstrap';

class UploadMailAttachment extends Component {
  constructor(props) {
    super(props);

    this.handlesOnClose = this.handlesOnClose.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  render() {
    const { showModal, title  } = this.props;
    return (
      <div>
        <Modal
          {...this.props}
          show={showModal}
          onHide={this.close}
          bsSize="large"
          aria-labelledby="contained-modal-title-lg">
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-lg">
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Wrapped Text</h4>

            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={this.handlesOnClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  handlesOnClose() {
    const { onClose } = this.props;
    onClose();
  }
}

UploadMailAttachment.propTypes = {
  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onAttachmentsChange: PropTypes.func,
  onClose: PropTypes.func
};

UploadMailAttachment.defaultProps = {
  title: 'Ajouter des pièces jointes'
};

export default UploadMailAttachment;
