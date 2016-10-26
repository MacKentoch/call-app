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
import ListUserMailboxes  from './listUserMailboxes/ListUserMailboxes';


class SelectMailBoxModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};

    this.handlesOnClose = this.handlesOnClose.bind(this);
    this.handlesOnMailboxSelection = this.handlesOnMailboxSelection.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { showModal, title  } = this.props;
    const { isFetching, searchResult, searchTime } = this.props;

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
              isFetching &&
              <FetchingIndicator />
            }
            {
              !isFetching &&
              <ListUserMailboxes
                isFetching={isFetching}
                refreshTime={searchTime}
                results={searchResult}
                onBenefSelection={this.handlesOnMailboxSelection}
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

  handlesOnMailboxSelection(id = 0, linkTo = '') {
    const { contactId, typeContact } = this.props;
    if ((parseInt(id, 10) > 0) && linkTo && (linkTo.length > 0)) {
      const { router } = this.context;
      router.push({
        pathname: `${linkTo}`,
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

  isFetching: PropTypes.bool.isRequired,
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
