import React, {PropTypes} from 'react';

const PersonnesLink = ({title, details, icon, backColor}) => {
  return (
    <div className="sm-st clearfix">
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
    </div>
  );
};

PersonnesLink.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
  icon: PropTypes.node,
  backColor: PropTypes.string
};

PersonnesLink.defaultProps = {
  title: '',
  details: '',
  icon: (<i className="fa fa-users" aria-hidden="true"></i>),
  backColor: '#E67E22'
};

export default PersonnesLink;
