import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import * as actions               from '../../../redux/actions';
import { FicheContactTelephone }  from '../../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterCreateFicheContactTelephone: actions.enterCreateFicheContactTelephone,
        leaveCreateFicheContactTelephone: actions.leaveCreateFicheContactTelephone
      },
      dispatch)
  };
};

const FicheContactTelephoneConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(FicheContactTelephone);

export default FicheContactTelephoneConnected;
