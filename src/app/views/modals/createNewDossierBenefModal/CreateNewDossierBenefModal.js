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
    const { showModal, title, isSavingDossiers  } = this.props;
    const {
      // benefId:
      benefId,
      // dossiers non editable fields:
      id,
      numDossier,
      domaine,
      // dossiers editable fields:
      regime,
      societe,
      numSte,
      statutBenef,
      dateEntree,
      dateSortie,
      dateTauxPlein
    } = this.props;

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
              isSavingDossiers &&
              <FetchingIndicator />
            }
            {
              !isSavingDossiers &&
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
  // modal UI:
  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func,

  isOpened: PropTypes.bool.isRequired,
  lastActionTime: PropTypes.string.isRequired,
  // saving flag:
  isSavingDossiers: PropTypes.bool.isRequired,
  // benefId:
  benefId: PropTypes.number.isRequired,
  // dossiers non editable fields:
  id: PropTypes.number.isRequired,
  numDossier: PropTypes.string.isRequired,
  domaine: PropTypes.string.isRequired,
  // dossiers editable fields:
  regime: PropTypes.string.isRequired,
  societe: PropTypes.string.isRequired,
  numSte: PropTypes.string.isRequired,
  statutBenef: PropTypes.string.isRequired,
  dateEntree: PropTypes.string.isRequired,
  dateSortie: PropTypes.string.isRequired,
  dateTauxPlein: PropTypes.string.isRequired,

  // Actions:
  actions: PropTypes.shape({
    // hide modal
    hideNewBenefDossierModal: PropTypes.func,
    // update fields:
    updateRegimeNewBenefDossier: PropTypes.func,
    updateSocieteNewBenefDossier: PropTypes.func,
    updateNumSteNewBenefDossier: PropTypes.func,
    updateStatutBenefNewBenefDossier: PropTypes.func,
    updateDateEntreeNewBenefDossier: PropTypes.func,
    updateDateSortieNewBenefDossier: PropTypes.func,
    updateDateTauxPleinNewBenefDossier: PropTypes.func,
    // save new benef dossier needs inputs: benefId, newDossier
    addGestBenefNewDossierIfNeeded: PropTypes.func
  }).isRequired
};

CreateNewDossierBenefModal.defaultProps = {
  title: 'Ajout d\'nouveau dossier'
};

export default CreateNewDossierBenefModal;
