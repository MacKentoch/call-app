import React, {
  Component,
  PropTypes
}                                         from 'react';
import shallowCompare                     from 'react-addons-shallow-compare';
import Collapse                           from 'react-collapse';
import moment                             from 'moment';
import { appConfig }                      from '../../../config';
import {
  getCurrentSearchContactsEtActivitesResPageContent,
  getSearchContactsEtActivitesResMinIndex,
  getSearchContactsEtActivitesResMaxIndex
}                                         from '../../../services';
import ContactsEtActivitesTable           from './contactsEtActivitesTable/ContactsEtActivitesTable';
import ToggleCollapse                     from './toggleCollapse/ToggleCollapse';


moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;


class ContactsEtActivites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactsEtActivites: [],
      // pagination
      filter: '',
      currentPageContactsEtActivites: [],
      currentPage: 1,
      numberContactsEtActivitesPerPage: 10
    };

    this.handlesOnPagingPreviousClick = this.handlesOnPagingPreviousClick.bind(this);
    this.handlesOnPagingNextClick = this.handlesOnPagingNextClick.bind(this);
    this.handlesOnSearch = this.handlesOnSearch.bind(this);
  }

  componentDidMount() {
    this.initContactsEtActivitesBindings();
  }

  componentWillReceiveProps(nextProps) {
    const { lastFetchTimeContactsEtActivites } = this.props;
    const contactsEtActivitesAreUpdated = moment(nextProps.lastFetchTimeContactsEtActivites, formatDate)
                                            .diff(moment(lastFetchTimeContactsEtActivites, formatDate));

    if (contactsEtActivitesAreUpdated > 0) {
      const { contactsEtActivites } = nextProps;
      this.setState({ contactsEtActivites: [...contactsEtActivites] }); // force all contactsEtActivites to refresh
      this.refreshDossiersBindings([...contactsEtActivites]); // force paginated contactsEtActivites to refresh
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      currentPageContactsEtActivites,
      currentPage,
      numberContactsEtActivitesPerPage
    } = this.state;

    const {
      isFetchingContactsEtActivites,
      lastFetchTimeContactsEtActivites,
      // numDossierSelected,
      isCollapsedContactsEtActivites,
      onCollapseClick,
      contactsEtActivites
    } = this.props;

    const minPage = getSearchContactsEtActivitesResMinIndex(contactsEtActivites, currentPage, numberContactsEtActivitesPerPage);
    const maxPage= getSearchContactsEtActivitesResMaxIndex(contactsEtActivites, currentPage, numberContactsEtActivitesPerPage);

    return(
      <div>
        <div className="page-header">
          <i
            className="fa fa-tasks"
            aria-hidden="true"
            style={{color: '#444444'}}>
          </i>
          &nbsp;
          Contacts et activités
          <ToggleCollapse
            isCollapsed={isCollapsedContactsEtActivites}
            toggleCollapse={onCollapseClick}
          />
        </div>
        <Collapse
          isOpened={!isCollapsedContactsEtActivites}
          keepCollapsedContent={false}>
          <div style={{ height: '530px' }}>
          <ContactsEtActivitesTable
            contactsEtActivites={contactsEtActivites}

            // pagination & search:
            currentPageContactsEtActivites={currentPageContactsEtActivites}
            minPage={minPage}
            maxPage={maxPage}
            onPagingPreviousClick={this.handlesOnPagingPreviousClick}
            onPagingNextClick={this.handlesOnPagingNextClick}
            onSearch={this.handlesOnSearch}

            // flags bool
            isFetchingContactsEtActivites={isFetchingContactsEtActivites}
            lastFetchTimeContactsEtActivites={lastFetchTimeContactsEtActivites}

            isCollapsedContactsEtActivites={isCollapsedContactsEtActivites}
          />
          </div>
        </Collapse>
      </div>
    );
  }

  initContactsEtActivitesBindings() {
    const { contactsEtActivites } = this.props;
    const { currentPage, numberContactsEtActivitesPerPage, filter } = this.state;

    const nextPageContactsEtActivites = getCurrentSearchContactsEtActivitesResPageContent(contactsEtActivites, currentPage, numberContactsEtActivitesPerPage, filter);

    this.setState({
      contactsEtActivites,
      currentPageContactsEtActivites: nextPageContactsEtActivites
    });
  }

  refreshDossiersBindings(contactsEtActivites) {
    const { currentPage, numberContactsEtActivitesPerPage, filter } = this.state;

    const nextPageContactsEtActivites = getCurrentSearchContactsEtActivitesResPageContent(contactsEtActivites, currentPage, numberContactsEtActivitesPerPage, filter);

    this.setState({
      contactsEtActivites,
      currentPageContactsEtActivites: nextPageContactsEtActivites
    });
  }

  handlesOnPagingPreviousClick(event) {
    event.preventDefault();

    const { contactsEtActivites } = this.props;
    const { currentPage, numberContactsEtActivitesPerPage, filter } = this.state;

    const previousPage = currentPage - 1 > 0 ? currentPage - 1 : currentPage;
    const nextPageContactsEtActivites = getCurrentSearchContactsEtActivitesResPageContent(contactsEtActivites, previousPage, numberContactsEtActivitesPerPage, filter);

    this.setState({
      currentPageContactsEtActivites: nextPageContactsEtActivites,
      currentPage: previousPage
    });
  }

  handlesOnPagingNextClick(event) {
    event.preventDefault();

    const { contactsEtActivites } = this.props;
    const { currentPage, numberContactsEtActivitesPerPage, filter } = this.state;

    const totalDossiers = contactsEtActivites.length;
    const pageMax = Math.ceil(totalDossiers / numberContactsEtActivitesPerPage);
    const nextPage = currentPage + 1 <= pageMax ? currentPage + 1 : currentPage;

    const nextPageContactsEtActivites = getCurrentSearchContactsEtActivitesResPageContent(contactsEtActivites, nextPage, numberContactsEtActivitesPerPage, filter);
    this.setState({
      currentPageContactsEtActivites: nextPageContactsEtActivites,
      currentPage: nextPage
    });
  }

  handlesOnSearch(filter) {
    const { contactsEtActivites } = this.props;
    const { currentPage, numberContactsEtActivitesPerPage } = this.state;

    const currentPageContactsEtActivitesFiltered = getCurrentSearchContactsEtActivitesResPageContent(contactsEtActivites, currentPage, numberContactsEtActivitesPerPage, filter);

    this.setState({
      currentPageContactsEtActivites: currentPageContactsEtActivitesFiltered,
      filter
    });
  }
}

ContactsEtActivites.propTypes = {
  isFetchingContactsEtActivites: PropTypes.bool.isRequired,
  lastFetchTimeContactsEtActivites: PropTypes.string.isRequired,

  numDossierSelected: PropTypes.number.isRequired,

  isCollapsedContactsEtActivites: PropTypes.bool.isRequired,
  onCollapseClick: PropTypes.func.isRequired,

  contactsEtActivites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      numDossier: PropTypes.string.isRequired,
      numFiche: PropTypes.number.isRequired,
      dateCreation: PropTypes.string.isRequired,
      dateReception: PropTypes.string.isRequired,
      canal: PropTypes.string.isRequired, // one of 'Mail', 'Téléphone', 'Courrier'
      reclamation: PropTypes.bool.isRequired,
      statut: PropTypes.string.isRequired, // one of 'En cours', 'Clôturée', 'Terminée',
      creePar: PropTypes.string.isRequired,
      traiteePar: PropTypes.string.isRequired,
      ficheTransmiseA: PropTypes.string.isRequired,
      motifs: PropTypes.string.isRequired,
      delais: PropTypes.number.isRequired // unit is day
    })
  ).isRequired
};

export default ContactsEtActivites;
