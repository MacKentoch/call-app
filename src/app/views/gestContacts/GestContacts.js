import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
import Identite                         from './identite/Identite';
import Contact                          from './contact/Contact';
import Dossiers                         from './dossiers/Dossiers';
import FetchingAllContent               from './fetchingAllContent/FetchingAllContent';
import FicheActivite                    from './ficheActivite/FicheActivite';
import FicheContact                     from './ficheContact/FicheContact';


class GestContacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };

    // identite related methods:
    this.handlesOnIdentiteCollapseClick = this.handlesOnIdentiteCollapseClick.bind(this);
    // contact (benef) related methods:
    this.handlesOnContactBenefCollapseClick = this.handlesOnContactBenefCollapseClick.bind(this);
    // dossiers related methods:
    this.handlesOnDossiersCollapseClick = this.handlesOnDossiersCollapseClick.bind(this);
    this.handlesOnDossierSelection = this.handlesOnDossierSelection.bind(this);
    // fiche contact related methods:
    this.handlesOnFicheContactCollapseClick = this.handlesOnFicheContactCollapseClick.bind(this);
    // fiche activite related methods:
    this.handlesOnFicheActiviteCollapseClick = this.handlesOnFicheActiviteCollapseClick.bind(this);
    // save fiche contact
    this.handlesSaveFicheContact = this.handlesSaveFicheContact.bind(this);
    // (fiche contact) add combinaison motif to edit
    this.handlesAddNewActivite = this.handlesAddNewActivite.bind(this);
    // (fiche contact) remove combinaison motif to edit
    this.handlesRemoveNewMotif = this.handlesRemoveNewMotif.bind(this);

    this.handlesSaveMotifFicheContact = this.handlesSaveMotifFicheContact.bind(this);

    this.handlesOnSaveFicheActiviteNewComment = this.handlesOnSaveFicheActiviteNewComment.bind(this);
  }

  componentDidMount() {
    const { params: { benefId } } =  this.props;
    // const { location: { state: { contactId, contactCanal } } } = this.props;
    const { location: { state: { contactId } } } = this.props;
    const { actions: { enterGestContacts } } =  this.props;
    const { actions: { addNotificationMessage } } = this.props;
    enterGestContacts();

    // test (fix a contactId) to delete:
    const contactIdx = parseInt(1, 10);

    // // to uncomment:
    // const contactIdx = parseInt(contactId, 10);

    this.refreshAllContactData(benefId, contactIdx);
    if (contactIdx > 0) {
      addNotificationMessage({
        message: 'Consultation / Edition d\'un contact existant',
        level: 'info'
      });
      this.refreshFicheContactFicheActiviteData(benefId, contactIdx);
    } else {
      addNotificationMessage({
        message: 'Création d\'un nouveau contact',
        level: 'info'
      });
      // TODO
      // reset contact and activite form model
      // resetGestContacts();
    }
  }

  // componentWillReceiveProps(newProps) {
  //   const { params: { benefId } } =  newProps;
  //   // const { location: { state: { contactId, contactCanal } } } = newProps;
  //   const { location: { state: { contactId } } } = newProps;
  //   // const { actions: { resetGestBenef } } =  this.props;
  //   const { actions: { addNotificationMessage } } = this.props;
  //
  //   const idBenef = parseInt(benefId, 10);
  //   const contactIdNew = parseInt(contactId, 10);
  //
  //   if (contactIdNew !== this.props.location.state.contactId) {
  //     // search another contact from same page (because of modal) = need to refresh
  //     this.resetIdentiteCollapsing();
  //     this.resetContactCollpasing();
  //     this.resetDossierCollpasing();
  //
  //     if (contactIdNew) {
  //       addNotificationMessage({
  //         message: 'Consultation / Edition d\'un contact existant',
  //         level: 'info'
  //       });
  //       this.refreshAllContactData(idBenef, contactIdNew);
  //     } else {
  //       addNotificationMessage({
  //         message: 'Création d\'un nouveau contact',
  //         level: 'info'
  //       });
  //       // TODO
  //       // reset gestBenef form model
  //       // resetGestBenef();
  //     }
  //   }
  // }

  componentWillUnmount() {
    const { actions: { leaveGestContacts } } = this.props;
    leaveGestContacts();
  }

  render() {
    const { params: { benefId } } =  this.props;
    const { animated } = this.state;
    const { isFetchingAll } = this.props;
    // id benef if === 0  then create
    const { contactId } = this.props;
    // identite:
    const { isFetchingIdentite, lastFetchTimeIdentite, isCollapsedIdentite } = this.props;
    const { civilite, nom, prenom, nomJeuneFille, dateNaissance, numss, dateDeces, maritalStatus } = this.props;
    // contact:
    const { isFetchingContact, lastFetchTimeContact, isCollapsedBenefContact } = this.props;
    const { fixedPhone, mobilePhone, email, numAdress, voie, complementAdr, codePostal, ville, pays } = this.props;
    // dossiers:
    const { isFetchingDossiers, lastFetchTimeDossiers, isCollapsedDossiers } = this.props;
    const { dossiers } = this.props;
    // fiche contact
    const {
      isCollapsedFicheContact,
      lastFetchTimeFicheContact,
      isFetchingFicheContact,
      isSavingFicheContact,

      dateCreationFicheContact,
      creeParFicheContact,
      dateReceptionFicheContact,
      statutIndexFicheContact,
      listStatutFicheContact,
      dateClotureFicheContact,
      clotureParFicheContact,
      typeIndexFicheContact,
      listTypeFicheContact,
      canalIndexFicheContact,
      // onCanalIndexFicheContactChanged,
      listCanauxFicheContact,
      // onListCanauxFicheContactChanged,
      numDossierIndexSelected,
      listNumDossierFicheContact,
      // onListNumDossierFicheContactChanged,
      domaineFicheContact,
      statutBenefFicheContact,
      listStatutBenefFicheContact,
      // onStatutBenefFicheContactChanged,
      attachmentsFicheContact,
      // onAttachmentsFicheContactChanged,
      commentaireFicheContact,
      groupeDestinataireIsActive,
      // onGroupeDestinataireIsActiveChanged,
      groupeDestinataireIdSelected,

      listGroupeDestinataire,
      listMotifLevel2,
      listMotifLevel3,
      listMotifLevel4,
      isSavingFicheNewActivite,
      listStatutFicheActivite,
      isSavingFicheNewActiviteNewComment
      // onListGroupeDestinataireChanged
    } = this.props;

    const {
      actions: {
        onDateCreationFicheContactChanged,
        onDateReceptionFicheContactChanged,
        onStatutIndexFicheContactChanged,
        // onDateClotureFicheContactChanged,
        onTypeIndexFicheContactChanged,
        onNumDossierIndexSelectedChanged,
        onDomaineFicheContactChanged,
        onCommentaireFicheContactChanged,
        onGroupeDestinataireIdSelectedChanged,
        saveFicheContact,
        // saveMotifFicheContact,
        // addNewCombinaisonMotifsFicheContact,
        // removeNewCombinaisonMotifsFicheContact,
        onChangeFicheContactMotifNiveau2,
        onChangeFicheContactMotifNiveau3,
        onChangeFicheContactMotifNiveau4
      }
    } = this.props;

    // fiche activite
    const {
      activites,
      activiteUpdateTime,
      isCollapsedFicheActivite,
      isFetchingFicheActivite,
      lastFetchTimeFicheActivite,
      isSavingActivite,
      activiteIdBeingEditing,
      selectedActiviteId,
      listCanauxFicheActivite
    } = this.props;

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
                  (!contactId || contactId <= 0)
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

                    isCollapsedContact={isCollapsedBenefContact}
                    onCollapseClick={this.handlesOnContactBenefCollapseClick}

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
                    !isCollapsedBenefContact &&
                      <div style={{height: '40px'}}></div>
                  }

                  <div style={{height: '10px'}}></div>

                  {/* pas de dossier si beneficiaire sans id (il suffit de sauvegarder une fois pour lui créer un id et passer à modification de benef) */}
                  <div>
                    {/* dossiers */}
                    <Dossiers
                      dossiers={dossiers}

                      isFetchingDossiers={isFetchingDossiers}
                      lastFetchTimeDossiers={lastFetchTimeDossiers}

                      isCollapsedDossiers={isCollapsedDossiers}
                      onCollapseClick={this.handlesOnDossiersCollapseClick}

                      onDossierSelection={this.handlesOnDossierSelection}
                    />
                  </div>
                  {/* pas de contactsEtActivites si beneficiaire sans id */}
                  {
                    // (parseInt(id, 10) > 0) &&
                    <div>
                      {/* contacts et activites */}

                      <div style={{height: '10px'}}></div>

                      <FicheContact
                        benefId={benefId}

                        contactId={contactId}

                        lastFetchTimeFicheActivite={lastFetchTimeFicheActivite}

                        isCollapsedFicheContact={isCollapsedFicheContact}
                        onCollapseClick={this.handlesOnFicheContactCollapseClick}
                        lastFetchTimeFicheContact={lastFetchTimeFicheContact}
                        isFetchingFicheContact={isFetchingFicheContact}
                        isSavingFicheContact={isSavingFicheContact}

                        dateCreationFicheContact={dateCreationFicheContact}
                        onDateCreationFicheContactChanged={onDateCreationFicheContactChanged}

                        creeParFicheContact={creeParFicheContact}

                        dateReceptionFicheContact={dateReceptionFicheContact}
                        onDateReceptionFicheContactChanged={onDateReceptionFicheContactChanged}

                        statutIndexFicheContact={statutIndexFicheContact}
                        onStatutIndexFicheContactChanged={onStatutIndexFicheContactChanged}

                        listStatutFicheContact={listStatutFicheContact}

                        dateClotureFicheContact={dateClotureFicheContact}
                        // onDateClotureFicheContactChanged={onDateClotureFicheContactChanged}

                        clotureParFicheContact={clotureParFicheContact}

                        typeIndexFicheContact={typeIndexFicheContact}
                        onTypeIndexFicheContactChanged={onTypeIndexFicheContactChanged}

                        listTypeFicheContact={listTypeFicheContact}

                        canalIndexFicheContact={canalIndexFicheContact}
                        // onCanalIndexFicheContactChanged={onCanalIndexFicheContactChanged}

                        listCanauxFicheContact={listCanauxFicheContact}
                        // onListCanauxFicheContactChanged={onListCanauxFicheContactChanged}

                        numDossierIndexSelected={numDossierIndexSelected}
                        onNumDossierIndexSelectedChanged={onNumDossierIndexSelectedChanged}

                        listNumDossierFicheContact={listNumDossierFicheContact}
                        // onListNumDossierFicheContactChanged={onListNumDossierFicheContactChanged}

                        domaineFicheContact={domaineFicheContact}
                        onDomaineFicheContactChanged={onDomaineFicheContactChanged}

                        statutBenefFicheContact={statutBenefFicheContact}
                        // onStatutBenefFicheContactChanged= {onStatutBenefFicheContactChanged}

                        listStatutBenefFicheContact={listStatutBenefFicheContact}

                        attachmentsFicheContact={attachmentsFicheContact}
                        // onAttachmentsFicheContactChanged={onAttachmentsFicheContactChanged}

                        commentaireFicheContact={commentaireFicheContact}
                        onCommentaireFicheContactChanged={onCommentaireFicheContactChanged}

                        groupeDestinataireIsActive={groupeDestinataireIsActive}
                        // onGroupeDestinataireIsActiveChanged={onGroupeDestinataireIsActiveChanged}

                        groupeDestinataireIdSelected={groupeDestinataireIdSelected}
                        onGroupeDestinataireIdSelectedChanged={onGroupeDestinataireIdSelectedChanged}

                        listGroupeDestinataire={listGroupeDestinataire}
                        // onListGroupeDestinataireChanged={onListGroupeDestinataireChanged}

                        activites={activites}
                        activiteUpdateTime={activiteUpdateTime}
                        isSavingFicheNewActivite={isSavingFicheNewActivite}

                        listMotifsNiveau2={listMotifLevel2}
                        listMotifsNiveau3={listMotifLevel3}
                        listMotifsNiveau4={listMotifLevel4}

                        saveFicheContact={this.handlesSaveFicheContact}
                        onAddNewMotifs={this.handlesAddNewActivite}
                        saveMotifs={this.handlesSaveMotifFicheContact}
                        onRemoveMotifs={this.handlesRemoveNewMotif}

                        onChangeNiveau2={onChangeFicheContactMotifNiveau2}
                        onChangeNiveau3={onChangeFicheContactMotifNiveau3}
                        onChangeNiveau4={onChangeFicheContactMotifNiveau4}
                      />
                      <div style={{height: '10px'}}></div>

                      <FicheActivite
                        activites={activites}

                        listMotifsNiveau4={listMotifLevel4}

                        listStatutFicheActivite={listStatutFicheActivite}

                        listCanauxFiche={listCanauxFicheContact}

                        isCollapsedFicheActivite={isCollapsedFicheActivite}
                        onCollapseClick={this.handlesOnFicheActiviteCollapseClick}

                        isFetchingFicheActivite={isFetchingFicheActivite}
                        lastFetchTimeActivites={lastFetchTimeFicheActivite}

                        isSavingActivite={isSavingActivite}
                        activiteIdBeingEditing={activiteIdBeingEditing}

                        selectedActiviteId={selectedActiviteId}
                        listCanauxFicheActivite={listCanauxFicheActivite}

                        isSavingFicheNewActiviteNewComment={isSavingFicheNewActiviteNewComment}
                        onSaveFicheActiviteNewComment={this.handlesOnSaveFicheActiviteNewComment}
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

  // fetch all contacts benef data and add notifications
  refreshAllContactData(idBenef = 0, contactId = 0) {
    const { actions: { getGestContactsIfNeeded, addNotificationMessage } } = this.props;

    getGestContactsIfNeeded(idBenef, contactId)
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

  // ////////////////////////////////
  //  Identite related methods
  // ////////////////////////////////
  handlesOnIdentiteCollapseClick() {
    const {
      isCollapsedIdentite,
      actions: {
        setIsCollapsedContactsIdentite,
        unsetIsCollapsedContactsIdentite
      }
    } = this.props;

    if (isCollapsedIdentite) {
      unsetIsCollapsedContactsIdentite();
    } else {
      setIsCollapsedContactsIdentite();
    }
  }

  // to reset identite collapsed state
  resetIdentiteCollapsing() {
    const { actions: { unsetIsCollapsedContactsIdentite } } = this.props;
    unsetIsCollapsedContactsIdentite();
  }

  // ////////////////////////////////
  //  Contact (benef) related methods
  // ////////////////////////////////
  handlesOnContactBenefCollapseClick() {
    const {
      isCollapsedBenefContact,
      actions: {
        setIsCollapsedContactsBenefContact,
        unsetIsCollapsedContactsBenefContact
      }
    } = this.props;

    if (isCollapsedBenefContact) {
      unsetIsCollapsedContactsBenefContact();
    } else {
      setIsCollapsedContactsBenefContact();
    }
  }

  // to reset contact collapsed state
  resetContactCollpasing() {
    const { actions: { unsetIsCollapsedContactsBenefContact } } = this.props;
    unsetIsCollapsedContactsBenefContact();
  }

  // ////////////////////////////////
  //  dossiers related methods
  // ////////////////////////////////

  handlesOnDossiersCollapseClick() {
    const {
      isCollapsedDossiers,
      actions: {
        setIsCollapsedContactsDossiers,
        unsetIsCollapsedContactsDossiers
      }
    } = this.props;

    if (isCollapsedDossiers) {
      unsetIsCollapsedContactsDossiers();
    } else {
      setIsCollapsedContactsDossiers();
    }
  }

  handlesOnDossierSelection(dossierSelected = 0) {
    /* eslint-disable no-console */
    console.log('TODO: dossier selected: ', dossierSelected);
    // finalement pas besoin de cette méthode pour l'instant
    /* eslint-enable no-console */
  }

  // to reset contact editing state and collapsed state
  resetDossierCollpasing() {
    const { actions: { unsetIsCollapsedContactsBenefContact } } = this.props;
    unsetIsCollapsedContactsBenefContact();
  }

  // /////////////////////////////////////
  //  fiches Contact related methods
  // /////////////////////////////////////
  refreshFicheContactFicheActiviteData(benefId = 0, contactId = 0) {
    const {
      actions: {
        addNotificationMessage,
        getGestContactsAllMotifsIfNeeded,
        getGestContactsFicheContactIfNeeded
      }
    } = this.props;

    const promises = [
      getGestContactsAllMotifsIfNeeded(),
      getGestContactsFicheContactIfNeeded(contactId)
    ];

    Promise
      .all(promises)
      .then(
        notificationPayloadArray => {
          if (!Array.isArray(notificationPayloadArray)) {
            if (notificationPayloadArray && notificationPayloadArray.showNotification) {
              addNotificationMessage({
                message: notificationPayloadArray.message ? notificationPayloadArray.message : '',
                level: notificationPayloadArray.level ? notificationPayloadArray.level : 'info'
              });
            }
          } else {
            notificationPayloadArray.forEach(
              notificationPayload => {
                if (notificationPayload && notificationPayload.showNotification) {
                  addNotificationMessage({
                    message: notificationPayload.message ? notificationPayload.message : '',
                    level: notificationPayload.level ? notificationPayload.level : 'info'
                  });
                }
              }
            );
          }
        }
      )
      .catch(
        notificationPayloadArray => {
          if (!Array.isArray(notificationPayloadArray)) {
            if (notificationPayloadArray && notificationPayloadArray.showNotification) {
              addNotificationMessage({
                message: notificationPayloadArray.message ? notificationPayloadArray.message : '',
                level: notificationPayloadArray.level ? notificationPayloadArray.level : 'error'
              });
            }
          } else {
            notificationPayloadArray.forEach(
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
      );
  }

  handlesOnFicheContactCollapseClick() {
    const {
      isCollapsedFicheContact,
      actions: {
        setIsCollapsedContactsFicheContact,
        unsetIsCollapsedContactsFicheContact
      }
    } = this.props;

    if (isCollapsedFicheContact) {
      unsetIsCollapsedContactsFicheContact();
    } else {
      setIsCollapsedContactsFicheContact();
    }
  }

  handlesSaveFicheContact(payload) {
    const {
      actions: {
        saveFicheContact,
        addNotificationMessage
      }
    } = this.props;

    saveFicheContact(payload)
      .then(
        notificationPayload => {
          console.log('should show notification');

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

  handlesAddNewActivite() {
    const {
      actions: {
        addNewCombinaisonMotifsFicheContact,
        addNotificationMessage
      }
    } = this.props;

    addNewCombinaisonMotifsFicheContact()
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

  handlesRemoveNewMotif(activiteIndex) {
    const {
      actions: {
        removeNewCombinaisonMotifsFicheContact,
        addNotificationMessage
      }
    } = this.props;

    removeNewCombinaisonMotifsFicheContact(activiteIndex)
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

  handlesSaveMotifFicheContact(activiteIndex) {
    const {
      actions: {
        saveMotifFicheContact,
        addNotificationMessage
      }
    } = this.props;

    saveMotifFicheContact(activiteIndex)
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
  // /////////////////////////////////////
  //  fiches activite related methods
  // /////////////////////////////////////
  handlesOnFicheActiviteCollapseClick() {
    const {
      isCollapsedFicheActivite,
      actions: {
        setIsCollapsedContactsFicheActivite,
        unsetIsCollapsedContactsFicheActivite
      }
    } = this.props;

    if (isCollapsedFicheActivite) {
      unsetIsCollapsedContactsFicheActivite();
    } else {
      setIsCollapsedContactsFicheActivite();
    }
  }

  handlesOnSaveFicheActiviteNewComment(activiteIndex, newCommentValue) {
    const {
      actions: {
        saveNewCommentFicheActivite,
        addNotificationMessage
      }
    } = this.props;

    saveNewCommentFicheActivite(activiteIndex, newCommentValue)
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

  contactId: PropTypes.number.isRequired,
  benefId: PropTypes.number.isRequired,
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
  // contact data (benef)
  // ///////////////////////
  isFetchingContact: PropTypes.bool.isRequired,
  lastFetchTimeContact: PropTypes.string.isRequired,
  isCollapsedBenefContact: PropTypes.bool.isRequired,
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
  isCollapsedDossiers: PropTypes.bool.isRequired,
  dossiers: PropTypes.array.isRequired,
  // ///////////////////////
  // fiche contact data
  // ///////////////////////
  isCollapsedFicheContact: PropTypes.bool.isRequired,
  lastFetchTimeFicheContact: PropTypes.string.isRequired,
  isFetchingFicheContact: PropTypes.bool.isRequired,
  isSavingFicheContact: PropTypes.bool.isRequired,

  dateCreationFicheContact: PropTypes.string.isRequired,
  creeParFicheContact: PropTypes.string.isRequired,
  dateReceptionFicheContact: PropTypes.string.isRequired,
  statutIndexFicheContact: PropTypes.number.isRequired,
  listStatutFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  dateClotureFicheContact: PropTypes.string.isRequired,
  clotureParFicheContact: PropTypes.string.isRequired,
  typeIndexFicheContact: PropTypes.number.isRequired, // index par default du type de fiche contact de listTypeFicheContact
  listTypeFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired, // tous (enum) les types de fiche de contact
  canalIndexFicheContact: PropTypes.number.isRequired,
  // onCanalIndexFicheContactChanged: PropTypes.func.isRequired,
  listCanauxFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  // onListCanauxFicheContactChanged: PropTypes.func.isRequired,
  numDossierIndexSelected: PropTypes.number.isRequired,
  listNumDossierFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  // onListNumDossierFicheContactChanged: PropTypes.func.isRequired,
  domaineFicheContact: PropTypes.string.isRequired,
  statutBenefFicheContact: PropTypes.string.isRequired,
  // onStatutBenefFicheContactChanged: PropTypes.func.isRequired,
  listStatutBenefFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  attachmentsFicheContact: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['zip', 'rar', '7zip', 'pdf', 'txt', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'png', 'jpg', 'jpeg', 'bmp']),
      name: PropTypes.string.isRequired,
      filePath: PropTypes.string.isRequired,
      size: PropTypes.string.isRequired
    })
  ).isRequired,
  // onAttachmentsFicheContactChanged: PropTypes.func.isRequired,
  commentaireFicheContact: PropTypes.string.isRequired,
  groupeDestinataireIsActive: PropTypes.bool.isRequired,  // la list de choix doit être desactivée si statutIndexFicheContact <> En-cours
  // onGroupeDestinataireIsActiveChanged: PropTypes.func.isRequired,
  groupeDestinataireIdSelected: PropTypes.number.isRequired,

  listGroupeDestinataire: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      libelle: PropTypes.string
    })
  ).isRequired, // to fill from server query
  // onListGroupeDestinataireChanged: PropTypes.func.isRequired,

  // ///////////////////////
  // fiche activite data
  // ///////////////////////
  isCollapsedFicheActivite: PropTypes.bool.isRequired,
  isFetchingFicheActivite: PropTypes.bool.isRequired,
  lastFetchTimeFicheActivite: PropTypes.string.isRequired,
  isSavingActivite: PropTypes.bool.isRequired,

  listStatutFicheActivite: PropTypes.arrayOf(PropTypes.string).isRequired,

  activiteIdBeingEditing: PropTypes.number.isRequired, // utle si changement de motif sur une activite

  selectedActiviteId: PropTypes.number.isRequired,
  listCanauxFicheActivite: PropTypes.arrayOf(PropTypes.string).isRequired,

  listMotifLevel2: PropTypes.array.isRequired,
  listMotifLevel3: PropTypes.array.isRequired,
  listMotifLevel4: PropTypes.array.isRequired,

  activiteUpdateTime: PropTypes.string.isRequired,
  isSavingFicheNewActivite: PropTypes.bool.isRequired,
  isSavingFicheNewActiviteNewComment: PropTypes.bool.isRequired,

  activites: PropTypes.arrayOf(
    PropTypes.shape({
      activiteId: PropTypes.number.isRequired, // activite est un combinaison de motifLevel2+motifLevel3+motifLevel4
      isEditable: PropTypes.bool, // si activiteId === 0 alors reste editable (on peut changer les motifs) sinon plus editable et les motifs sont bloqués
      selectMotifLevel2IdFicheContact: PropTypes.number, // from listMotifLevel2
      selectMotifLevel3IdFicheContact: PropTypes.number, // from listMotifLevel3
      selectMotifLevel4IdFicheContact: PropTypes.number, // from listMotifLevel4
      // affiche libelle d emotif niveau 4 dna sle champs motif des activites
      dateCreation: PropTypes.string,
      creePar: PropTypes.string,
      traiteePar: PropTypes.string,
      statutIndex: PropTypes.number, // En-cours
      // listStatut: ['En-cours', 'Clôturée'], // tous (enum) les statuts de fiche de contact
      dateCloture: PropTypes.string,
      cloturePar: PropTypes.string,
      // libelle motif de niveau 4 a afficher dans motif
      canalIndexFicheActivite: PropTypes.number,
      listAttachements: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.oneOf(['zip', 'rar', '7zip', 'pdf', 'txt', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'png', 'jpg', 'jpeg', 'bmp']),
          name: PropTypes.string.isRequired,
          filePath: PropTypes.string.isRequired,
          size: PropTypes.string.isRequired
        })
      ),
      listCommenatire: PropTypes.arrayOf(PropTypes.string)
    })
  ),

  // ///////////////////////// ///////////////////////
  actions: PropTypes.shape({
    // view:
    enterGestContacts: PropTypes.func.isRequired,
    leaveGestContacts: PropTypes.func.isRequired,
    // notifications:
    addNotificationMessage: PropTypes.func.isRequired,
    // get gestBenef:
    getGestContactsIfNeeded: PropTypes.func.isRequired,
    // //////////////////
    // identite
    // /////////////////
    // UI: Identite
    setIsCollapsedContactsIdentite: PropTypes.func.isRequired,
    unsetIsCollapsedContactsIdentite: PropTypes.func,
    // //////////////////////
    // contact (benef part)
    // /////////////////////
    // UI: contact
    setIsCollapsedContactsBenefContact: PropTypes.func,
    unsetIsCollapsedContactsBenefContact: PropTypes.func,
    // //////////////////
    // dossiers
    // /////////////////
    // UI dossiers
    setIsCollapsedContactsDossiers: PropTypes.func,
    unsetIsCollapsedContactsDossiers: PropTypes.func,
    // //////////////////
    // fiche contacts
    // /////////////////
    // get:
    getGestContactsFicheContactIfNeeded: PropTypes.func,
    // UI fiche contacts
    setIsCollapsedContactsFicheContact: PropTypes.func,
    unsetIsCollapsedContactsFicheContact: PropTypes.func,
    // form update:
    onDateCreationFicheContactChanged: PropTypes.func.isRequired,
    onDateReceptionFicheContactChanged: PropTypes.func.isRequired,
    onStatutIndexFicheContactChanged: PropTypes.func.isRequired,
    // onDateClotureFicheContactChanged: PropTypes.func.isRequired,
    onTypeIndexFicheContactChanged: PropTypes.func.isRequired,
    onNumDossierIndexSelectedChanged: PropTypes.func.isRequired,
    onDomaineFicheContactChanged: PropTypes.func.isRequired,
    onCommentaireFicheContactChanged: PropTypes.func.isRequired,
    onGroupeDestinataireIdSelectedChanged: PropTypes.func.isRequired,

    addNewCombinaisonMotifsFicheContact: PropTypes.func.isRequired,
    removeNewCombinaisonMotifsFicheContact: PropTypes.func.isRequired,

    onChangeFicheContactMotifNiveau2: PropTypes.func.isRequired,
    onChangeFicheContactMotifNiveau3: PropTypes.func.isRequired,
    onChangeFicheContactMotifNiveau4: PropTypes.func.isRequired,
    saveMotifFicheContact: PropTypes.func.isRequired,

    // POST:
    saveFicheContact: PropTypes.func.isRequired,
    // //////////////////
    // fiche activites
    // /////////////////
    // UI fiche activites
    setIsCollapsedContactsFicheActivite: PropTypes.func,
    unsetIsCollapsedContactsFicheActivite: PropTypes.func,

    // post:
    saveNewCommentFicheActivite: PropTypes.func,
    // //////////////////
    // listes de motifs
    // /////////////////
    getGestContactsAllMotifsIfNeeded: PropTypes.func
  })
};

export default GestContacts;
