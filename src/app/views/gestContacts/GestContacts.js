import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
import Identite                         from './identite/Identite';
import Contact                          from './contact/Contact';
import Dossiers                         from './dossiers/Dossiers';
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
  }

  componentDidMount() {
    const { params: { benefId } } =  this.props;
    // const { location: { state: { contactCanal } } } = this.props;

    const { actions: { enterGestContacts, resetGestBenef } } =  this.props;
    const { actions: { addNotificationMessage } } = this.props;

    enterGestContacts();

    this.resetContactCollpasing();
    this.resetDossierCollpasing();

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
      this.resetContactCollpasing();
      this.resetDossierCollpasing();

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
    const { actions: {leaveGestContacts  } } = this.props;
    leaveGestContacts();
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
    const { isFetchingContact, lastFetchTimeContact, isCollapsedContact } = this.props;
    const { fixedPhone, mobilePhone, email, numAdress, voie, complementAdr, codePostal, ville, pays } = this.props;
    // dossiers:
    const { isFetchingDossiers, lastFetchTimeDossiers, isCollapsedDossiers } = this.props;
    const { dossiers } = this.props;

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

                        isCollapsedDossiers={isCollapsedDossiers}
                        onCollapseClick={this.handlesOnDossiersCollapseClick}

                        onDossierSelection={this.handlesOnDossierSelection}
                      />
                    </div>
                  }

                  {/* pas de contactsEtActivites si beneficiaire sans id */}
                  {
                    (parseInt(id, 10) > 0) &&
                    <div>
                      {/* contacts et activites */}

                      <div style={{height: '10px'}}></div>

                      {/* <ContactsEtActivites
                        isFetchingContactsEtActivites={isFetchingContactsEtActivites}
                        lastFetchTimeContactsEtActivites={lastFetchTimeContactsEtActivites}

                        contactsEtActivites={contactsEtActivites}

                        numDossierSelected={numDossierSelected}

                        isCollapsedContactsEtActivites={isCollapsedContactsEtActivites}
                        onCollapseClick={this.handlesOnContactsEtActivitesCollapseClick}
                      /> */}

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
  handlesOnContactCollapseClick() {
    const { isCollapsedContact, actions: { setIsCollapsedContact, unsetIsCollapsedContact } } = this.props;
    if (isCollapsedContact) {
      unsetIsCollapsedContact();
    } else {
      setIsCollapsedContact();
    }
  }

  // to reset contact editing state and collapsed state
  resetContactCollpasing() {
    const { actions: { unsetIsCollapsedContact } } = this.props;
    unsetIsCollapsedContact();
  }

  // ////////////////////////////////
  //  dossiers related methods
  // ////////////////////////////////

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

  // to reset contact editing state and collapsed state
  resetDossierCollpasing() {
    const { actions: { unsetIsCollapsedContact } } = this.props;
    unsetIsCollapsedContact();
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

  isCollapsedDossiers: PropTypes.bool.isRequired,

  dossiers: PropTypes.array.isRequired,
  // ///////////////////////
  // contacts Et activites:
  // ///////////////////////
  isFetchingContactsEtActivites: PropTypes.bool.isRequired,
  lastFetchTimeContactsEtActivites: PropTypes.string.isRequired,
  contactsEtActivites: PropTypes.array.isRequired,
  numDossierSelected: PropTypes.number.isRequired,
  isCollapsedContactsEtActivites: PropTypes.bool.isRequired,

  // ///////////////////////// ///////////////////////
  actions: PropTypes.shape({
    // view:
    enterGestContacts: PropTypes.func,
    leaveGestContacts: PropTypes.func,
    // notifications:
    addNotificationMessage: PropTypes.func,
    // get gestBenef:
    getGestBenefIfNeeded: PropTypes.func,
    // reset:
    resetGestBenef: PropTypes.func.isRequired,
    // //////////////////
    // identite
    // /////////////////
    // UI: Identite
    setIsCollapsedIdentite: PropTypes.func,
    unsetIsCollapsedIdentite: PropTypes.func,
    // //////////////////
    // contact
    // /////////////////
    // UI: contact
    setIsCollapsedContact: PropTypes.func,
    unsetIsCollapsedContact: PropTypes.func,
    // //////////////////
    // dossiers
    // /////////////////
    // UI dossiers
    setIsCollapsedContactsDossiers: PropTypes.func,
    unsetIsCollapsedContactsDossiers: PropTypes.func
  })
};

export default GestContacts;
