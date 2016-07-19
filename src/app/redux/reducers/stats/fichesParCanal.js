import {
  REQUEST_FICHES_PAR_CANAL_DATA,
  RECEIVED_FICHES_PAR_CANAL_DATA,
  ERROR_FICHES_PAR_CANAL_DATA
}                                 from '../../actions/stats/fichesParCanal';
import { appConfig }              from '../../../config';


const initialState = {
  isFetching: false,
  data:       [],
  legend:     [...appConfig.stats.legendeInit],
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
      data:       [...action.data],
      legend:     [...action.legend],
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
