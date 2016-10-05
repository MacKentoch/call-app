import React, {PropTypes} from 'react';
// import { Link }           from 'react-router';

const MailsLink = ({title, details, icon, backColor, onClick}) => {
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

MailsLink.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
  icon: PropTypes.node,
  backColor: PropTypes.string,
  // linkTo: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

MailsLink.defaultProps = {
  title: '',
  details: '',
  icon: (<i className="fa fa-envelope-o" aria-hidden="true"></i>),
  backColor: '#E67E22'
  // linkTo: '/'
};

export default MailsLink;
