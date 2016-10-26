import React, { PropTypes } from 'react';
// import Title                from './title/Title';
import HeaderTools          from './headerTools/HeaderTools';
import ListControl          from './listControl/ListControl';
import Table                from './table/Table';

const SelectMailboxList = ({
  userMailsBoxes,
  onPagingPreviousClick,
  onPagingNextClick,
  onSearch,
  onBackToForm,
  minPage,
  maxPage,
  totalMailboxes,
  onRowClick
}) => {
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
        {/* <Title
          mailBoxName={mailBoxName}
        /> */}
        <div className="box box-primary">

          <HeaderTools
            title={''}
            onSearch={onSearch}
            onBackButtonClick={onBackToForm}
          />
          <hr />
          <div
            className="box-body no-padding">

            <ListControl
              showCheckToggle={false}
              minPage={minPage}
              maxPage={maxPage}
              totalPages={totalMailboxes}
              onPagingPreviousClick={onPagingPreviousClick}
              onPagingNextClick={onPagingNextClick}
            />

            <div className="table-responsive mailbox-messages">
              <Table
                userMailsBoxes={userMailsBoxes}
                onRowClick={onRowClick}
              />
            </div>

            <ListControl
              showCheckToggle={false}
              minPage={minPage}
              maxPage={maxPage}
              totalPages={totalMailboxes}
              onPagingPreviousClick={onPagingPreviousClick}
              onPagingNextClick={onPagingNextClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

SelectMailboxList.propTypes = {
  userMailsBoxes: PropTypes.arrayOf(
    PropTypes.shape({
      // generic
      id: PropTypes.number.isRequired,
      titre: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      faIcoName: PropTypes.string.isRequired,
      linkTo: PropTypes.string.isRequired,
      itemCount: PropTypes.number.isRequired
    })
  ),
  totalMailboxes: PropTypes.number.isRequired,

  minPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,

  onPagingPreviousClick: PropTypes.func.isRequired,
  onPagingNextClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onBackToForm: PropTypes.func.isRequired,
  onRowClick: PropTypes.func.isRequired
};

export default SelectMailboxList;
