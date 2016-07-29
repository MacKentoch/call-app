import React, { PropTypes } from 'react';

export const Tools  = ({onReplyClick, onForwardClick, onPrintClick}) => {
  return (
    <div
      className="mailbox-controls with-border text-center"
      style={{
        marginTop: '10px'
      }}>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-default btn-sm"
          data-toggle="tooltip"
          data-container="body"
          title="Reply"
          onClick={onReplyClick}>
          <i className="fa fa-reply"></i>
          &nbsp;
          Répondre
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-default btn-sm"
          data-toggle="tooltip"
          data-container="body"
          title="Forward"
          onClick={onForwardClick}>
          <i className="fa fa-share"></i>
          &nbsp;
          Tranférer
        </button>
      </div>

      <button
        type="button"
        className="btn btn-default btn-sm"
        data-toggle="tooltip"
        title="Print"
        onClick={onPrintClick}>
        <i className="fa fa-print"></i>
        &nbsp;
        Imprimer
      </button>
    </div>
  );
};

Tools.propTypes = {
  onReplyClick: PropTypes.func.isRequired,
  onForwardClick: PropTypes.func.isRequired,
  onPrintClick: PropTypes.func.isRequired
};

export default Tools;
