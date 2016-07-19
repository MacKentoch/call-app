import React, {PropTypes} from 'react';

const LegendItem = ({label, color}) => {
  return (
      <li className="list-unstyled">
        <i
          className="fa fa-square"
          aria-hidden="true"
          style={{color: `${color}`}}>
        </i>
        &nbsp;
        <small>
          {label}
        </small>
      </li>
  );
};

LegendItem.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default LegendItem;
