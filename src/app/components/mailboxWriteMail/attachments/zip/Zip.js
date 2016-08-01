import React, { PropTypes } from 'react';

const Zip = ({filename, filePath, size}) => {
  return (
    <li>
      <span className="mailbox-attachment-icon">
        <i className="fa fa-file-archive-o"></i>
      </span>
      <div className="mailbox-attachment-info">
        <a
          href={filePath}
          className="mailbox-attachment-name">
          <i className="fa fa-paperclip"></i>
          &nbsp;
          {filename}
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

Zip.propTypes = {
  filename: PropTypes.string.isRequired,
  filePath: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

export default Zip;
