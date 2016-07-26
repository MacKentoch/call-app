import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';
// import * as actions             from '../../../redux/actions';
import { Mailbox }              from '../../views';

const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {

      },
      dispatch)
  };
};

const MailboxConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mailbox);

export default MailboxConnected;
