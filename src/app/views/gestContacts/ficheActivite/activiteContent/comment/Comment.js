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

    this.timer = null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillReceiveProps(nextProps) {
    const { comment } = this.state;
    const { value } = nextProps;

    if ((value !== comment) && comment.length === 0) {
      this.setState({comment: value});
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  render() {
    const {label, id, disabled} = this.props;
    const { comment } = this.state;

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
            // value={comment}
            defaultValue={comment}
            // onChange={this.handlesOnChange} // IE11 misses some keys entered... yes I know what you think...
            onInput={this.handlesOnChange}>
          </textarea>
        </div>
      </div>
    );
  }

  handlesOnChange(event) {
    event.preventDefault();
    // const { onChange } = this.props;

    this.setState({comment: event.target.value});
    // onChange(event.target.value);
    // perf hack:
    this.setTimerBeforeCallback(event.target.value);
  }

  setTimerBeforeCallback(value) {
    const { onChange, delay } = this.props;

    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    this.timer = setTimeout(
      () => onChange(value),
      delay
    );
  }
}

Comment.propTypes = {
  label:    PropTypes.string.isRequired,
  id:       PropTypes.string.isRequired,
  value:    PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  nbrows:   PropTypes.number,
  onChange: PropTypes.func.isRequired,
  delay:    PropTypes.number
};

Comment.defaultProps = {
  nbrows: 3,
  disabled: false,
  delay: 200
};

export default Comment;
