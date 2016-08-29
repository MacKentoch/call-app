import React, { PropTypes } from 'react';

const ListControl = ({
  minPage,
  maxPage,
  totalPages,
  showCheckToggle,
  showReply,
  onReplyClick,
  showForward,
  onForwardClick,
  onPagingPreviousClick,
  onPagingNextClick
}) => {
  return (
    <div
      style={{ padding: '5px'}}>
      {
        showCheckToggle &&
        <button
          type="button"
          className="btn btn-default btn-sm checkbox-toggle">
          <i className="fa fa-square-o"></i>
        </button>
      }

      <div className="btn-group">
        {
          showReply &&
          <button
            type="button"
            className="btn btn-default btn-sm"
            onClick={onReplyClick}>
            <i className="fa fa-reply"></i>
          </button>
        }
        {
          showForward &&
          <button
            type="button"
            className="btn btn-default btn-sm"
            onClick={onForwardClick}>
            <i className="fa fa-share"></i>
          </button>
        }
      </div>

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
  );
};

ListControl.propTypes = {
  minPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,

  showReply: PropTypes.bool,
  onReplyClick: PropTypes.func,

  showForward: PropTypes.bool,
  onForwardClick: PropTypes.func,

  onRefreshClick: PropTypes.func.isRequired,

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
