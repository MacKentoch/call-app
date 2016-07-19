import React, {PropTypes} from 'react';

const TelephoneLink = ({title, details, icon, backColor}) => {
  return (
    <div className="sm-st clearfix shortcut">
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

TelephoneLink.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
  icon: PropTypes.node,
  backColor: PropTypes.string
};

TelephoneLink.defaultProps = {
  title: '',
  details: '',
  icon: (<i className="fa fa-phone" aria-hidden="true"></i>),
  backColor: '#E67E22'
};

export default TelephoneLink;
