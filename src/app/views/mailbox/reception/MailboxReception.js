import React, { PropTypes, Component }  from 'react';
import cx                               from 'classnames';
// import { appConfig }                    from '../../config';
import { MailboxRepertoires }           from '../../../components';


class MailboxReception extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animated: true
    };
  }

  componentDidMount() {
    const  { actions, params: { mailboxId } } =  this.props;
    actions.enterMailboxInbox(`mailbox #${mailboxId}`);
    actions.fetchInboxContentIfNeeded(mailboxId);
  }

  componentWillUnmount() {
    const { actions } = this.props;
    actions.leaveMailboxInbox('test');
  }

  render() {
    const { animated } = this.state;
    const { inboxMailName } = this.props;
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
            <MailboxRepertoires />
          </div>

          <div className="col-md-9">
            <div className="panel">
              <div className="panel-body" style={{paddingTop: 0, paddingBottom: 0, paddingLeft: '0px', paddingRight: '0px'}}>
                <h2 style={{marginLeft: '10px', color: '4A4A4A'}}>
                  <i className="fa fa-inbox"></i>
                  &nbsp;
                  {inboxMailName}
                </h2>

              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Reçus</h3>
                  <div className="box-tools pull-right">
                    <div className="has-feedback">
                      <input type="text" className="form-control input-sm" placeholder="Rechercher" />
                      <span className="glyphicon glyphicon-search form-control-feedback"></span>
                    </div>
                  </div>
                  {/*<!-- /.box-tools -->*/}
                </div>
                {/*<!-- /.box-header -->*/}
                <div className="box-body no-padding">
                  <div className="mailbox-controls">
                    {/*<!-- Check all button -->*/}
                    <button type="button" className="btn btn-default btn-sm checkbox-toggle"><i className="fa fa-square-o"></i>
                    </button>
                    <div className="btn-group">
                      <button type="button" className="btn btn-default btn-sm"><i className="fa fa-trash-o"></i></button>
                      <button type="button" className="btn btn-default btn-sm"><i className="fa fa-reply"></i></button>
                      <button type="button" className="btn btn-default btn-sm"><i className="fa fa-share"></i></button>
                    </div>
                    {/*<!-- /.btn-group -->*/}
                    <button type="button" className="btn btn-default btn-sm"><i className="fa fa-refresh"></i></button>
                    <div className="pull-right">
                      1-50/200
                      <div className="btn-group">
                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-left"></i></button>
                        <button type="button" className="btn btn-default btn-sm"><i className="fa fa-chevron-right"></i></button>
                      </div>
                      {/*<!-- /.btn-group -->*/}
                    </div>
                    {/*<!-- /.pull-right -->*/}
                  </div>
                  <div className="table-responsive mailbox-messages">
                    <table className="table table-hover">
                      <tbody>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                        </td>
                        <td className="mailbox-attachment"></td>
                        <td className="mailbox-date">5 mins ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                        </td>
                        <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                        <td className="mailbox-date">28 mins ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                        </td>
                        <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                        <td className="mailbox-date">11 hours ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                        </td>
                        <td className="mailbox-attachment"></td>
                        <td className="mailbox-date">15 hours ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                        </td>
                        <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                        <td className="mailbox-date">Yesterday</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                        </td>
                        <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                        </td>
                        <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                        </td>
                        <td className="mailbox-attachment"></td>
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                        </td>
                        <td className="mailbox-attachment"></td>
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                        </td>
                        <td className="mailbox-attachment"></td>
                        <td className="mailbox-date">2 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                        </td>
                        <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                        <td className="mailbox-date">4 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                        </td>
                        <td className="mailbox-attachment"></td>
                        <td className="mailbox-date">12 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                        </td>
                        <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                        <td className="mailbox-date">12 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                        </td>
                        <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                        <td className="mailbox-date">14 days ago</td>
                      </tr>
                      <tr>
                        <td><input type="checkbox" /></td>
                        <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                        <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                        <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                        </td>
                        <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                        <td className="mailbox-date">15 days ago</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
              </div>
            </div>
            </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

MailboxReception.propTypes = {
  params: PropTypes.object, // react router
  location: PropTypes.object,  // react router

  inboxMailId: PropTypes.number,
  inboxMailName: PropTypes.string,
  inboxIsFetching: PropTypes.bool,
  inbox: PropTypes.arrayOf(PropTypes.object),

  actions: PropTypes.shape({
    enterMailboxInbox: PropTypes.func,
    leaveMailboxInbox: PropTypes.func,
    fetchInboxContentIfNeeded: PropTypes.func
  })
};

export default MailboxReception;
