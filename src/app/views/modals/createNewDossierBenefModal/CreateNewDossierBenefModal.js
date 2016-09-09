import React, {
  Component,
  PropTypes
}                         from 'react';
import shallowCompare     from 'react-addons-shallow-compare';
import { Modal }          from 'react-bootstrap';
import ModalHeader        from './modalHeader/ModalHeader';
import ModalFooter        from './modalFooter/ModalFooter';
import FetchingIndicator  from './fetchingIndicator/FetchingIndicator';


class CreateNewDossierBenefModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };

    this.handlesOnClose = this.handlesOnClose.bind(this);
  }

  componentDidMount() {
    //
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
            {
              searchFetching &&
              <FetchingIndicator />
            }
            {
              !searchFetching &&
              <span>
                Modal content hideRechercheBenefModal
              </span>
            }
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

CreateNewDossierBenefModal.contextTypes = {
  // for manual routing
  router: React.PropTypes.object.isRequired
};

CreateNewDossierBenefModal.propTypes = {
  params: PropTypes.object, // react router

  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func,

  actions: PropTypes.shape({
    hideNewBenefDossierModal: PropTypes.func.isRequired
  }).isRequired
};

CreateNewDossierBenefModal.defaultProps = {
  title: 'Ajout d\'nouveau dossier'
};

export default CreateNewDossierBenefModal;
