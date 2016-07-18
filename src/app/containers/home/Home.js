import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../redux/actions';
import { Home }               from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,

    fichesTraiteesLabels: state.fichesTraitees.labels,
    fichesTraiteesDataset: state.fichesTraitees.datasets,
    fichesTraiteesIsFetching: state.fichesTraitees.isFetching,
    fichesTraiteesLastFetch: state.fichesTraitees.time,

    fichesParCanalLabels: state.fichesParCanal.labels,
    fichesParCanalDataset: state.fichesParCanal.datasets,
    fichesParCanalIsFetching: state.fichesParCanal.isFetching,
    fichesParCanalLastFetch: state.fichesParCanal.time
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterHome: actions.enterHome,
        leaveHome: actions.leaveHome,

        fetchFichesTraiteeDataIfNeeded: actions.fetchFichesTraiteeDataIfNeeded,

        fetchFichesParCanalDataIfNeeded: actions.fetchFichesParCanalDataIfNeeded
      },
      dispatch)
  };
};

const HomeConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeConnected;
