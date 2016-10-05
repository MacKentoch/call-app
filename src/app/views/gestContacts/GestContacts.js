import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
import Identite                         from './identite/Identite';
import Contact                          from './contact/Contact';
import Dossiers                         from './dossiers/Dossiers';
import ContactsEtActivites              from './contactsEtActivites/ContactsEtActivites';
import FetchingAllContent               from './fetchingAllContent/FetchingAllContent';


class GestContacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };
    // identite related methods:
    this.handlesOnIdentiteCollapseClick = this.handlesOnIdentiteCollapseClick.bind(this);
    // contact related methods:
    this.handlesOnContactCollapseClick = this.handlesOnContactCollapseClick.bind(this);
    // dossiers related methods:
    this.handlesOnDossiersCollapseClick = this.handlesOnDossiersCollapseClick.bind(this);
    this.handlesOnDossierSelection = this.handlesOnDossierSelection.bind(this);
    this.handlesOnDossierEdition = this.handlesOnDossierEdition.bind(this);
    this.handlesOnDossierValidEdition = this.handlesOnDossierValidEdition.bind(this);
    this.handlesOnDossierCancelEdition = this.handlesOnDossierCancelEdition.bind(this);
    this.handlesOnCreateNewDossiersClick = this.handlesOnCreateNewDossiersClick.bind(this);
    // contactsEtActivites related methods
    // dossiers related methods:
    this.handlesOnContactsEtActivitesCollapseClick = this.handlesOnContactsEtActivitesCollapseClick.bind(this);
  }

  componentDidMount() {
    const { params: { benefId } } =  this.props;
    // const { location: { state: { contactCanal } } } = this.props;

    const { actions: { enterGestBeneficiaires, resetGestBenef } } =  this.props;
    const { actions: { addNotificationMessage } } = this.props;

    enterGestBeneficiaires();

    this.resetContactEditingAndCollpasing();
    this.resetDossierEditingAndCollpasing();

    const idBenef = parseInt(benefId, 10);
    if (idBenef) {
      addNotificationMessage({
        message: 'Consultation / Edition d\'un bénéficiaire existant',
        level: 'info'
      });
      this.refreshAllBenefData(idBenef);
    } else {
      addNotificationMessage({
        message: 'Création d\'un nouveau bénéficiaire',
        level: 'info'
      });
      // reset gestBenef form model
      resetGestBenef();
    }
  }

  componentWillReceiveProps(newProps) {
    const { params: { benefId } } =  newProps;
    const { actions: { resetGestBenef } } =  this.props;
    const { actions: { addNotificationMessage } } = this.props;

    const idBenef = parseInt(benefId, 10);

    if (benefId !== this.props.params.benefId) {
      // search another benef from same page = need to refresh
      this.resetContactEditingAndCollpasing();
      this.resetDossierEditingAndCollpasing();

      if (idBenef) {
        addNotificationMessage({
          message: 'Consultation / Edition d\'un bénéficiaire existant',
          level: 'info'
        });
        this.refreshAllBenefData(idBenef);
      } else {
        addNotificationMessage({
          message: 'Création d\'un nouveau bénéficiaire',
          level: 'info'
        });
        // reset gestBenef form model
        resetGestBenef();
      }
    }
  }

  componentWillUnmount() {
    const { actions: {leaveGestBeneficiaires  } } = this.props;
    leaveGestBeneficiaires();
  }

  render() {
    const { animated } = this.state;
    const { isFetchingAll } = this.props;
    // id benef if === 0  then create
    const { id } = this.props;
    // identite:
    const { isFetchingIdentite, lastFetchTimeIdentite, isCollapsedIdentite } = this.props;
    const { civilite, nom, prenom, nomJeuneFille, dateNaissance, numss, dateDeces, maritalStatus } = this.props;
    // contact:
    const { isFetchingContact, lastFetchTimeContact, isSavingContact, isEditingContact, isCollapsedContact } = this.props;
    const { fixedPhone, mobilePhone, email, numAdress, voie, complementAdr, codePostal, ville, pays } = this.props;
    // dossiers:
    const { isFetchingDossiers, lastFetchTimeDossiers, isSavingDossiers, isEditingDossiers, isCollapsedDossiers } = this.props;
    const { dossiers, editDossierId } = this.props;
    // contacts et activitées
    const { isFetchingContactsEtActivites, lastFetchTimeContactsEtActivites, contactsEtActivites, numDossierSelected, isCollapsedContactsEtActivites } = this.props;

    return(
      <section
        className={cx({
          'content':        true,
          'animatedViews':  animated,
          'view-enter':     animated
        })}>

        <div
          className="row"
          style={{marginBottom: '5px'}}>

          <div className="col-md-12">
            <section
              className="panel"
              style={{ paddingBottom: '10px'}}>
              <header className="panel-heading">
                {
                  (!id || id <= 0)
                  ? 'Création de contact'
                  : 'Edition de contact'
                }
              </header>

              <div className="panel-body">
              {
                isFetchingAll &&
                <div style={{height: '1000px'}}>
                  <div style={{height: '80px'}}></div>
                  <FetchingAllContent />
                </div>
              }
              {
                !isFetchingAll &&
                <div>

                  <Identite
                    isFetchingIdentite={isFetchingIdentite}
                    lastFetchTimeIdentite={lastFetchTimeIdentite}

                    isCollapsedIdentite={isCollapsedIdentite}
                    onCollapseClick={this.handlesOnIdentiteCollapseClick}

                    civilite={civilite}
                    nom={nom}
                    nomJeuneFille={nomJeuneFille}
                    prenom={prenom}
                    dateNaissance={dateNaissance}
                    numss={numss}
                    dateDeces={dateDeces}

                    maritalStatus={maritalStatus}
                    onMaritalStatusChanged={this.handlesOnMaritalStatusChanged}
                  />

                  <div style={{height: '10px'}}></div>

                  <Contact
                    isFetchingContact={isFetchingContact}
                    lastFetchTimeContact={lastFetchTimeContact}

                    isCollapsedContact={isCollapsedContact}
                    onCollapseClick={this.handlesOnContactCollapseClick}

                    fixedPhone={fixedPhone}
                    mobilePhone={mobilePhone}
                    email={email}
                    numAdress={numAdress}
                    voie={voie}
                    complementAdr={complementAdr}
                    codePostal={codePostal}
                    ville={ville}
                    pays={pays}
                  />

                  {
                    !isCollapsedIdentite &&
                      <div style={{height: '10px'}}></div>
                  }

                  {
                    !isCollapsedContact &&
                      <div style={{height: '40px'}}></div>
                  }

                  <div style={{height: '10px'}}></div>

                  {/* pas de dossier si beneficiaire sans id (il suffit de sauvegarder une fois pour lui créer un id et passer à modification de benef) */}
                  {
                    (parseInt(id, 10) > 0) &&
                    <div>
                      {/* dossiers */}
                      <Dossiers
                        dossiers={dossiers}

                        isFetchingDossiers={isFetchingDossiers}
                        lastFetchTimeDossiers={lastFetchTimeDossiers}

                        isEditingDossiers={isEditingDossiers}
                        editDossierId={editDossierId}
                        isSavingDossiers={isSavingDossiers}

                        onDossierValidEdition={this.handlesOnDossierValidEdition}
                        onDossierCancelEdition={this.handlesOnDossierCancelEdition}

                        isCollapsedDossiers={isCollapsedDossiers}
                        onCollapseClick={this.handlesOnDossiersCollapseClick}

                        onDossierSelection={this.handlesOnDossierSelection}

                        onDossierEdition={this.handlesOnDossierEdition}

                        onCreateDossierClick={this.handlesOnCreateNewDossiersClick}
                      />
                    </div>
                  }

                  {/* pas de contactsEtActivites si beneficiaire sans id */}
                  {
                    (parseInt(id, 10) > 0) &&
                    <div>
                      {/* contacts et activites */}

                      <div style={{height: '10px'}}></div>

                      <ContactsEtActivites
                        isFetchingContactsEtActivites={isFetchingContactsEtActivites}
                        lastFetchTimeContactsEtActivites={lastFetchTimeContactsEtActivites}

                        contactsEtActivites={contactsEtActivites}

                        numDossierSelected={numDossierSelected}

                        isCollapsedContactsEtActivites={isCollapsedContactsEtActivites}
                        onCollapseClick={this.handlesOnContactsEtActivitesCollapseClick}
                      />

                      <div style={{height: '10px'}}></div>
                    </div>
                  }
                </div>
              }
              </div>
            </section>
          </div>

        </div>
      </section>
    );
  }
  // ////////////////////////////////
  //  general
  // ////////////////////////////////

  // fetch all benef data and add notifications
  refreshAllBenefData(idBenef = 0) {
    if (idBenef && (parseInt(idBenef, 10) > 0)) {
      const { actions: { getGestBenefIfNeeded, addNotificationMessage } } = this.props;

      getGestBenefIfNeeded(idBenef)
        .then(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              addNotificationMessage({
                message: notificationPayload.message ? notificationPayload.message : '',
                level: notificationPayload.level ? notificationPayload.level : 'info'
              });
            }
          }
        )
        .catch(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              addNotificationMessage({
                message: notificationPayload.message ? notificationPayload.message : '',
                level: notificationPayload.level ? notificationPayload.level : 'error'
              });
            }
          }
        );
    }
  }

  // ////////////////////////////////
  //  Identite related methods
  // ////////////////////////////////
  refreshIdentiteBenefData(idBenef = 0, resetMessage = '') {
    if (idBenef && (parseInt(idBenef, 10) > 0)) {
      const { actions: { getGestBenefIdentiteIfNeeded, addNotificationMessage } } = this.props;

      getGestBenefIdentiteIfNeeded(idBenef)
        .then(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              /* eslint-disable no-nested-ternary */
              const message = resetMessage
                ? resetMessage
                : notificationPayload.message ? notificationPayload.message : '';
              /* eslint-enable no-nested-ternary */
              addNotificationMessage({
                message: message,
                level: notificationPayload.level ? notificationPayload.level : 'info'
              });
            }
          }
        )
        .catch(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              addNotificationMessage({
                message: notificationPayload.message ? notificationPayload.message : '',
                level: notificationPayload.level ? notificationPayload.level : 'error'
              });
            }
          }
        );
    }
  }

  handlesOnIdentiteCollapseClick() {
    const { isCollapsedIdentite, actions: { setIsCollapsedIdentite, unsetIsCollapsedIdentite } } = this.props;
    if (isCollapsedIdentite) {
      unsetIsCollapsedIdentite();
    } else {
      setIsCollapsedIdentite();
    }
  }

  // ////////////////////////////////
  //  Contact related methods
  // ////////////////////////////////
  refreshContactBenefData(idBenef = 0, resetMessage = '') {
    if (idBenef && (parseInt(idBenef, 10) > 0)) {
      const { actions: { getGestBenefContactIfNeeded, addNotificationMessage } } = this.props;

      getGestBenefContactIfNeeded(idBenef)
        .then(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              /* eslint-disable no-nested-ternary */
              const message = resetMessage
                ? resetMessage
                : notificationPayload.message ? notificationPayload.message : '';
              /* eslint-enable no-nested-ternary */
              addNotificationMessage({
                message: message,
                level: notificationPayload.level ? notificationPayload.level : 'info'
              });
            }
          }
        )
        .catch(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              addNotificationMessage({
                message: notificationPayload.message ? notificationPayload.message : '',
                level: notificationPayload.level ? notificationPayload.level : 'error'
              });
            }
          }
        );
    }
  }

  handlesOnContactCollapseClick() {
    const { isCollapsedContact, actions: { setIsCollapsedContact, unsetIsCollapsedContact } } = this.props;
    if (isCollapsedContact) {
      unsetIsCollapsedContact();
    } else {
      setIsCollapsedContact();
    }
  }

  // to reset contact editing state and collapsed state
  resetContactEditingAndCollpasing() {
    const { actions: { unsetIsEditingContact, unsetIsCollapsedContact } } = this.props;
    unsetIsEditingContact();
    unsetIsCollapsedContact();
  }

  // ////////////////////////////////
  //  dossiers related methods
  // ////////////////////////////////
  refreshDossiersBenefData(idBenef = 0, resetMessage = '') {
    if (idBenef && (parseInt(idBenef, 10) > 0)) {
      const { actions: { getGestBenefAllDossiersIfNeeded, addNotificationMessage } } = this.props;

      getGestBenefAllDossiersIfNeeded(idBenef)
        .then(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              /* eslint-disable no-nested-ternary */
              const message = resetMessage
                ? resetMessage
                : notificationPayload.message ? notificationPayload.message : '';
              /* eslint-enable no-nested-ternary */
              addNotificationMessage({
                message: message,
                level: notificationPayload.level ? notificationPayload.level : 'info'
              });
            }

            // refresh all contact et activites:
            this.refreshAllContactEtActivites(idBenef);
          }
        )
        .catch(
          notificationPayload => {
            if (notificationPayload && notificationPayload.showNotification) {
              addNotificationMessage({
                message: notificationPayload.message ? notificationPayload.message : '',
                level: notificationPayload.level ? notificationPayload.level : 'error'
              });
            }
          }
        );
    }
  }

  refreshAllContactEtActivites(idBenef = 0, resetMessage = '') {
    if (!idBenef || !(parseInt(idBenef, 10) > 0)) {
      return;
    }

    const {
      actions: {
        getGestBenefAllContactsEtActivitesIfNeeded,
        addNotificationMessage
      }
    } = this.props;

    getGestBenefAllContactsEtActivitesIfNeeded(idBenef)
      .then(
        notificationPayload => {
          if (notificationPayload && notificationPayload.showNotification) {
            /* eslint-disable no-nested-ternary */
            const message = resetMessage
              ? resetMessage
              : notificationPayload.message ? notificationPayload.message : '';
            /* eslint-enable no-nested-ternary */
            addNotificationMessage({
              message: message,
              level: notificationPayload.level ? notificationPayload.level : 'info'
            });
          }
        }
      )
      .catch(
        notificationPayload => {
          if (notificationPayload && notificationPayload.showNotification) {
            addNotificationMessage({
              message: notificationPayload.message ? notificationPayload.message : '',
              level: notificationPayload.level ? notificationPayload.level : 'error'
            });
          }
        }
      );
  }

  handlesOnDossiersCollapseClick() {
    const { isCollapsedDossiers, actions: { setIsCollapsedDossiers, unsetIsCollapsedDossiers } } = this.props;
    if (isCollapsedDossiers) {
      unsetIsCollapsedDossiers();
    } else {
      setIsCollapsedDossiers();
    }
  }

  handlesOnDossierSelection(dossierSelected = 0) {
    /* eslint-disable no-console */
    console.log('TODO: dossier selected: ', dossierSelected);
    // finalement pas besoin de cette méthode pour l'instant
    /* eslint-enable no-console */
  }

  handlesOnDossierEdition(dossierToEdit) {
    const { actions: { addNotificationMessage, setIsEditingDossier } } = this.props;
    // notification to inform enter edit mode
    const dossierIdToEdit = dossierToEdit.id;
    const numDossToEdit = dossierToEdit.numDossier;

    addNotificationMessage({
      message: `Les informations "Dossier" (${numDossToEdit}) sont maintenant éditables`,
      level: 'info'
    });
    setIsEditingDossier(dossierIdToEdit);
  }

  handlesOnDossierValidEdition(dossierUpdated) {
    const {
      actions: {
        unsetIsEditingDossier,
        updateGestBenefDossierIfNeeded
      },
      id
    } = this.props;

    /* eslint-disable no-unused-vars */
    updateGestBenefDossierIfNeeded(dossierUpdated)
      .then(
        response => {
          unsetIsEditingDossier();
          // IMPORTANT IF NOT ALREADY: UNCOMMENT LINE BELOW FOR PRODUCTION!!!!
          this.refreshDossiersBenefData(id); // refresh all dossiers for this bnefId
        }
      )
      .catch(
        error => {
          const {actions: {addNotificationMessage}} = this.props;
          addNotificationMessage({
            message: error.message ? error.message : 'Enregistrement des modifications du "Dossier" en erreur',
            level: 'error'
          });
        }
      );
    /* eslint-enable no-unused-vars */
  }

  handlesOnDossierCancelEdition() {
    const {
      actions: {
        unsetIsEditingDossier,
        addNotificationMessage,
        resetGestBenefDossier
      }
    } = this.props;
    const { params: { benefId } } =  this.props;

    unsetIsEditingDossier();
    // notification to inform leave edit mode
    addNotificationMessage({
      message: 'Annulation de l\'édition du "Dossier" (les changements ne seront pas sauvegardés)',
      level: 'warning'
    });

    const idBenef = parseInt(benefId, 10);
    if (idBenef) {
      // EXISTING BENEF: refresh Dossier data from backend to reset changes:
      const resetMessage = 'Données "Dossiers" du bénéficiaire réinitialisées';
      this.refreshDossiersBenefData(idBenef, resetMessage);
    } else {
      // NEW BENEF: reset changes:
      resetGestBenefDossier();
    }
  }

  // to reset contact editing state and collapsed state
  resetDossierEditingAndCollpasing() {
    const { actions: { unsetIsEditingContact, unsetIsCollapsedContact } } = this.props;
    unsetIsEditingContact();
    unsetIsCollapsedContact();
  }

  handlesOnCreateNewDossiersClick(event) {
    event.preventDefault();
    const { params: { benefId } } =  this.props;
    const { actions: { showNewBenefDossierModal } } = this.props;
    // needs a benefId to add a dossiers!:
    const idBenef = parseInt(benefId, 10);
    if (idBenef) {
      showNewBenefDossierModal(idBenef)
        .then(
          () => {
            return;
          }
        )
        .catch(
          error => {
            const {actions: {addNotificationMessage}} = this.props;
            addNotificationMessage({
              message: error.message ? error.message : 'Création d\'un nouveau dossiers impossible',
              level: 'error'
            });
          }
        );
    } else {
      const {actions: {addNotificationMessage}} = this.props;
      addNotificationMessage({
        message: 'Veuillez enregister les informations du nouveau bénéficiaire. \nLe bénéficaire doit exister dans l\'application avant de pouvoir lui ajouter des dossiers.',
        level: 'error'
      });
    }
  }

  // /////////////////////////////////////
  //  ContactsEtActivites related methods
  // /////////////////////////////////////
  handlesOnContactsEtActivitesCollapseClick() {
    const {
      isCollapsedContactsEtActivites,
      actions: {
        setIsCollapsedContactsEtActivites,
        unsetIsCollapsedContactsEtActivites
      }
    } = this.props;

    if (isCollapsedContactsEtActivites) {
      unsetIsCollapsedContactsEtActivites();
    } else {
      setIsCollapsedContactsEtActivites();
    }
  }
}

GestContacts.propTypes = {
  // react router
  params: PropTypes.object,
  location: PropTypes.object,

  currentView:  PropTypes.string.isRequired,
  // ///////////////////////
  // gestBenef data:
  // ///////////////////////
  lastActionTime: PropTypes.string.isRequired,
  isFetchingAll: PropTypes.bool.isRequired,

  id: PropTypes.number.isRequired,
  // ///////////////////////
  // identité
  // ///////////////////////
  isFetchingIdentite: PropTypes.bool.isRequired,
  lastFetchTimeIdentite: PropTypes.string.isRequired,

  isCollapsedIdentite: PropTypes.bool.isRequired,
  civilite: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  nomJeuneFille: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
  dateNaissance: PropTypes.string.isRequired,
  numss: PropTypes.string.isRequired,
  dateDeces: PropTypes.string.isRequired,
  maritalStatus: PropTypes.string.isRequired,
  // ///////////////////////
  // contact data
  // ///////////////////////
  isFetchingContact: PropTypes.bool.isRequired,
  lastFetchTimeContact: PropTypes.string.isRequired,
  isEditingContact: PropTypes.bool.isRequired,
  isSavingContact: PropTypes.bool.isRequired,
  isCollapsedContact: PropTypes.bool.isRequired,
  fixedPhone: PropTypes.string.isRequired,
  mobilePhone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  // contact data > sub: adress
  numAdress: PropTypes.string.isRequired,
  voie: PropTypes.string.isRequired,
  complementAdr: PropTypes.string.isRequired,
  codePostal: PropTypes.string.isRequired,
  ville: PropTypes.string.isRequired,
  pays: PropTypes.string.isRequired,
  // ///////////////////////
  // dossiers:
  // ///////////////////////
  isFetchingDossiers: PropTypes.bool.isRequired,
  lastFetchTimeDossiers: PropTypes.string.isRequired,

  isEditingDossiers: PropTypes.bool.isRequired,

  isSavingDossiers: PropTypes.bool.isRequired,

  isCollapsedDossiers: PropTypes.bool.isRequired,

  dossiers: PropTypes.array.isRequired,
  editDossierId: PropTypes.number.isRequired,
  // ///////////////////////
  // contacts Et activites:
  // ///////////////////////
  isFetchingContactsEtActivites: PropTypes.bool.isRequired,
  lastFetchTimeContactsEtActivites: PropTypes.string.isRequired,
  contactsEtActivites: PropTypes.array.isRequired,
  numDossierSelected: PropTypes.string.isRequired,
  isCollapsedContactsEtActivites: PropTypes.bool.isRequired,

  // ///////////////////////// ///////////////////////
  actions: PropTypes.shape({
    // view:
    enterGestBeneficiaires: PropTypes.func,
    leaveGestBeneficiaires: PropTypes.func,
    // notifications:
    addNotificationMessage: PropTypes.func,
    // get gestBenef:
    getGestBenefIfNeeded: PropTypes.func,
    // reset:
    resetGestBenef: PropTypes.func.isRequired,
    // //////////////////
    // identite
    // /////////////////
    // get
    getGestBenefIdentiteIfNeeded: PropTypes.func,
    // post
    postGestBenefIdentiteIfNeeded: PropTypes.func,
    // reset:
    resetGestBenefIdentite: PropTypes.func,
    // UI: Identite
    setIsEditingIdentite: PropTypes.func,
    unsetIsEditingIdentite: PropTypes.func,

    setIsCollapsedIdentite: PropTypes.func,
    unsetIsCollapsedIdentite: PropTypes.func,
    updateCiviliteIdentite: PropTypes.func,
    updateNomIdentite: PropTypes.func,
    updateNomDeJeuneFilleIdentite: PropTypes.func,
    updatePrenomIdentite: PropTypes.func,
    updateDateNaissanceIdentite: PropTypes.func,
    updateNumssIdentite: PropTypes.func,
    updateDateDecesIdentite: PropTypes.func,
    updateMaritalStatusIdentite: PropTypes.func,
    // //////////////////
    // contact
    // /////////////////
    // get
    getGestBenefContactIfNeeded: PropTypes.func,
    // post
    postGestBenefContactIfNeeded: PropTypes.func,
    // reset
    resetGestBenefContact: PropTypes.func,
    // UI: contact
    setIsEditingContact: PropTypes.func,
    unsetIsEditingContact: PropTypes.func,
    setIsCollapsedContact: PropTypes.func,
    unsetIsCollapsedContact: PropTypes.func,
    updateTelephoneFixeContact: PropTypes.func,
    updateTelephoneMobileContact: PropTypes.func,
    updateEmailContact: PropTypes.func,
    updateNumAdressNumber: PropTypes.func,
    updateVoieAdressContact: PropTypes.func,
    updateComplementAdressContact: PropTypes.func,
    updateCodePostalContact: PropTypes.func,
    updateVilleContact: PropTypes.func,
    updatePaysContact: PropTypes.func,
    // //////////////////
    // dossiers
    // /////////////////
    // get
    getGestBenefAllDossiersIfNeeded: PropTypes.func,
    // post (insert)
    addGestBenefNewDossierIfNeeded: PropTypes.func,
    // post (update)
    updateGestBenefDossierIfNeeded: PropTypes.func,
    // reset:
    resetGestBenefDossier: PropTypes.func,
    // UI dossiers
    setIsCollapsedDossiers: PropTypes.func,
    unsetIsCollapsedDossiers: PropTypes.func,

    setIsSavingNewDossier: PropTypes.func,
    unsetIsSavingNewDossier: PropTypes.func,

    setIsEditingDossier: PropTypes.func,
    unsetIsEditingDossier: PropTypes.func,
    // modal create new dossier:
    showNewBenefDossierModal: PropTypes.func.isRequired, // returns promise with notification data
    hideNewBenefDossierModal: PropTypes.func.isRequired,
    // ///////////////////////
    // contacts Et activites:
    // ///////////////////////
    // get
    getGestBenefAllContactsEtActivitesIfNeeded: PropTypes.func.isRequired,
    getGestBenefThisDossierContactsEtActivitesIfNeeded: PropTypes.func.isRequired,
    // UI
    setIsCollapsedContactsEtActivites: PropTypes.func.isRequired,
    unsetIsCollapsedContactsEtActivites: PropTypes.func.isRequired
  })
};

// to remove when full redux store is done:
GestContacts.defaultProps = {
  isEditingIdentite: false
};

export default GestContacts;
