import React, { PropTypes } from 'react';
import Title from './title/Title';
import HeaderTools from './headerTools/HeaderTools';

const MailboxListMails = ({inboxMailName}) => {
  return (
    <div className="panel">
      <div
        className="panel-body"
        style={{
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: '0px',
          paddingRight: '0px'
        }}>
        <Title
          inboxMailName={inboxMailName}
        />
        <div className="box box-primary">

          <HeaderTools
            title={'Reçus'}
            onSearch={(value)=>console.log('search: ', value)}
          />

          {/*<!-- /.box-header -->*/}
          <div className="box-body no-padding">
            <div className="mailbox-controls">
              {/*<!-- Check all button -->*/}
              <button
                type="button"
                className="btn btn-default btn-sm checkbox-toggle">
                <i className="fa fa-square-o"></i>
              </button>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-default btn-sm">
                  <i className="fa fa-trash-o"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-default btn-sm">
                  <i className="fa fa-reply"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-default btn-sm">
                  <i className="fa fa-share"></i>
                </button>
              </div>
              {/*<!-- /.btn-group -->*/}
              <button
                type="button"
                className="btn btn-default btn-sm">
                <i className="fa fa-refresh"></i>
              </button>
              <div className="pull-right">
                1-50/200
                &nbsp;
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-default btn-sm">
                    <i className="fa fa-chevron-left"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-default btn-sm">
                    <i className="fa fa-chevron-right"></i>
                  </button>
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
                  <td className="mailbox-star">
                    <a href="#">
                      <i className="fa fa-star text-yellow"></i>
                    </a>
                  </td>
                  <td className="mailbox-name">
                    <a href="read-mail.html">
                      Alexander Pierce
                    </a>
                  </td>
                  <td className="mailbox-subject">
                    <b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...
                  </td>
                  <td className="mailbox-attachment">

                  </td>
                  <td className="mailbox-date">
                    5 mins ago
                  </td>
                </tr>

                  </tbody>
                </table>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MailboxListMails.propTypes = {
  inboxMailName: PropTypes.string.isRequired
};

export default MailboxListMails;
