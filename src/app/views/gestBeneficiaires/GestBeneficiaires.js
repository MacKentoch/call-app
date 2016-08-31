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
  }

  componentDidMount() {
    const  { actions } =  this.props;
    actions.enterGestBeneficiaires();
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.leaveGestBeneficiaires();
  }

  render() {
    const { animated } = this.state;
    const { isEditingIdentite, isSavingIdentite } = this.props;

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
                  isSavingIdentite={isSavingIdentite}
                  isEditingIdentite={isEditingIdentite}
                  onCiviliteChange={this.handlesOnCiviliteChange}
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
}

GestBeneficiaires.propTypes = {
  currentView:  PropTypes.string.isRequired,
  // ///////////////////////
  // gestBenef data:
  // ///////////////////////
  isFetching: PropTypes.bool.isRequired,
  lastGetTime: PropTypes.string.isRequired,
  // ///////////////////////
  // identité
  // ///////////////////////
  civilite: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  nomJeuneFille: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
  dateNaissance: PropTypes.string.isRequired,
  numss: PropTypes.string.isRequired,
  dateDeces: PropTypes.string.isRequired,
  maritalStatus: PropTypes.string.isRequired,
  // identité => sub for UI
  isEditingIdentite: PropTypes.bool.isRequired,
  isSavingIdentite: PropTypes.bool.isRequired,
  isCollapsedIdentite: PropTypes.bool.isRequired,
  // ///////////////////////
  // contact data
  // ///////////////////////
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
  dossiers: PropTypes.array.isRequired,

  // ///////////////////////// ///////////////////////
  actions: PropTypes.shape({
    enterGestBeneficiaires: PropTypes.func,
    leaveGestBeneficiaires: PropTypes.func,

    getGestBenefIfNeeded: PropTypes.func,
  })
};

// to remove when full redux store is done:
GestBeneficiaires.defaultProps = {
  isEditingIdentite: false,
  isSavingIdentite: false
};

export default GestBeneficiaires;
