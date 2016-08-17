import {
  SHOW_UPLOAD_ATTACHMENT_MODAL,
  HIDE_UPLOAD_ATTACHMENT_MODAL
}                                 from '../../actions/modals/uploadMailAttachmentsModal';

const initialState = {
  isOpened:  false,
  time:      ''
};

const uploadMailAttachmentsModal = (state = initialState, action) => {
  switch (action.type) {
  case SHOW_UPLOAD_ATTACHMENT_MODAL:
    return {
      ...state,
      isOpened:   true,
      time:       action.time
    };
  case HIDE_UPLOAD_ATTACHMENT_MODAL:
    return {
      ...state,
      isOpened:   false,
      time:       action.time
    };
  default:
    return state;
  }
};

export default uploadMailAttachmentsModal;
