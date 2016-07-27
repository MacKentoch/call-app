import React, { PropTypes } from 'react';

const ListControl = ({minPage, maxPage, totalPages, showCheckToggle, onDeleteClick, onReplyClick, onForwardClick, onRefreshClick, onPagingPreviousClick, onPagingNextClick}) => {
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
        {/*<button
          type="button"
          className="btn btn-default btn-sm"
          onClick={onDeleteClick}>
          <i className="fa fa-trash-o"></i>
        </button>*/}
        <button
          type="button"
          className="btn btn-default btn-sm"
          onClick={onReplyClick}>
          <i className="fa fa-reply"></i>
        </button>
        <button
          type="button"
          className="btn btn-default btn-sm"
          onClick={onForwardClick}>
          <i className="fa fa-share"></i>
        </button>
      </div>

      <button
        type="button"
        className="btn btn-default btn-sm"
        onClick={onRefreshClick}>
        <i className="fa fa-refresh"></i>
      </button>

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

  // onDeleteClick: PropTypes.func.isRequired,
  onReplyClick: PropTypes.func.isRequired,
  onForwardClick: PropTypes.func.isRequired,
  onRefreshClick: PropTypes.func.isRequired,

  onPagingPreviousClick: PropTypes.func.isRequired,
  onPagingNextClick: PropTypes.func.isRequired,

  showCheckToggle: PropTypes.bool
};

ListControl.defaultProps  ={
  showCheckToggle: false
};

export default ListControl;
