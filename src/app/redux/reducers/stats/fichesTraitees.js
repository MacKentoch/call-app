import {
  REQUEST_FICHES_TRAITEES_DATA,
  RECEIVED_FICHES_TRAITEES_DATA,
  ERROR_FICHES_TRAITEES_DATA
} from '../../actions/stats/fichesTraitees';

const initialState = {
  isFetching: false,
  labels:     [],
  datasets:   [],
  time:       ''
};

const fichesTraitees = (state = initialState, action) => {
  switch (action.type) {

  case REQUEST_FICHES_TRAITEES_DATA:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  case RECEIVED_FICHES_TRAITEES_DATA:
    return {
      ...state,
      isFetching: action.isFetching,
      labels:     [...action.labels],
      datasets:   [...action.datasets],
      time:       action.time
    };

  case ERROR_FICHES_TRAITEES_DATA:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  default:
    return state;
  }
};


export default fichesTraitees;
