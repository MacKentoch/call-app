import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../redux/actions';
import { Recherche }            from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterRecherche: actions.enterRecherche,
        leaveRecherche: actions.leaveRecherche
      },
      dispatch)
  };
};

const RechercheConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recherche);

export default RechercheConnected;
