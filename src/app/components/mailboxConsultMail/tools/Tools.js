import React, { PropTypes } from 'react';

export const Tools  = ({}) => {
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
          title="Reply">
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
          title="Forward">
          <i className="fa fa-share"></i>
          &nbsp;
          Tranférer
        </button>
      </div>

      <button
        type="button"
        className="btn btn-default btn-sm"
        data-toggle="tooltip"
        title="Print">
        <i className="fa fa-print"></i>
        &nbsp;
        Imprimer
      </button>
    </div>
  );
};

export default Tools;
