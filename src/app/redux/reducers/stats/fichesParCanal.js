import {
  REQUEST_FICHES_PAR_CANAL_DATA,
  RECEIVED_FICHES_PAR_CANAL_DATA,
  ERROR_FICHES_PAR_CANAL_DATA
} from '../../actions/stats/fichesParCanal';

const initialState = {
  isFetching: false,
  labels:     [],
  datasets:   [],
  time:       ''
};

const fichesParCanal = (state = initialState, action) => {
  switch (action.type) {

  case REQUEST_FICHES_PAR_CANAL_DATA:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  case RECEIVED_FICHES_PAR_CANAL_DATA:
    return {
      ...state,
      isFetching: action.isFetching,
      labels:     [...action.labels],
      datasets:   [...action.datasets],
      time:       action.time
    };

  case ERROR_FICHES_PAR_CANAL_DATA:
    return {
      ...state,
      isFetching: action.isFetching,
      time:       action.time
    };

  default:
    return state;
  }
};

export default fichesParCanal;
