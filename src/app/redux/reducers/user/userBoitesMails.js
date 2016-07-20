import {
  REQUEST_USER_BOITES_MAILS_DATA,
  RECEIVED_USER_USER_BOITES_MAILS_DATA,
  ERROR_USER_USER_BOITES_MAILS_DATA
}                                     from '../../actions/user/userBoitesMails';

const initialState = {
  isFetching: false,
  data: [],
  time: ''
};

const userBoitesMails = (state = initialState, action) => {
  switch (action.type) {

  case REQUEST_USER_BOITES_MAILS_DATA:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  case RECEIVED_USER_USER_BOITES_MAILS_DATA:
    return {
      ...state,
      isFetching: action.isFetching,
      data:       [...action.data],
      time:       action.time
    };

  case ERROR_USER_USER_BOITES_MAILS_DATA:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  default:
    return state;
  }
};


export default userBoitesMails;
