import React, { PropTypes } from 'react';

const ListControl = ({
  minPage,
  maxPage,
  totalPages,

  onPagingPreviousClick,
  onPagingNextClick
}) => {
  return (
    <div
      className="row"
      style={{marginLeft: '5px', marginRight: '5px'}}>
      <div
        className="col-xs-12"
        style={{display: 'block', padding: '5px'}}>
        <div className="pull-right">
          {minPage}-{maxPage}/{totalPages}
          &nbsp;
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-default btn-sm"
              onClick={onPagingPreviousClick}>
              <i className="fa fa-chevron-left"></i>
            </button>
            <button
              type="button"
              className="btn btn-default btn-sm"
              onClick={onPagingNextClick}>
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ListControl.propTypes = {
  minPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,

  onPagingPreviousClick: PropTypes.func.isRequired,
  onPagingNextClick: PropTypes.func.isRequired,

  showCheckToggle: PropTypes.bool
};

ListControl.defaultProps  ={
  showCheckToggle: false,
  showReply: false,
  showForward: false
};

export default ListControl;
