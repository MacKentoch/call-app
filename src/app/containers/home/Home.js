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
    fichesTraiteesLastFetch: state.fichesTraitees.time
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterHome: actions.enterHome,
        leaveHome: actions.leaveHome,

        fetchFichesTraiteeDataIfNeeded: actions.fetchFichesTraiteeDataIfNeeded
      },
      dispatch)
  };
};

const HomeConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeConnected;
