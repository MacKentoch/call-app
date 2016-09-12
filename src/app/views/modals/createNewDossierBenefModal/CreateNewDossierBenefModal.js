import React, {
  Component,
  PropTypes
}                         from 'react';
import shallowCompare     from 'react-addons-shallow-compare';
import { Modal }          from 'react-bootstrap';
import ModalHeader        from './modalHeader/ModalHeader';
import ModalFooter        from './modalFooter/ModalFooter';
import FetchingIndicator  from './fetchingIndicator/FetchingIndicator';
import EditInput          from './editInput/EditInput';


class CreateNewDossierBenefModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handlesOnClose = this.handlesOnClose.bind(this);
    this.handlesOnRegimeChange = this.handlesOnRegimeChange.bind(this);
    this.handlesOnSocieteChange = this.handlesOnSocieteChange.bind(this);
    this.handlesOnNumSteChange = this.handlesOnNumSteChange.bind(this);
    this.handlesOnStatutBenefChange = this.handlesOnStatutBenefChange.bind(this);
    this.handlesOnDateEntreeChange = this.handlesOnDateEntreeChange.bind(this);
    this.handlesOnDateSortieChange = this.handlesOnDateSortieChange.bind(this);
    this.handlesOnDateTauxPleinChange = this.handlesOnDateTauxPleinChange.bind(this);
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
              <form role="form">
                {/* régime: */}
                <EditInput
                 // label:
                 showLabel={true}
                 labelText={'Régime'}
                 // value
                 value={regime}
                 onValueChanged={this.handlesOnRegimeChange}
                 // help block text:
                 showHelpBlock={true}
                 helpBlockText={'Le régime spécifique à ce dossier.'}
                />

                {/* societe: */}
                <EditInput
                 // label:
                 showLabel={true}
                 labelText={'Société'}
                 // value
                 value={societe}
                 onValueChanged={this.handlesOnSocieteChange}
                 // help block text:
                 showHelpBlock={true}
                 helpBlockText={'La société spécifique à ce dossier.'}
                />

                <div className="row">
                  <div className="col-xs-6">
                    {/* numSte: */}
                    <EditInput
                     // label:
                     showLabel={true}
                     labelText={'N° STE'}
                     // value
                     value={numSte}
                     onValueChanged={this.handlesOnNumSteChange}
                     // help block text:
                     showHelpBlock={true}
                     helpBlockText={'Le numéro STE spécifique à ce dossier.'}
                    />
                  </div>
                  <div className="col-xs-6">
                    {/* statut benef: */}
                    <EditInput
                     // label:
                     showLabel={true}
                     labelText={'Statut bénéficiaire'}
                     // value
                     value={statutBenef}
                     onValueChanged={this.handlesOnStatutBenefChange}
                     // help block text:
                     showHelpBlock={true}
                     helpBlockText={'Le statut du bénéficiaire spécifique à ce dossier.'}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-xs-6">
                    {/* date entree dispositif: */}
                    <EditInput
                     // label:
                     showLabel={true}
                     labelText={'Dispositif date entrée'}
                     // value
                     value={dateEntree}
                     onValueChanged={this.handlesOnDateEntreeChange}
                     // help block text:
                     showHelpBlock={true}
                     helpBlockText={'La date d\'entrée spécifique à ce dossier.'}
                    />
                  </div>
                  <div className="col-xs-6">
                    {/* date sortie dispositif: */}
                    <EditInput
                     // label:
                     showLabel={true}
                     labelText={'Dispositif date sortie'}
                     // value
                     value={dateSortie}
                     onValueChanged={this.handlesOnDateSortieChange}
                     // help block text:
                     showHelpBlock={true}
                     helpBlockText={'La date de sortie spécifique à ce dossier.'}
                    />
                  </div>
                </div>


                {/* date taux plein: */}
                <EditInput
                 // label:
                 showLabel={true}
                 labelText={'Date taux plein'}
                 // value
                 value={dateTauxPlein}
                 onValueChanged={this.handlesOnDateTauxPleinChange}
                 // help block text:
                 showHelpBlock={true}
                 helpBlockText={'La date taux plein spécifique à ce dossier.'}
                />

              </form>
            }
          </Modal.Body>

          <ModalFooter
            onCloseClick={this.handlesOnClose}
          />

        </Modal>
      </div>
    );
  }

  handlesOnRegimeChange(value) {
    const { actions: { updateRegimeNewBenefDossier } } = this.props;
    updateRegimeNewBenefDossier(value);
  }

  handlesOnSocieteChange(value) {
    const { actions: { updateSocieteNewBenefDossier } } = this.props;
    updateSocieteNewBenefDossier(value);
  }

  handlesOnNumSteChange(value) {
    const { actions: { updateNumSteNewBenefDossier } } = this.props;
    updateNumSteNewBenefDossier(value);
  }

  handlesOnStatutBenefChange(value) {
    const { actions: { updateStatutBenefNewBenefDossier } } = this.props;
    updateStatutBenefNewBenefDossier(value);
  }

  handlesOnDateEntreeChange(value) {
    const { actions: { updateDateEntreeNewBenefDossier } } = this.props;
    updateDateEntreeNewBenefDossier(value);
  }

  handlesOnDateSortieChange(value) {
    const { actions: { updateDateSortieNewBenefDossier } } = this.props;
    updateDateSortieNewBenefDossier(value);
  }

  handlesOnDateTauxPleinChange(value) {
    const { actions: { updateDateTauxPleinNewBenefDossier } } = this.props;
    updateDateTauxPleinNewBenefDossier(value);
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
