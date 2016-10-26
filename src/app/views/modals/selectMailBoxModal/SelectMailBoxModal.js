import React, {
  Component,
  PropTypes
}                         from 'react';
import shallowCompare     from 'react-addons-shallow-compare';
import {
  Modal
}                         from 'react-bootstrap';
// import { appConfig }      from '../../../config';
import ModalHeader        from './modalHeader/ModalHeader';
import ModalFooter        from './modalFooter/ModalFooter';

import FetchingIndicator  from './fetchingIndicator/FetchingIndicator';
import SearchResult       from './searchResult/SearchResult';


class SelectMailBoxModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};

    this.handlesOnClose = this.handlesOnClose.bind(this);
    this.handlesOnBenefSelection = this.handlesOnBenefSelection.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { showModal, title  } = this.props;
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
              !searchFetching &&
              <SearchResult
                isFetching={searchFetching}
                refreshTime={searchTime}
                results={searchResult}
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

  handlesOnClose() {
    const { onClose } = this.props;
    // all input filters reset
    this.initFilters();
    // all value reset
    this.initInputs();
    onClose();
  }

  handlesOnBenefSelection(id = 0) {
    // console.log('handles benef selection, id: ', id);
    const { contactId, typeContact } = this.props;
    if (id > 0) {
      // using here router from context (see https://github.com/ReactTraining/react-router/blob/master/docs/API.md#contextrouter)
      // route to edit contact view (type send through router state)
      const { router } = this.context;
      router.push({
        pathname: `${gestContactsUrl}/${id}`, // benefId in parmater to force benefId to be defined to route to contact edit
        state: {
          contactId,
          contactCanal: typeContact
        }
      });
      // close popup
      this.handlesOnClose();
    }
  }
}

SelectMailBoxModal.contextTypes = {
  // for manual routing
  router: React.PropTypes.object.isRequired
};

SelectMailBoxModal.propTypes = {
  params: PropTypes.object, // react router

  showModal: PropTypes.bool.isRequired,
  contactId: PropTypes.number.isRequired,
  typeContact: PropTypes.string.isRequired,

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

SelectMailBoxModal.defaultProps = {
  title: 'Sélection de la boîte mail avant création ou édition de contact'
};

export default SelectMailBoxModal;
