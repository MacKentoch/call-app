import React, {
  Component,
  PropTypes
}                           from 'react';
import shallowCompare       from 'react-addons-shallow-compare';
import Attachments          from 'attachments/Attachments';


class ListAttachments extends Component {
  constructor(props) {
    super(props);

    this.handlesOnDelete = this.handlesOnDelete.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { id, label, attachments } = this.props;

    return (
      <div className="form-group">
        <label
          className="control-label"
          htmlFor={id}>
          {label}
        </label>
        <div>
          {
            attachments.map(
              ({ type, name, filePath, size }, idx) => {
                return (
                  <Attachments
                    key={idx}
                    attachments={attachments}
                  />
                );
              }
            )
          }
        </div>
      </div>
    );
  }
}

ListAttachments.propTypes = {
  label:    PropTypes.string.isRequired,
  id:       PropTypes.string.isRequired,
  attachments: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['zip', 'rar', '7zip', 'pdf', 'txt', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'png', 'jpg', 'jpeg', 'bmp']),
      name: PropTypes.string.isRequired,
      filePath: PropTypes.string,
      size: PropTypes.any.isRequired
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ListAttachments;
