import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class Csv extends Component {
  constructor(props) {
    super(props);
    this.handlesOnTrashClick = this.handlesOnTrashClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { name, filePath, size, hideTrash } = this.props;
    return (
      <li>
        <span
          className="mailbox-attachment-icon"
          style={{fontSize: '45px'}}>
          <i className="fa fa-file-text-o"></i>
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
            {
              !hideTrash &&
              <button
                className="btn btn-default btn-xs pull-right"
                onClick={this.handlesOnTrashClick}>
                <i className="fa fa-trash-o"></i>
              </button>
            }
          </span>
        </div>
      </li>
    );
  }

  handlesOnTrashClick(evt) {
    evt.preventDefault();
    const { onTrashClick, name } = this.props;
    onTrashClick(name);
  }
}

Csv.propTypes = {
  name: PropTypes.string.isRequired,
  filePath: PropTypes.string,
  size: PropTypes.any.isRequired,
  onTrashClick: PropTypes.func,
  hideTrash: PropTypes.bool
};

Csv.defaultProps = {
  filePath: ''
};

export default Csv;
