import {
  SHOW_SELECT_BENEF_MODAL,
  HIDE_SELECT_BENEF_MODAL
}                             from '../../actions/modals/selectBenefModal';

const initialState = {
  isOpened:     false,
  typeContact:  '',
  time:         ''
};

const selectBenefModal = (state = initialState, action) => {
  switch (action.type) {
  case SHOW_SELECT_BENEF_MODAL:
    return {
      ...state,
      isOpened:     true,
      typeContact:  action.typeContact,
      time:         action.time
    };
  case HIDE_SELECT_BENEF_MODAL:
    return {
      ...state,
      isOpened:     false,
      typeContact:  initialState.typeContact, // reset it
      time:         action.time
    };
  default:
    return state;
  }
};

export default selectBenefModal;
