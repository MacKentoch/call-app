import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
    this.handlesOnChange = this.handlesOnChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillReceiveProps(nextProps) {
    const { comment } = this.state;
    const { value } = nextProps;

    if (value !== comment) {
      this.setState({comment: value});
    }
  }

  render() {
    const {label, id, value, disabled} = this.props;
    return (
      <div className="form-group">
        <label
          htmlFor={id}
          style={{fontSize: '12px'}}
          className="control-label">
          {label}
        </label>
        <div>
          <textarea
            className="form-control"
            rows="3"
            id={id}
            disabled={disabled}
            value={value}
            onChange={this.handlesOnChange}>
          </textarea>
        </div>
      </div>
    );
  }

  handlesOnChange(event) {
    event.preventDefault();
    const { onChange } = this.props;
    onChange(event.target.value.trim());
  }
}

Comment.propTypes = {
  label:    PropTypes.string.isRequired,
  id:       PropTypes.string.isRequired,
  value:    PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  nbrows:   PropTypes.number,
  onChange: PropTypes.func.isRequired
};

Comment.defaultProps = {
  nbrows: 3,
  disabled: false
};

export default Comment;
