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
import SearchInput        from './searchInput/SearchInput';
import SearchButton       from './searchButton/SearchButton';

class RechercheBenefModal extends Component {
  constructor(props) {
    super(props);

    this.handlesOnClose = this.handlesOnClose.bind(this);
    this.handlesOnSearch = this.handlesOnSearch.bind(this);
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
          bsSize="lg"
          aria-labelledby="contained-modal-title-md">
          <ModalHeader
            title={title}
          />
          <Modal.Body>

            <form role="form">
             <SearchInput
               // label:
               showLabel={true}
               labelText={'Identifiant'}
               // help block text:
               showHelpBlock={true}
               helpBlockText={'Identifiant de dossier et non celui du bénéficaire'}
             />
             <SearchInput
               // label:
               showLabel={true}
               labelText={'Nom'}
               // help block text:
               showHelpBlock={false}
               helpBlockText={''}
             />
             <SearchInput
               // label:
               showLabel={true}
               labelText={'Prénom'}
               // help block text:
               showHelpBlock={false}
               helpBlockText={''}
             />
             <div style={{height: '40px'}}></div>



             <SearchButton
              buttonText={'Rechercher'}
              onClick={this.handlesOnSearch}
             />
            </form>
          </Modal.Body>

          <ModalFooter
            onCloseClick={this.handlesOnClose}
          />

        </Modal>
      </div>
    );
  }

  handlesOnSearch(event) {
    event.preventDefault();
    console.log('on search click: TODO');
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
