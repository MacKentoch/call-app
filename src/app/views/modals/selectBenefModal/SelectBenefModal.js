import React, {
  Component,
  PropTypes
}                         from 'react';
import shallowCompare     from 'react-addons-shallow-compare';
import {
  Modal
}                         from 'react-bootstrap';
import { appConfig }      from '../../../config';
import ModalHeader        from './modalHeader/ModalHeader';
import ModalFooter        from './modalFooter/ModalFooter';
import SearchForm         from './searchForm/SearchForm';
import FetchingIndicator  from './fetchingIndicator/FetchingIndicator';
import SearchResult       from './searchResult/SearchResult';

const searchInputBenefFilters = [...appConfig.searchBenefInputFilters];
const seachBenefDefaultFilter = searchInputBenefFilters[0].id;

const SearchCriteria = [...appConfig.searchCriterias];

const gestBenefUrl = `${appConfig.views.beneficaires.maj.path}`;


class SelectBenefModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      // show/hide results or search form:
      displaySearchResults: false,  // indicates wether search form or search resulst shoud be displayed
      // Identifiant
      identValue: '',
      identSelectedFilterId: -1,
      identSelectedFilter: '',
      identActive: false,
      // Nom
      nomValue: '',
      NomSelectedFilterId: -1,
      NomSelectedFilter: '',
      NomActive: true,
      // Prenom
      prenomValue: '',
      PrenomSelectedFilterId: -1,
      PrenomSelectedFilter: '',
      PrenomActive: false,
      // NumSS
      numssValue: '',
      numssSelectedFilterId: -1,
      numssSelectedFilter: '',
      NumSSActive: false,

      criterias: [...SearchCriteria]
    };

    this.handlesOnClose = this.handlesOnClose.bind(this);
    this.handlesOnSearch = this.handlesOnSearch.bind(this);
    this.handlesOnIdentFilterChange = this.handlesOnIdentFilterChange.bind(this);
    this.handlesOnNomFilterChange = this.handlesOnNomFilterChange.bind(this);
    this.handlesOnPrenomFilterChange = this.handlesOnPrenomFilterChange.bind(this);
    this.handlesOnNumssFilterChange = this.handlesOnNumssFilterChange.bind(this);
    this.handlesOnCriteriaClick = this.handlesOnCriteriaClick.bind(this);
    this.handlesIndentValueChanged = this.handlesIndentValueChanged.bind(this);
    this.handlesNomValueChanged = this.handlesNomValueChanged.bind(this);
    this.handlesPrenomValueChanged = this.handlesPrenomValueChanged.bind(this);
    this.handlesNumssValueChanged = this.handlesNumssValueChanged.bind(this);
    this.handlesOnGoBackSearchForm = this.handlesOnGoBackSearchForm.bind(this);
    this.handlesOnBenefSelection = this.handlesOnBenefSelection.bind(this);
  }

  componentDidMount() {
    this.initFilters();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    // search form and commands:
    const { showModal, title  } = this.props;
    const { identSelectedFilter, NomSelectedFilter, PrenomSelectedFilter, numssSelectedFilter } = this.state;
    const { criterias, displaySearchResults } = this.state;
    const { identActive, NomActive, PrenomActive, NumSSActive } = this.state;
    const { identValue, nomValue, prenomValue, numssValue } = this.state;
    // search fetching:
    const { searchFetching, searchResult, searchTime } = this.props;

    return (
      <div>
        <Modal
          {...this.props}
          show={showModal}
          onHide={this.handlesOnClose}
          bsSize="lg"
          aria-labelledby="contained-modal-title-md">
          <ModalHeader
            title={title}
          />
          <Modal.Body>
            {
              searchFetching &&
              <FetchingIndicator />
            }
            {
              !searchFetching && !displaySearchResults &&
              <SearchForm
                // criterias
                criterias={criterias}
                onCriteriaClick={this.handlesOnCriteriaClick}
                // searchInput filters
                searchInputBenefFilters={searchInputBenefFilters}
                // identifiant
                identActive={identActive}
                identValue={identValue}
                identSelectedFilter={identSelectedFilter}
                onIndentValueChanged={this.handlesIndentValueChanged}
                onIdentFilterChange={this.handlesOnIdentFilterChange}
                // nom
                NomActive={NomActive}
                nomValue={nomValue}
                onNomValueChanged={this.handlesNomValueChanged}
                NomSelectedFilter={NomSelectedFilter}
                onNomFilterChange={this.handlesOnNomFilterChange}
                // prenom
                PrenomActive={PrenomActive}
                prenomValue={prenomValue}
                onPrenomValueChanged={this.handlesPrenomValueChanged}
                PrenomSelectedFilter={PrenomSelectedFilter}
                onPrenomFilterChange={this.handlesOnPrenomFilterChange}
                // numss
                NumSSActive={NumSSActive}
                numssValue={numssValue}
                onNumssValueChanged={this.handlesNumssValueChanged}
                numssSelectedFilter={numssSelectedFilter}
                onNumssFilterChange={this.handlesOnNumssFilterChange}
                // search action
                onSearch={this.handlesOnSearch}
              />
            }
            {
              !searchFetching && displaySearchResults &&
              <SearchResult
                isFetching={searchFetching}
                refreshTime={searchTime}
                results={searchResult}
                onGoBackSearchForm={this.handlesOnGoBackSearchForm}
                onBenefSelection={this.handlesOnBenefSelection}
              />
            }

          </Modal.Body>

          <ModalFooter
            onCloseClick={this.handlesOnClose}
          />

        </Modal>
      </div>
    );
  }

  initInputs() {
    this.setState({
      displaySearchResults: false,

      identValue: '',
      nomValue: '',
      prenomValue: '',
      numssValue: ''
    });
  }

  initFilters() {
    this.setState({
      // Identifiant
      identSelectedFilterId: seachBenefDefaultFilter,
      identSelectedFilter: this.getfilterLibelle(seachBenefDefaultFilter),
      // Nom
      NomSelectedFilterId: seachBenefDefaultFilter,
      NomSelectedFilter: this.getfilterLibelle(seachBenefDefaultFilter),
      // Prenom
      PrenomSelectedFilterId: seachBenefDefaultFilter,
      PrenomSelectedFilter: this.getfilterLibelle(seachBenefDefaultFilter),
      // NumSS
      numssSelectedFilterId: seachBenefDefaultFilter,
      numssSelectedFilter: this.getfilterLibelle(seachBenefDefaultFilter)
    });
  }

  handlesIndentValueChanged(value) {
    this.setState({identValue: value});
  }

  handlesNomValueChanged(value) {
    this.setState({nomValue: value});
  }

  handlesPrenomValueChanged(value) {
    this.setState({prenomValue: value});
  }

  handlesNumssValueChanged(value) {
    this.setState({numssValue: value});
  }

  getfilterLibelle(id) {
    const filt = searchInputBenefFilters.find(
      filter => filter.id === id
    );
    return filt.libelle ?  filt.libelle : '---';
  }

  handlesOnIdentFilterChange(filterId, filterLibelle) {
    const { identSelectedFilterId } = this.state;
    if (filterId !== identSelectedFilterId) {
      this.setState({
        identSelectedFilterId: filterId,
        identSelectedFilter: filterLibelle
      });
    }
  }

  handlesOnNomFilterChange(filterId, filterLibelle) {
    const { NomSelectedFilterId } = this.state;
    if (filterId !== NomSelectedFilterId) {
      this.setState({
        NomSelectedFilterId: filterId,
        NomSelectedFilter: filterLibelle
      });
    }
  }

  handlesOnPrenomFilterChange(filterId, filterLibelle) {
    const { PrenomSelectedFilterId } = this.state;
    if (filterId !== PrenomSelectedFilterId) {
      this.setState({
        PrenomSelectedFilterId: filterId,
        PrenomSelectedFilter: filterLibelle
      });
    }
  }

  handlesOnNumssFilterChange(filterId, filterLibelle) {
    const { numssSelectedFilterId } = this.state;
    if (filterId !== numssSelectedFilterId) {
      this.setState({
        numssSelectedFilterId: filterId,
        numssSelectedFilter: filterLibelle
      });
    }
  }

  handlesOnCriteriaClick(critere) {
    const { criterias } = this.state;

    switch (critere) {

    case 'Identifiant':
      const { identActive } = this.state;

      const identIndex = criterias.findIndex(criter => criter.label === 'Identifiant');
      if (isFound(identIndex)) {
        const updatedCiterias = [...criterias];
        const isActive = updatedCiterias[identIndex].active;

        updatedCiterias[identIndex].active = toggleThisBool(isActive);
        this.setState({
          identActive: !identActive,
          criterias: [...updatedCiterias],
          identValue: '' // reset input value
        });
      }
      break;

    case 'Nom':
      const { NomActive } = this.state;

      const nomIndex = criterias.findIndex(criter => criter.label === 'Nom');
      if (isFound(nomIndex)) {
        const updatedCiterias = [...criterias];
        const isActive = updatedCiterias[nomIndex].active;

        updatedCiterias[nomIndex].active = toggleThisBool(isActive);
        this.setState({
          NomActive: !NomActive,
          criterias: [...updatedCiterias],
          nomValue: '' // reset input value
        });
      }
      break;

    case 'Prénom':
      const { PrenomActive } = this.state;

      const prenomIndex = criterias.findIndex(criter => criter.label === 'Prénom');
      if (isFound(prenomIndex)) {
        const updatedCiterias = [...criterias];
        const isActive = updatedCiterias[prenomIndex].active;

        updatedCiterias[prenomIndex].active = toggleThisBool(isActive);
        this.setState({
          PrenomActive: !PrenomActive,
          criterias: [...updatedCiterias],
          prenomValue: '' // reset input value
        });
      }
      break;

    case 'Numéro sécu.':
      const { NumSSActive } = this.state;

      const numssIndex = criterias.findIndex(criter => criter.label === 'Numéro sécu.');
      if (isFound(numssIndex)) {
        const updatedCiterias = [...criterias];
        const isActive = updatedCiterias[numssIndex].active;

        updatedCiterias[numssIndex].active = toggleThisBool(isActive);
        this.setState({
          NumSSActive: !NumSSActive,
          criterias: [...updatedCiterias],
          numssValue: '' // reset input value
        });
      }
      break;

    default:
      return;
    }

    function isFound(index) {
      return index > -1 ? true : false;
    }

    function toggleThisBool(val) {
      return !val;
    }
  }

  handlesOnSearch(event) {
    event.preventDefault();
    const { actions: { postSearchIfNeeded } } = this.props;
    const {
      // Identifiant
      identValue,
      identSelectedFilterId,
      identActive,
      // Nom
      nomValue,
      NomSelectedFilterId,
      NomActive,
      // Prenom
      prenomValue,
      PrenomSelectedFilterId,
      PrenomActive,
      // NumSS
      numssValue,
      numssSelectedFilterId,
      NumSSActive
    } = this.state;

    const searchPayload = {
      // Identifiant
      identActive: identActive,
      identValue: identValue,
      identFilter: identSelectedFilterId,
      // Nom
      nomActive: NomActive,
      nomValue: nomValue,
      nomFilter: NomSelectedFilterId,
      // Prenom
      prenomActive: PrenomActive,
      prenomValue: prenomValue,
      prenomFilter: PrenomSelectedFilterId,
      // NumSS
      numssActive: NumSSActive,
      numssValue: numssValue,
      numssFilter: numssSelectedFilterId
    };

    // show results:
    this.setState({displaySearchResults: true});
    postSearchIfNeeded(searchPayload);
  }

  handlesOnClose() {
    const { onClose } = this.props;
    // all input filters reset
    this.initFilters();
    // all value reset
    this.initInputs();
    onClose();
  }

  handlesOnGoBackSearchForm() {
    // all input filters reset
    this.initFilters();
    // all value reset
    this.initInputs();
  }

  handlesOnBenefSelection(id = 0) {
    // console.log('handles benef selection, id: ', id);
    if (id > 0) {
      // route to benef view
      const { router } = this.context;
      router.push({pathname: `${gestBenefUrl}/${id}`});
      // close popup
      this.handlesOnClose();
    }
  }
}

SelectBenefModal.contextTypes = {
  // for manual routing
  router: React.PropTypes.object.isRequired
};

SelectBenefModal.propTypes = {
  params: PropTypes.object, // react router

  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func,

  searchFetching: PropTypes.bool.isRequired,
  searchPayload:  PropTypes.object.isRequired,
  searchResult:   PropTypes.arrayOf(PropTypes.object).isRequired,
  searchError:    PropTypes.object,
  searchTime:     PropTypes.string.isRequired,

  actions: PropTypes.shape({
    hideRechercheBenefModal: PropTypes.func.isRequired,
    postSearchIfNeeded: PropTypes.func.isRequired
  }).isRequired
};

SelectBenefModal.defaultProps = {
  title: 'Sélection du bénéficiaire avant création ou édition de contact'
};

export default SelectBenefModal;
