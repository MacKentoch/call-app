import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
import * as actions             from '../../../redux/actions';
import { MailWriteNew }          from '../../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        enterMailboxWriteNew: actions.enterMailboxWriteNew,
        leaveMailboxWriteNew: actions.leaveMailboxWriteNew
      },
      dispatch)
  };
};

const MailWriteNewConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(MailWriteNew);

export default MailWriteNewConnected;
