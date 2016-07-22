import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { FicheContactMail }     from '../../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterCreateFicheContactMail: actions.enterCreateFicheContactMail,
        leaveCreateFicheContactMail: actions.leaveCreateFicheContactMail
      },
      dispatch)
  };
};

const FicheContactMailConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(FicheContactMail);

export default FicheContactMailConnected;
