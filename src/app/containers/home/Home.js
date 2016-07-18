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

    fichesParCanalData: state.fichesParCanal.data,
    fichesParCanalIsFetching: state.fichesParCanal.isFetching,
    fichesParCanalLastFetch: state.fichesParCanal.time,

    principauxMotifsLabels: state.principauxMotifs.labels,
    principauxMotifsDataset: state.principauxMotifs.datasets,
    principauxMotifsIsFetching: state.principauxMotifs.isFetching,
    principauxMotifsLastFetch: state.principauxMotifs.time
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterHome: actions.enterHome,
        leaveHome: actions.leaveHome,

        fetchFichesTraiteeDataIfNeeded: actions.fetchFichesTraiteeDataIfNeeded,

        fetchFichesParCanalDataIfNeeded: actions.fetchFichesParCanalDataIfNeeded,

        fetchPrincipauxMotifsDataIfNeeded: actions.fetchPrincipauxMotifsDataIfNeeded
      },
      dispatch)
  };
};

const HomeConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeConnected;
