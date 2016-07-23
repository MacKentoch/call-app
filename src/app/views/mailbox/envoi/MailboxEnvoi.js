import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
// import { appConfig }                    from '../../config';


class MailboxEnvoi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };
  }

  componentDidMount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.enterMailboxSentbox(`mailbox #${mailboxId}`);
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.leaveMailboxSentbox('test');
  }

  render() {
    const { animated } = this.state;
    return(
      <section
        className={cx({
          'content':        true,
          'animatedViews':  animated,
          'view-enter':     animated
        })}>
        {/* TODO */}
        <div
          className="row"
          style={{marginBottom: '5px'}}>


          <div className="col-md-3">
            <h3>
              mailbox panel
            </h3>
            <h4>
              comands
            </h4>
          </div>


          <div className="col-md-9">
            <h2>
              liste mail boite d'envoi
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

MailboxEnvoi.propTypes = {
  params: PropTypes.object, // react router
  location: PropTypes.object,  // react router

  actions: PropTypes.shape({
    enterMailboxSentbox: PropTypes.func,
    leaveMailboxSentbox: PropTypes.func
  })
};

export default MailboxEnvoi;
