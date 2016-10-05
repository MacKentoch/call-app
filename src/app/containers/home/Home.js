import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../redux/actions';
import { Home }               from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView,

    fichesTraiteesLabels: state.fichesTraitees.labels,
    fichesTraiteesDataset: state.fichesTraitees.datasets,
    fichesTraiteesLegend: state.fichesTraitees.legend,
    fichesTraiteesIsFetching: state.fichesTraitees.isFetching,
    fichesTraiteesLastFetch: state.fichesTraitees.time,

    fichesParCanalData: state.fichesParCanal.data,
    fichesParCanalLegend: state.fichesParCanal.legend,
    fichesParCanalIsFetching: state.fichesParCanal.isFetching,
    fichesParCanalLastFetch: state.fichesParCanal.time,

    userGroupActivityData: state.userGroupActivity.data,
    userGroupActivityIsFetching: state.userGroupActivity.isFetching,
    userGroupActivityLastFetch: state.userGroupActivity.time,

    userBoitesMailsData: state.userBoitesMails.data,
    userBoitesMailsIsFetching: state.userBoitesMails.isFetching,
    userBoitesMailsLastFetch: state.userBoitesMails.time,

    principauxMotifsLabels: state.principauxMotifs.labels,
    principauxMotifsDataset: state.principauxMotifs.datasets,
    principauxMotifsLegend: state.principauxMotifs.legend,
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

        fetchPrincipauxMotifsDataIfNeeded: actions.fetchPrincipauxMotifsDataIfNeeded,

        fetchUserGroupActivityDataIfNeeded: actions.fetchUserGroupActivityDataIfNeeded,

        fetchUserBoitesMailsDataIfNeeded: actions.fetchUserBoitesMailsDataIfNeeded,

        // modals select benef (before contact edit / create):
        showSelectBenefModal: actions.showSelectBenefModal,
        hideSelectBenefModal: actions.hideSelectBenefModal
      },
      dispatch)
  };
};

const HomeConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeConnected;
