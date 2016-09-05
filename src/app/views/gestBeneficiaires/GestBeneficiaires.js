import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
import Identite                         from './Identite/Identite';


class GestBeneficiaires extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };

    this.handlesOnCiviliteChanged = this.handlesOnCiviliteChanged.bind(this);
    this.handlesOnNomChanged = this.handlesOnNomChanged.bind(this);
    this.handlesOnNomJeuneFilleChanged = this.handlesOnNomJeuneFilleChanged.bind(this);
    this.handlesOnPrenomChanged = this.handlesOnPrenomChanged.bind(this);
    this.handlesOnDateNaissanceChanged = this.handlesOnDateNaissanceChanged.bind(this);
    this.handlesOnNumssChanged = this.handlesOnNumssChanged.bind(this);
    this.handlesOnDateDecesChanged = this.handlesOnDateDecesChanged.bind(this);
    this.handlesOnMaritalStatusChanged = this.handlesOnMaritalStatusChanged.bind(this);

    this.handlesOnIdentiteCollapseClick = this.handlesOnIdentiteCollapseClick.bind(this);
    this.handlesOnEditIdentiteClick = this.handlesOnEditIdentiteClick.bind(this);
    this.handlesOnCancelEditIdentiteClick = this.handlesOnCancelEditIdentiteClick.bind(this);
    this.handlesOnSaveIdentiteForm = this.handlesOnSaveIdentiteForm.bind(this);
  }

  componentDidMount() {
    const  { params: { benefId } } =  this.props;
    const  { actions: { enterGestBeneficiaires, getGestBenefIfNeeded } } =  this.props;
    enterGestBeneficiaires();

    this.resetIdentiteEditingAndCollpasing();

    const idBenef = parseInt(benefId, 10);
    if (idBenef) {
      getGestBenefIfNeeded(idBenef);
    }
  }

  componentWillUnmount() {
    const { actions: {leaveGestBeneficiaires  } } = this.props;
    leaveGestBeneficiaires();
  }

  render() {
    const { animated } = this.state;
    const { isFetchingIdentite, lastFetchTimeIdentite, isEditingIdentite, isSavingIdentite, isCollapsedIdentite } = this.props;
    const { civilite, nom, prenom, nomJeuneFille, dateNaissance, numss, dateDeces, maritalStatus } = this.props;

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
            <section className="panel">
              <header className="panel-heading">
                Détail Bénéficiaire
              </header>

              <div className="panel-body">

                <Identite
                  isFetchingIdentite={isFetchingIdentite}
                  lastFetchTimeIdentite={lastFetchTimeIdentite}

                  isSavingIdentite={isSavingIdentite}
                  onSaveFormIdentite={this.handlesOnSaveIdentiteForm}

                  onEditClick={this.handlesOnEditIdentiteClick}
                  onCancelEditClick={this.handlesOnCancelEditIdentiteClick}
                  isEditingIdentite={isEditingIdentite}

                  isCollapsedIdentite={isCollapsedIdentite}
                  onCollapseClick={this.handlesOnIdentiteCollapseClick}

                  civilite={civilite}
                  onCiviliteChange={this.handlesOnCiviliteChanged}

                  nom={nom}
                  onNomChanged={this.handlesOnNomChanged}

                  nomJeuneFille={nomJeuneFille}
                  onNomJeuneFilleChanged={this.handlesOnNomJeuneFilleChanged}

                  prenom={prenom}
                  onPrenomChanged={this.handlesOnPrenomChanged}

                  dateNaissance={dateNaissance}
                  onDateNaissanceChanged={this.handlesOnDateNaissanceChanged}

                  numss={numss}
                  onNumssChanged={this.handlesOnNumssChanged}

                  dateDeces={dateDeces}
                  onDateDecesChanged={this.handlesOnDateDecesChanged}

                  maritalStatus={maritalStatus}
                  onMaritalStatusChanged={this.handlesOnMaritalStatusChanged}
                />

              </div>
            </section>
          </div>

        </div>
      </section>
    );
  }

  handlesOnCiviliteChanged(civilite) {
    const { actions: { updateCiviliteIdentite } } = this.props;
    updateCiviliteIdentite(civilite);
  }

  handlesOnNomChanged(nom) {
    const { actions: { updateNomIdentite } } = this.props;
    updateNomIdentite(nom);
  }

  handlesOnNomJeuneFilleChanged(nomJeuneFille) {
    const { actions: { updateNomDeJeuneFilleIdentite } } = this.props;
    updateNomDeJeuneFilleIdentite(nomJeuneFille);
  }

  handlesOnPrenomChanged(prenom) {
    const { actions: { updatePrenomIdentite } } = this.props;
    updatePrenomIdentite(prenom);
  }

  handlesOnDateNaissanceChanged(dateNaissance) {
    const { actions: { updateDateNaissanceIdentite } } = this.props;
    updateDateNaissanceIdentite(dateNaissance);
  }

  handlesOnNumssChanged(numss) {
    const { actions: { updateNumssIdentite } } = this.props;
    updateNumssIdentite(numss);
  }

  handlesOnDateDecesChanged(dateDeces) {
    const { actions: { updateDateDecesIdentite } } = this.props;
    updateDateDecesIdentite(dateDeces);
  }

  handlesOnMaritalStatusChanged(maritalStatus) {
    const { actions: { updateMaritalStatusIdentite } } = this.props;
    updateMaritalStatusIdentite(maritalStatus);
  }

  handlesOnIdentiteCollapseClick() {
    const { isCollapsedIdentite, actions: { setIsCollapsedIdentite, unsetIsCollapsedIdentite } } = this.props;
    if (isCollapsedIdentite) {
      unsetIsCollapsedIdentite();
    } else {
      setIsCollapsedIdentite();
    }
  }

  handlesOnEditIdentiteClick() {
    const { actions: { setIsEditingIdentite } } = this.props;
    setIsEditingIdentite();
  }

  handlesOnCancelEditIdentiteClick() {
    const { actions: { unsetIsEditingIdentite } } = this.props;
    unsetIsEditingIdentite();
  }

  // to reset editing state and collapsed state
  resetIdentiteEditingAndCollpasing() {
    const { actions: { unsetIsEditingIdentite, unsetIsCollapsedIdentite } } = this.props;
    unsetIsEditingIdentite();
    unsetIsCollapsedIdentite();
  }

  handlesOnSaveIdentiteForm() {
    const { actions: {postGestBenefIdentiteIfNeeded, unsetIsEditingIdentite} } = this.props;
    const {
      id,
      civilite,
      nom,
      nomJeuneFille,
      prenom,
      dateNaissance,
      numss,
      dateDeces,
      maritalStatus
    } = this.props;

    const payload = {
      id,
      civilite,
      nom,
      nomJeuneFille,
      prenom,
      dateNaissance,
      numss,
      dateDeces,
      maritalStatus
    };
    postGestBenefIdentiteIfNeeded(payload);
    unsetIsEditingIdentite();
  }
}

GestBeneficiaires.propTypes = {
  // react router
  params: PropTypes.object,
  location: PropTypes.object,

  currentView:  PropTypes.string.isRequired,
  // ///////////////////////
  // gestBenef data:
  // ///////////////////////
  lastActionTime: PropTypes.string.isRequired,

  id: PropTypes.number.isRequired,
  // ///////////////////////
  // identité
  // ///////////////////////
  isFetchingIdentite: PropTypes.bool.isRequired,
  lastFetchTimeIdentite: PropTypes.string.isRequired,
  isEditingIdentite: PropTypes.bool.isRequired,
  isSavingIdentite: PropTypes.bool.isRequired,
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

  // ///////////////////////// ///////////////////////
  actions: PropTypes.shape({
    enterGestBeneficiaires: PropTypes.func,
    leaveGestBeneficiaires: PropTypes.func,
    // get gestBenef:
    getGestBenefIfNeeded: PropTypes.func,
    // //////////////////
    // identite
    // /////////////////
    // get
    getGestBenefIdentiteIfNeeded: PropTypes.func,
    // post
    postGestBenefIdentiteIfNeeded: PropTypes.func,
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
    updatePaysContact: PropTypes.func
  })
};

// to remove when full redux store is done:
GestBeneficiaires.defaultProps = {
  isEditingIdentite: false,
  isSavingIdentite: false
};

export default GestBeneficiaires;
