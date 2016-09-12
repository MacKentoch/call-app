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
import SavingIndicator                    from '../savingIndicator/SavingIndicator';
import DossiersTable                      from './dossiersTable/DossiersTable';
import ToggleCollapse                     from './toggleCollapse/ToggleCollapse';
import CreateDossierButton                from './createDossierButton/CreateDossierButton';


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
      isEditingDossiers,
      editDossierId,
      isSavingDossiers,
      isCollapsedDossiers,
      onCollapseClick,
      onDossierSelection,
      onDossierEdition,
      onDossierValidEdition,
      onDossierCancelEdition,
      onCreateDossierClick
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
          Dossiers
          {
            !isSavingDossiers &&
            <CreateDossierButton
              onClick={onCreateDossierClick}
            />
          }
          {
            !isSavingDossiers &&
            <ToggleCollapse
              isEditing={isEditingDossiers}
              isCollapsed={isCollapsedDossiers}
              toggleCollapse={onCollapseClick}
            />
          }
        </div>
        <Collapse
          isOpened={!isCollapsedDossiers}
          keepCollapsedContent={false}>
          <div style={{ height: '230px' }}>
          {
            isSavingDossiers
            ?
              <SavingIndicator />
            :
              <DossiersTable
                dossiers={dossiers}
                onDossierSelection={onDossierSelection}
                onDossierEdition={onDossierEdition}
                onDossierValidEdition={onDossierValidEdition}
                onDossierCancelEdition={onDossierCancelEdition}

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

                isEditingDossiers={isEditingDossiers}
                editDossierId={editDossierId}

                isSavingDossiers={isSavingDossiers}
                isCollapsedDossiers={isCollapsedDossiers}
              />
          }
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

  isEditingDossiers: PropTypes.bool.isRequired,
  editDossierId: PropTypes.number.isRequired,

  isSavingDossiers: PropTypes.bool.isRequired,

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

  onDossierSelection: PropTypes.func.isRequired,
  onDossierEdition: PropTypes.func.isRequired,
  onDossierValidEdition: PropTypes.func.isRequired,
  onDossierCancelEdition: PropTypes.func.isRequired,

  onCreateDossierClick: PropTypes.func.isRequired
};

export default Dossiers;
