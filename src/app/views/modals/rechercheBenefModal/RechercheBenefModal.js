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

const searchInputBenefFilters = [...appConfig.searchBenefInputFilters];
const seachBenefDefaultFilter = searchInputBenefFilters[0].libelle;

class RechercheBenefModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Identifiant
      identSelectedFilter: '',
      // Nom
      NomSelectedFilter: '',
      // Prenom
      PrenomSelectedFilter: '',
      // NumSS
      numssSelectedFilter: '',
    };

    this.handlesOnClose = this.handlesOnClose.bind(this);
    this.handlesOnSearch = this.handlesOnSearch.bind(this);
    this.handlesOnInputFilterChange = this.handlesOnInputFilterChange.bind(this);
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
               onfilterChange={this.handlesOnInputFilterChange}
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
               onfilterChange={this.handlesOnInputFilterChange}
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
               onfilterChange={this.handlesOnInputFilterChange}
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
               onfilterChange={this.handlesOnInputFilterChange}
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
      identSelectedFilter: seachBenefDefaultFilter,
      // Nom
      NomSelectedFilter: seachBenefDefaultFilter,
      // Prenom
      PrenomSelectedFilter: seachBenefDefaultFilter,
      // NumSS
      numssSelectedFilter: seachBenefDefaultFilter
    });
  }

  handlesOnInputFilterChange(filterId, filterLibelle) {

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
