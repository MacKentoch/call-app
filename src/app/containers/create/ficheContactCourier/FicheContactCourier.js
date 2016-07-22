import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { FicheContactCourier }  from '../../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterCreateFicheContactCourier: actions.enterCreateFicheContactCourier,
        leaveCreateFicheContactCourier: actions.leaveCreateFicheContactCourier
      },
      dispatch)
  };
};

const FicheContactCourierConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(FicheContactCourier);

export default FicheContactCourierConnected;
