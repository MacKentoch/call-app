import React, { PropTypes } from 'react';

const EditValidIcons = ({isEditing, saveEdit, cancelEditing, setEdit}) => {
  return (
    <span className="pull-right">
      {
        isEditing
        ?
        <span>
          <button
            className="btn btn-success btn-sm"
            onClick={saveEdit}>
            <i
              className="fa fa-check text-blanc">
            </i>
          </button>

          &nbsp;
          <button
            className="btn btn-default btn-sm"
            onClick={cancelEditing}>
            <i
              className="fa fa-times text-blanc">
            </i>
          </button>
        </span>
        :
        <button
          className="btn orange_button btn-sm"
          onClick={setEdit}>
          <i
            className="fa fa-pencil text-blanc">
          </i>
        </button>
      }
    </span>
  );
};

EditValidIcons.propTypes = {
  isEditing: PropTypes.bool,
  setEdit: PropTypes.func.isRequired,
  saveEdit: PropTypes.func.isRequired,
  cancelEditing: PropTypes.func.isRequired
};

EditValidIcons.defaultProps= {
  isEditing: false
};

export default EditValidIcons;
