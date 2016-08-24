import React, {
  Component,
  PropTypes
}                         from 'react';
import shallowCompare     from 'react-addons-shallow-compare';
import {
  Modal
}                         from 'react-bootstrap';
import ModalHeader        from './modalHeader/ModalHeader';
import ModalFooter        from './modalFooter/ModalFooter';

class RechercheBenefModal extends Component {
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
          onHide={this.handlesOnClose}
          bsSize="large"
          aria-labelledby="contained-modal-title-md">
          <ModalHeader
            title={title}
          />
          <Modal.Body>

            <form role="form">
             <div className="form-group">
               <label htmlFor="exampleInputEmail1">
                 Identifiant
               </label>
               <input
                 type="email"
                 className="form-control"
                 id="exampleInputEmail1"
                 placeholder="Enter email"
               />
               <p className="help-block">
                 Identifiant du dossier
               </p>
             </div>
             <div className="form-group">
               <label
                 htmlFor="exampleInputPassword1">
                 Password
               </label>
               <input
                 type="password"
                 className="form-control"
                 id="exampleInputPassword1"
                 placeholder="Password"
               />
             </div>
             <div className="form-group">
               <label htmlFor="exampleInputFile">
                 File input
               </label>
               <input
                 type="file"
                 id="exampleInputFile"
               />
               <p className="help-block">
                 Example block-level help text here.
               </p>
             </div>
             <div className="checkbox">
               <label>
                 <input type="checkbox" />
                  Check me out
               </label>
             </div>

             <button
               type="submit"
               className="btn btn-block orange_button">
               Rechercher
             </button>

            </form>

          </Modal.Body>
          <ModalFooter />
        </Modal>
      </div>
    );
  }

  handlesOnClose() {
    const { onClose } = this.props;
    onClose();
  }
}

RechercheBenefModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func
};

RechercheBenefModal.defaultProps = {
  title: 'Recherche de bénéficiaires'
};

export default RechercheBenefModal;
