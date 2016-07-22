import { bindActionCreators }     from 'redux';
import { connect }                from 'react-redux';
import * as actions               from '../../../redux/actions';
import { FicheContactPersonnes }  from '../../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterCreateFicheContactPersonnes: actions.enterCreateFicheContactPersonnes,
        leaveCreateFicheContactPersonnes: actions.leaveCreateFicheContactPersonnes
      },
      dispatch)
  };
};

const FicheContactPersonnesConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(FicheContactPersonnes);

export default FicheContactPersonnesConnected;
