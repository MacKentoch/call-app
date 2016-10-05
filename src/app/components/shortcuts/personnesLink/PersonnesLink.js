import React, {PropTypes} from 'react';
// import { Link }           from 'react-router';

const PersonnesLink = ({title, details, icon, backColor, onClick}) => {
  return (
    <div className="sm-st clearfix shortcut">
      <a
        // to={linkTo}
        onClick={onClick}
        className="link">
        <span
          className="sm-st-icon"
          style={{backgroundColor: `${backColor}`}}>
          {icon}
        </span>
        <div className="sm-st-info">
          <span>
            {title}
          </span>
          <div>
            {details}
          </div>
        </div>
      </a>
    </div>
  );
};

PersonnesLink.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
  icon: PropTypes.node,
  backColor: PropTypes.string,
  // linkTo: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

PersonnesLink.defaultProps = {
  title: '',
  details: '',
  icon: (<i className="fa fa-users" aria-hidden="true"></i>),
  backColor: '#E67E22'
  // linkTo: '/'
};

export default PersonnesLink;
