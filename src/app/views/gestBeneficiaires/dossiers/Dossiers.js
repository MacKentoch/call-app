/* eslint react/no-did-mount-set-state:0 */
import React, {
  Component,
  PropTypes
}                       from 'react';
import shallowCompare   from 'react-addons-shallow-compare';
import SavingIndicator  from '../savingIndicator/SavingIndicator';
import Collapse         from 'react-collapse';
import moment           from 'moment';
import { appConfig }    from '../../../config';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;


class Dossiers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dossiers: [],
      dossierIdBeingEditing: 0 // when > 0 gives id dossier being edited (0 means no dossier is being editing)
    };
  }

  componentDidMount() {
    const { dossiers } = this.props;
    this.setState({ dossiers });
  }

  componentWillReceiveProps(nextProps) {
    const { lastFetchTimeDossiers } = this.props;
    const dossiersAreUpdated = moment(nextProps.lastFetchTimeDossiers, formatDate).diff(moment(lastFetchTimeDossiers, formatDate));

    if (dossiersAreUpdated > 0) {
      const { dossiers } = this.props;
      this.setState({ dossiers });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div></div>
    );
  }
}

Dossiers.propTypes = {
  lastFetchTimeDossiers: PropTypes.string.isRequired,

  dossiers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      numDossier: PropTypes.string,
      domaine: PropTypes.string,
      regime: PropTypes.string,
      societe: PropTypes.string,
      numSte: PropTypes.string,
      statutBenef: PropTypes.string,
      dateEntreeDispositif: PropTypes.string,
      dateSortieDispositif: PropTypes.string,
      dateTauxPlein: PropTypes.string
    })
  ).isRequired
};

export default Dossiers;
