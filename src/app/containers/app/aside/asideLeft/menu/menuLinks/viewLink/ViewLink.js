import React, { PropTypes } from 'react';
import cx                   from 'classnames';
import { Link }             from 'react-router';

const ViewLink = ({isActive, linkTo, viewName, faIconName}) => {
  return (
    <li
      className={cx({'active': isActive})}
      >
      <Link
        to={linkTo}>
        <i
          className={`fa ${faIconName}`}
          style={{marginLeft: '10px'}}>
        </i>
        <span>
          {viewName}
        </span>
      </Link>
    </li>
  );
};

ViewLink.propTypes = {
  isActive: PropTypes.bool,
  viewName: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  faIconName: PropTypes.string.isRequired
};

ViewLink.defaultProps = {
  isActive: false
};

export default ViewLink;
