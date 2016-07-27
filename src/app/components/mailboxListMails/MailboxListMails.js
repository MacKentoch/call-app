import React, { PropTypes } from 'react';
import Title                from './title/Title';
import HeaderTools          from './headerTools/HeaderTools';
import ListControl          from './listControl/ListControl';
import Table                from './table/Table';

const MailboxListMails = ({mailBoxName, mails, mailboxType, onRefreshListClick}) => {
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
          mailBoxName={mailBoxName}
        />
        <div className="box box-primary">

          <HeaderTools
            title={mailboxType}
            onSearch={(value)=>console.log('search: ', value)}
          />

          <div className="box-body no-padding">
            <ListControl
              showCheckToggle={false}
              minPage={1}
              maxPage={50}
              totalPages={200}
              onReplyClick={(e)=>console.log('onReplyClick, event: ', e)}
              onForwardClick={(e)=>console.log('onForwardClick, event: ', e)}
              onRefreshClick={onRefreshListClick}
              onPagingPreviousClick={(e)=>console.log('onPagingPreviousClick, event: ', e)}
              onPagingNextClick={(e)=>console.log('onPagingNextClick, event: ', e)}
            />

            <div className="table-responsive mailbox-messages">
              <Table
                mailboxType={mailboxType}
                mails={mails}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MailboxListMails.propTypes = {
  mailboxType: PropTypes.oneOf(['Reçus', 'Envoyés']).isRequired,
  mailBoxName: PropTypes.string.isRequired,
  mails: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      notRead: PropTypes.bool.isRequired,
      receptionDate: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      from: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
      }).isRequired,
      to: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
      }).isRequired,
      body: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    })
  ),
  onRefreshListClick: PropTypes.func.isRequired
};

export default MailboxListMails;
