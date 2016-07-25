import React, { PropTypes } from 'react';
import Title from './title/Title';
import HeaderTools from './headerTools/HeaderTools';
import ListControl from './listControl/ListControl';

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

          <div className="box-body no-padding">
            <ListControl
              showCheckToggle={false}
              minPage={1}
              maxPage={50}
              totalPages={200}
              onDeleteClick={(e)=>console.log('onDeleteClick, event: ', e)}
              onReplyClick={(e)=>console.log('onReplyClick, event: ', e)}
              onForwardClick={(e)=>console.log('onForwardClick, event: ', e)}
              onRefreshClick={(e)=>console.log('onRefreshClick, event: ', e)}
              onPagingPreviousClick={(e)=>console.log('onPagingPreviousClick, event: ', e)}
              onPagingNextClick={(e)=>console.log('onPagingNextClick, event: ', e)}
            />

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
