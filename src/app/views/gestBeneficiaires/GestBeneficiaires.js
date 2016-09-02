import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
import Identite                         from './Identite/Identite';


class GestBeneficiaires extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };

    this.handlesOnCiviliteChange = this.handlesOnCiviliteChange.bind(this);
    this.handlesOnEditIdentiteClick = this.handlesOnEditIdentiteClick.bind(this);
    this.handlesOnCancelEditIdentiteClick = this.handlesOnCancelEditIdentiteClick.bind(this);
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

                  onEditClick={this.handlesOnEditIdentiteClick}
                  onCancelEditClick={this.handlesOnCancelEditIdentiteClick}
                  isEditingIdentite={isEditingIdentite}
                  isCollapsedIdentite={isCollapsedIdentite}

                  civilite={civilite}
                  onCiviliteChange={this.handlesOnCiviliteChange}

                  nom={nom}
                  onNomChanged={()=>console.log('TODO: Identite onNomChanged')}

                  nomJeuneFille={nomJeuneFille}
                  onNomJeuneFilleChanged={()=>console.log('TODO: Identite onNomJeuneFilleChanged')}

                  prenom={prenom}
                  onPrenomChanged={()=>console.log('TODO: Identite onPrenomChanged')}

                  dateNaissance={dateNaissance}
                  onDateNaissanceChanged={()=>console.log('TODO: Identite onDateNaissanceChanged')}

                  numss={numss}
                  onNumssChanged={()=>console.log('TODO: Identite onNumssChanged')}

                  dateDeces={dateDeces}
                  onDateDecesChanged={()=>console.log('TODO: Identite onDateDecesChanged')}

                  maritalStatus={maritalStatus}
                  onMaritalStatusChanged={()=>console.log('TODO: Identite onMaritalStatusChanged')}
                />

              </div>
            </section>
          </div>

        </div>
      </section>
    );
  }

  handlesOnCiviliteChange(civilite) {
    console.log(`selected civilite is ${civilite}`);
    // TODO: to handle redux store
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

    getGestBenefIfNeeded: PropTypes.func,

    postGestBenefIdentiteIfNeeded: PropTypes.func,
    // UI: Identite
    setIsEditingIdentite: PropTypes.func,
    unsetIsEditingIdentite: PropTypes.func,
    setIsCollapsedIdentite: PropTypes.func,
    unsetIsCollapsedIdentite: PropTypes.func
  })
};

// to remove when full redux store is done:
GestBeneficiaires.defaultProps = {
  isEditingIdentite: false,
  isSavingIdentite: false
};

export default GestBeneficiaires;
