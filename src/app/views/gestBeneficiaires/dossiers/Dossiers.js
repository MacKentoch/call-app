import React, {
  Component,
  PropTypes
}                                         from 'react';
import shallowCompare                     from 'react-addons-shallow-compare';
import SavingIndicator                    from '../savingIndicator/SavingIndicator';
import Collapse                           from 'react-collapse';
import moment                             from 'moment';
import { appConfig }                      from '../../../config';
import {
  getCurrentSearchDossiersResPageContent,
  getSearchDossiersResMinIndex,
  getSearchDossiersResMaxIndex
}                                         from '../../../services';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;


class Dossiers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dossiers: [],
      dossierIdSelected: 0, // when 0: no dossier selected, when > 0, should trigger fiche contact and activ appearance
      dossierIdBeingEditing: 0, // when > 0 gives id dossier being edited (0 means no dossier is being editing)
      // pagination
      filter: '',
      currentPageDossiers: [],
      currentPage: 1,
      numberDossiersPerPage: 2
    };

    this.handlesOnPagingPreviousClick = this.handlesOnPagingPreviousClick.bind(this);
    this.handlesOnPagingNextClick = this.handlesOnPagingNextClick.bind(this);
    this.handlesOnSearch = this.handlesOnSearch.bind(this);
  }

  componentDidMount() {
    this.initDossiersBindings();
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

  initDossiersBindings() {
    const { dossiers } = this.props;
    const { currentPage, numberDossiersPerPage, filter } = this.state;

    const nextPageDossiers = getCurrentSearchDossiersResPageContent(dossiers, currentPage, numberDossiersPerPage, filter);

    this.setState({
      dossiers,
      currentPageDossiers: nextPageDossiers
    });
  }

  handlesOnPagingPreviousClick(event) {
    event.preventDefault();

    const { dossiers } = this.props;
    const { currentPage, numberDossiersPerPage, filter } = this.state;

    const previousPage = currentPage - 1 > 0 ? currentPage - 1 : currentPage;
    const nextPageBenefs = getCurrentSearchDossiersResPageContent(dossiers, previousPage, numberDossiersPerPage, filter);

    this.setState({
      currentPageDossiers: nextPageBenefs,
      currentPage: previousPage
    });
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
