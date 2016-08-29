import React, { PropTypes, Component }  from 'react';
import shallowCompare                   from 'react-addons-shallow-compare';
import moment                           from 'moment';
import { appConfig }                    from '../../../../config';
import cx                               from 'classnames';
import {
  SearchBenefResultList,
  IsFetching
}                                       from '../../../../components';
import {
  getCurrentSearchBenefResPageContent,
  getSearchBenefResMinIndex,
  getSearchBenefResMaxIndex
}                                       from '../../../../services';

moment.locale('fr');

const formatDate = appConfig.formatDate.defaut;
const consultBenefPath = '/'; // to be defined


class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true,
      filter: '',
      currentPageBenefs: [],
      currentPage: 1,
      numberBenefsPerPage: 2
    };

    this.handlesOnPagingPreviousClick = this.handlesOnPagingPreviousClick.bind(this);
    this.handlesOnPagingNextClick = this.handlesOnPagingNextClick.bind(this);
    this.handlesOnSearch = this.handlesOnSearch.bind(this);
  }

  componentDidMount() {
    this.initResultsBindings();
  }

  componentWillReceiveProps(nextProps) {
    // results content refresh case (test on refresh time):
    this.refreshWhenSearchBenefResultRefreshTimeChange(nextProps);
  }

  render() {
    const { animated, currentPageBenefs, currentPage, numberBenefsPerPage } = this.state;
    const { results, isFetching } = this.props;

    const minPage = getSearchBenefResMinIndex(results, currentPage, numberBenefsPerPage);
    const maxPage= getSearchBenefResMaxIndex(results, currentPage, numberBenefsPerPage);

    return(
      <div
        className={cx({
          'animated': animated,
          'fadeIn': animated
        })}>
        {
          (results.length > 0 && !isFetching) &&
          <SearchBenefResultList
            benefs={currentPageBenefs}

            consultLinkTo={`${consultBenefPath}`}

            minPage={minPage}
            maxPage={maxPage}
            totalBenefs={results.length}

            onPagingPreviousClick={this.handlesOnPagingPreviousClick}
            onPagingNextClick={this.handlesOnPagingNextClick}
            onSearch={this.handlesOnSearch}
          />
        }
        {
          (results.length === 0 && !isFetching) &&
          <h3>
            <i>
              Aucun résultat.
            </i>
          </h3>
        }
        {
          isFetching &&
          <div>
            <p className="text-center">
              <i style={{color: '#4A4A4A'}}>
                Chargement...
              </i>
            </p>
            <IsFetching />
          </div>
        }
      </div>
    );
  }

  initResultsBindings() {
    const { results } = this.props;
    const { currentPage, numberBenefsPerPage, filter } = this.state;

    const nextPageBenefs = getCurrentSearchBenefResPageContent(results, currentPage, numberBenefsPerPage, filter);
    this.setState({ currentPageBenefs: nextPageBenefs });
  }

  refreshWhenSearchBenefResultRefreshTimeChange(nextProps) {
    const { refreshTime } = this.props;
    const { currentPage, numberBenefsPerPage, filter } = this.state;

    const lastRefreshTime = refreshTime.length > 0
      ? moment(refreshTime, formatDate).format(formatDate)
      : moment('01/01/1900-00:00:01', formatDate).format(formatDate);

    const newRefreshTime = nextProps.refreshTime.length > 0
      ? moment(nextProps.refreshTime, formatDate).format(formatDate)
      : moment('01/01/1900-00:00:01', formatDate).format(formatDate);

    if (lastRefreshTime < newRefreshTime) {
      const nextPageBenefs = getCurrentSearchBenefResPageContent(nextProps.results, currentPage, numberBenefsPerPage, filter);
      this.setState({ currentPageBenefs: nextPageBenefs });
    }
  }

  handlesOnPagingPreviousClick(event) {
    event.preventDefault();

    const { results } = this.props;
    const { currentPage, numberBenefsPerPage, filter } = this.state;

    const previousPage = currentPage - 1 > 0 ? currentPage - 1 : currentPage;

    const nextPageBenefs = getCurrentSearchBenefResPageContent(results, previousPage, numberBenefsPerPage, filter);
    this.setState({
      currentPageBenefs: nextPageBenefs,
      currentPage: previousPage
    });
  }

  handlesOnPagingNextClick(event) {
    event.preventDefault();

    const { results } = this.props;
    const { currentPage, numberBenefsPerPage, filter } = this.state;

    const totalBenefs = results.length;
    const pageMax = Math.ceil(totalBenefs / numberBenefsPerPage);
    const nextPage = currentPage + 1 <= pageMax ? currentPage + 1 : currentPage;

    const nextPageMails = getCurrentSearchBenefResPageContent(results, nextPage, numberBenefsPerPage, filter);
    this.setState({
      currentPageBenefs: nextPageMails,
      currentPage: nextPage
    });
  }

  handlesOnSearch(filter) {
    const { results } = this.props;
    const { currentPage, numberBenefsPerPage } = this.state;

    const currentPageBenefsFiltered = getCurrentSearchBenefResPageContent(results, currentPage, numberBenefsPerPage, filter);

    this.setState({
      currentPageBenefs: currentPageBenefsFiltered,
      filter
    });
  }
}

SearchResult.propTypes = {
  isFetching: PropTypes.bool,
  refreshTime: PropTypes.string,

  results: PropTypes.arrayOf(
    PropTypes.shape({
      // generic
      id: PropTypes.number.isRequired,
      nom: PropTypes.string,
      nomJeuneFille: PropTypes.string,
      prenom: PropTypes.string,
      numss: PropTypes.string,
      dateNaissance: PropTypes.string,
      dateDeces: PropTypes.string,
      statutActivite: PropTypes.string,
      // specific 1
      isRet: PropTypes.bool.isRequired,
      // regimeRattachement: PropTypes.string,
      // profilFinancementRattache: PropTypes.string,
      // specific2
      isPreRet: PropTypes.bool.isRequired // ,
      // dateEntreePreRet: PropTypes.string,
      // dateSortiePreRet: PropTypes.string,
      // dateTauxPlein: PropTypes.string,
      // numeroEntrepriseCliente: PropTypes.string,
      // libelleEntrepriseCliente: PropTypes.string,
      // numMatriculeSAG: PropTypes.string
    })
  )
};

export default SearchResult;
