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
          bsSize="medium"
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
                 type="text"
                 className="form-control"
                 id="identifiant"
                 placeholder=""
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
             <div style={{height: '40px'}}></div>

             <div className="input-group m-b-10">
               <div className="input-group-btn">
                 <button
                   type="button"
                   className="btn btn-white dropdown-toggle"
                   data-toggle="dropdown">
                   Commence par
                   &nbsp;
                   <span className="caret"></span>
                 </button>
                 <ul className="dropdown-menu">
                   <li>
                     <a href="#">
                       Action
                     </a>
                   </li>
                   <li>
                     <a href="#">
                       Another action
                     </a>
                   </li>
                   <li>
                     <a href="#">
                       Something else here
                     </a>
                   </li>
                   <li className="divider"></li>
                   <li>
                     <a href="#">
                       Separated link
                     </a>
                   </li>
                 </ul>
               </div>
               <input
                 type="text"
                 placeholder="saisir la rechercher..."
                 className="form-control"
               />
               <span className="input-group-btn">
                 <button
                   className="btn btn-white orange_button"
                   type="button">
                   Go!
                 </button>
               </span>
             </div>

            </form>
          </Modal.Body>

          <ModalFooter
            onCloseClick={this.handlesOnClose}
          />

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
