import {
  SHOW_RECHERCHE_BENEF_MODAL,
  HIDE_RECHERCHE_BENEF_MODAL
}                             from '../../actions/modals/rechercheBenefModal';

const initialState = {
  isOpened:  false,
  time:      ''
};

const rechercheBenefModal = (state = initialState, action) => {
  switch (action.type) {
  case SHOW_RECHERCHE_BENEF_MODAL:
    return {
      ...state,
      isOpened:   true,
      time:       action.time
    };
  case HIDE_RECHERCHE_BENEF_MODAL:
    return {
      ...state,
      isOpened:   false,
      time:       action.time
    };
  default:
    return state;
  }
};

export default rechercheBenefModal;
