import React, { PropTypes } from 'react';
import cx                   from 'classnames';
import { Link }             from 'react-router';

const ViewLink = ({isActive, viewName}) => {
  return (
    <li
      className={cx({'active': isActive})}
      style={{paddingLeft: '10px'}}>
      <Link to="/recherche">
        <i className="fa fa-search"></i>
        <span>
          {viewName}
        </span>
      </Link>
    </li>
  );
};

ViewLink.propTypes = {
  isActive: PropTypes.bool,
  viewName: PropTypes.string.isRequired
};

ViewLink.defaultProps = {
  isActive: false
};

export default ViewLink;
