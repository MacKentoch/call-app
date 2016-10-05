import React, {
  Component,
  PropTypes
}                                         from 'react';
import shallowCompare                     from 'react-addons-shallow-compare';
import Collapse                           from 'react-collapse';
import moment                             from 'moment';
import { appConfig }                      from '../../../config';
import {
  getCurrentSearchDossiersResPageContent,
  getSearchDossiersResMinIndex,
  getSearchDossiersResMaxIndex
}                                         from '../../../services';
import DossiersTable                      from './dossiersTable/DossiersTable';
import ToggleCollapse                     from './toggleCollapse/ToggleCollapse';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;


class Dossiers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dossiers: [],
      // pagination
      filter: '',
      currentPageDossiers: [],
      currentPage: 1,
      numberDossiersPerPage: 10
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
    const dossiersAreUpdated = moment(nextProps.lastFetchTimeDossiers, formatDate)
                                  .diff(moment(lastFetchTimeDossiers, formatDate));

    if (dossiersAreUpdated > 0) {
      const { dossiers } = nextProps;
      this.setState({ dossiers: [...dossiers] }); // force all dossiers to refresh
      this.refreshDossiersBindings([...dossiers]); // force paginated dossiers to refresh
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      currentPageDossiers,
      currentPage,
      numberDossiersPerPage
    } = this.state;

    const {
      dossiers,
      isFetchingDossiers,
      lastFetchTimeDossiers,
      isCollapsedDossiers,
      onCollapseClick,
      onDossierSelection
    } = this.props;

    const minPage = getSearchDossiersResMinIndex(dossiers, currentPage, numberDossiersPerPage);
    const maxPage= getSearchDossiersResMaxIndex(dossiers, currentPage, numberDossiersPerPage);

    return(
      <div>
        <div className="page-header">
          <i
            className="fa fa-folder-open"
            aria-hidden="true"
            style={{color: '#444444'}}>
          </i>
          &nbsp;
          Informations "dossiers" du bénéficaire
          <ToggleCollapse
            isCollapsed={isCollapsedDossiers}
            toggleCollapse={onCollapseClick}
          />
        </div>
        <Collapse
          isOpened={!isCollapsedDossiers}
          keepCollapsedContent={false}>
          <div style={{ height: '530px' }}>
            <DossiersTable
              dossiers={dossiers}
              onDossierSelection={onDossierSelection}

              // pagination & search:
              currentPageDossiers={currentPageDossiers}
              minPage={minPage}
              maxPage={maxPage}
              onPagingPreviousClick={this.handlesOnPagingPreviousClick}
              onPagingNextClick={this.handlesOnPagingNextClick}
              onSearch={this.handlesOnSearch}

              // flags bool
              isFetchingDossiers={isFetchingDossiers}
              lastFetchTimeDossiers={lastFetchTimeDossiers}

              isCollapsedDossiers={isCollapsedDossiers}
            />
          </div>
        </Collapse>
      </div>
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

  refreshDossiersBindings(dossiers) {
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
    const nextPageDossiers = getCurrentSearchDossiersResPageContent(dossiers, previousPage, numberDossiersPerPage, filter);

    this.setState({
      currentPageDossiers: nextPageDossiers,
      currentPage: previousPage
    });
  }

  handlesOnPagingNextClick(event) {
    event.preventDefault();

    const { dossiers } = this.props;
    const { currentPage, numberDossiersPerPage, filter } = this.state;

    const totalDossiers = dossiers.length;
    const pageMax = Math.ceil(totalDossiers / numberDossiersPerPage);
    const nextPage = currentPage + 1 <= pageMax ? currentPage + 1 : currentPage;

    const nextPageDossiers = getCurrentSearchDossiersResPageContent(dossiers, nextPage, numberDossiersPerPage, filter);
    this.setState({
      currentPageDossiers: nextPageDossiers,
      currentPage: nextPage
    });
  }

  handlesOnSearch(filter) {
    const { dossiers } = this.props;
    const { currentPage, numberDossiersPerPage } = this.state;

    const currentPageDossiersFiltered = getCurrentSearchDossiersResPageContent(dossiers, currentPage, numberDossiersPerPage, filter);

    this.setState({
      currentPageDossiers: currentPageDossiersFiltered,
      filter
    });
  }
}

Dossiers.propTypes = {
  isFetchingDossiers: PropTypes.bool.isRequired,
  lastFetchTimeDossiers: PropTypes.string.isRequired,

  isCollapsedDossiers: PropTypes.bool.isRequired,
  onCollapseClick: PropTypes.func.isRequired,

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
  ).isRequired,

  onDossierSelection: PropTypes.func.isRequired
};

export default Dossiers;
