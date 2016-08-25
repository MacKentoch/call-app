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
import SearchInput        from './searchInput/SearchInput';
import SearchButton       from './searchButton/SearchButton';
import SearchCommand      from './searchCommand/SearchCommand';

const searchInputBenefFilters = [...appConfig.searchBenefInputFilters];
const seachBenefDefaultFilter = searchInputBenefFilters[0].id;

const SearchCriteria = [...appConfig.searchCriterias];


class RechercheBenefModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Identifiant
      identSelectedFilterId: -1,
      identSelectedFilter: '',
      identActive: false,
      // Nom
      NomSelectedFilterId: -1,
      NomSelectedFilter: '',
      NomActive: false,
      // Prenom
      PrenomSelectedFilterId: -1,
      PrenomSelectedFilter: '',
      PrenomActive: false,
      // NumSS
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
  }

  componentDidMount() {
    this.initFilters();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { showModal, title  } = this.props;
    const { identSelectedFilter, NomSelectedFilter, PrenomSelectedFilter, numssSelectedFilter } = this.state;
    const { criterias } = this.state;
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

            <SearchCommand
              criterias={criterias}
              onCriteriaClick={this.handlesOnCriteriaClick}
            />

            <div style={{height: '20px'}}></div>
            <hr />

            <form role="form">
             <SearchInput
               // label:
               showLabel={true}
               labelText={'Identifiant'}
               // help block text:
               showHelpBlock={true}
               helpBlockText={'Identifiant de dossier et non celui du bénéficiaire'}
               // filter
               listFilters={searchInputBenefFilters}
               selectedfilter={identSelectedFilter}
               onfilterChange={this.handlesOnIdentFilterChange}
             />
             <SearchInput
               // label:
               showLabel={true}
               labelText={'Nom'}
               // help block text:
               showHelpBlock={true}
               helpBlockText={'Le nom du bénéficiaire'}
               // filter
               listFilters={searchInputBenefFilters}
               selectedfilter={NomSelectedFilter}
               onfilterChange={this.handlesOnNomFilterChange}
             />
             <SearchInput
               // label:
               showLabel={true}
               labelText={'Prénom'}
               // help block text:
               showHelpBlock={true}
               helpBlockText={'Le prénom du bénéficiaire'}
               // filter
               listFilters={searchInputBenefFilters}
               selectedfilter={PrenomSelectedFilter}
               onfilterChange={this.handlesOnPrenomFilterChange}
             />
             <SearchInput
               // label:
               showLabel={true}
               labelText={'NumSS'}
               // help block text:
               showHelpBlock={true}
               helpBlockText={'A renseigner sur 13 ou 15 caractères'}
               // filter
               listFilters={searchInputBenefFilters}
               selectedfilter={numssSelectedFilter}
               onfilterChange={this.handlesOnNumssFilterChange}
             />
             <div style={{height: '40px'}}></div>
             <SearchButton
              buttonText={'Rechercher'}
              onClick={this.handlesOnSearch}
             />
            </form>
          </Modal.Body>

          <ModalFooter
            onCloseClick={this.handlesOnClose}
          />

        </Modal>
      </div>
    );
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
    switch (critere) {

    case 'Identifiant':
      const { identActive, criterias } = this.state;

      const identIndex = criterias.findIndex(criter => criter.label === 'Identifiant');
      if (isFound(identIndex)) {
        const updatedCiterias = [...criterias];
        const isActive = updatedCiterias[identIndex].active;
        
        updatedCiterias[identIndex].active = toggleThisBool(isActive);
        this.setState({
          identActive: !identActive,
          criterias: [...updatedCiterias]
        });
      }
      break;

    case 'Nom':
      const { NomActive } = this.state;
      this.setState({ NomActive: !NomActive });
      break;

    case 'Prénom':
      const { PrenomActive } = this.state;
      this.setState({ PrenomActive: !PrenomActive });
      break;

    case 'Numéro sécu.':
      const { NumSSActive } = this.state;
      this.setState({ NumSSActive: !NumSSActive });
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
    console.log('on search click: TODO');
  }

  handlesOnClose() {
    const { onClose } = this.props;
    onClose();
  }
}

RechercheBenefModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func
};

RechercheBenefModal.defaultProps = {
  title: 'Recherche de bénéficiaires'
};

export default RechercheBenefModal;
