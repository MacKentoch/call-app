import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../redux/actions';
import { GestBeneficiaires }    from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterGestBeneficiaires: actions.enterGestBeneficiaires,
        leaveGestBeneficiaires: actions.leaveGestBeneficiaires
      },
      dispatch)
  };
};

const GestBeneficiairesConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(GestBeneficiaires);

export default GestBeneficiairesConnected;
