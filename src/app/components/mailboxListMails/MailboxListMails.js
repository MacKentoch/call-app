import React, { PropTypes } from 'react';
import Title                from './title/Title';
import HeaderTools          from './headerTools/HeaderTools';
import ListControl          from './listControl/ListControl';
import Table                from './table/Table';

const MailboxListMails = ({mailBoxName, mails, mailboxType, mailboxId, onRefreshListClick, onPagingPreviousClick, onPagingNextClick, onSearch, minPage, maxPage, totalMails, consultLinkTo}) => {
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
            onSearch={onSearch}
          />

          <div className="box-body no-padding">

            <ListControl
              showCheckToggle={false}
              minPage={minPage}
              maxPage={maxPage}
              totalPages={totalMails}
              onRefreshClick={onRefreshListClick}
              onPagingPreviousClick={onPagingPreviousClick}
              onPagingNextClick={onPagingNextClick}
            />

            <div className="table-responsive mailbox-messages">
              <Table
                mailboxId={mailboxId}
                mailboxType={mailboxType}
                mails={mails}
                consultLinkTo={consultLinkTo}
              />
            </div>

            <ListControl
              showCheckToggle={false}
              minPage={minPage}
              maxPage={maxPage}
              totalPages={totalMails}
              onRefreshClick={onRefreshListClick}
              onPagingPreviousClick={onPagingPreviousClick}
              onPagingNextClick={onPagingNextClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

MailboxListMails.propTypes = {
  mailboxId: PropTypes.string.isRequired,
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
  minPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  totalMails: PropTypes.number.isRequired,
  onRefreshListClick: PropTypes.func.isRequired,
  onPagingPreviousClick: PropTypes.func.isRequired,
  onPagingNextClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  consultLinkTo: PropTypes.string.isRequired
};

export default MailboxListMails;
