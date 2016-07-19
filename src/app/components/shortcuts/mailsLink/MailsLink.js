import React, {PropTypes} from 'react';
import { Link }           from 'react-router';

const MailsLink = ({title, details, icon, backColor, linkTo}) => {
  return (
    <div className="sm-st clearfix shortcut">
      <Link
        to={linkTo}
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
      </Link>
    </div>
  );
};

MailsLink.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
  icon: PropTypes.node,
  backColor: PropTypes.string,
  linkTo: PropTypes.string
};

MailsLink.defaultProps = {
  title: '',
  details: '',
  icon: (<i className="fa fa-envelope-o" aria-hidden="true"></i>),
  backColor: '#E67E22',
  linkTo: '/'
};

export default MailsLink;
