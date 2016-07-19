import React, {PropTypes} from 'react';

const EmailsLink = ({title, details, icon, backColor}) => {
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

EmailsLink.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
  icon: PropTypes.node,
  backColor: PropTypes.string
};

EmailsLink.defaultProps = {
  title: '',
  details: '',
  icon: (<i className="fa fa-paper-plane-o" aria-hidden="true"></i>),
  backColor: '#E67E22'
};

export default EmailsLink;
