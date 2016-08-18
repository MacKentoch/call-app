import React, { PropTypes } from 'react';

const Img = ({name, filePath, size}) => {
  return (
    <li>
      <span className="mailbox-attachment-icon">
        <i className="fa fa-file-image-o"></i>
      </span>
      <div className="mailbox-attachment-info">
        <a
          href={filePath}
          className="mailbox-attachment-name">
          <i className="fa fa-paperclip"></i>
          &nbsp;
          {name}
        </a>
        <span className="mailbox-attachment-size">
          {size}
          <a
            href={filePath}
            className="btn btn-default btn-xs pull-right">
            <i className="fa fa-cloud-download"></i>
          </a>
        </span>
      </div>
    </li>
  );
};

Img.propTypes = {
  name: PropTypes.string.isRequired,
  filePath: PropTypes.string,
  size: PropTypes.any.isRequired
};

Img.defaultProps = {
  filePath: ''
};

export default Img;
