import React, { PropTypes } from 'react';

const ListControl = ({minPage, maxPage, totalPages}) => {
  return (
    <div
      style={{ padding: '5px'}}>
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

      <button
        type="button"
        className="btn btn-default btn-sm">
        <i className="fa fa-refresh"></i>
      </button>

      <div className="pull-right">
        {minPage}-{maxPage}/{totalPages}
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
      </div>

    </div>
  );
};

ListControl.propTypes ={
  minPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default ListControl;
