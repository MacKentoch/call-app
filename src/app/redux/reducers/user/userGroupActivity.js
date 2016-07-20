import {
  REQUEST_USER_GROUP_ACTIVITY_DATA,
  RECEIVED_USER_USER_GROUP_ACTIVITY_DATA,
  ERROR_USER_USER_GROUP_ACTIVITY_DATA
}                                     from '../../actions/user/userGroupActivity';

const initialState = {
  isFetching: false,
  data: [],
  time: ''
};

const userGroupActivity = (state = initialState, action) => {
  switch (action.type) {

  case REQUEST_USER_GROUP_ACTIVITY_DATA:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  case RECEIVED_USER_USER_GROUP_ACTIVITY_DATA:
    return {
      ...state,
      isFetching: action.isFetching,
      data:       [...action.data],
      time:       action.time
    };

  case ERROR_USER_USER_GROUP_ACTIVITY_DATA:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  default:
    return state;
  }
};


export default userGroupActivity;
