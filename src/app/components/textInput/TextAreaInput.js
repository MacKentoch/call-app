import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class TextAreaInput extends Component {
  constructor(props) {
    super(props);
    this.state = { stateValue: '' };
    this.handlesOnChange = this.handlesOnChange.bind(this);

    this.timer = null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    const shouldUpdate = shallowCompare(this, nextProps, nextState);
    return shouldUpdate;
  }

  componentWillReceiveProps(nextProps) {
    const { stateValue } = this.state;
    const { value } = nextProps;

    if ((value !== stateValue) && stateValue.length === 0) {
      this.setState({stateValue: value});
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  render() {
    const {label, id, value, nbrows} = this.props;
    const { stateValue } = this.state;

    return (
      <div className="form-group">
        <label
          htmlFor={id}
          className="control-label">
          {label}
          </label>
        <div>
          <textarea
            className="form-control"
            rows="3"
            id={id}
            // value={stateValue}
            defaultValue={stateValue}
            onChange={this.handlesOnChange}
          />
        </div>
      </div>
    );
  }

  handlesOnChange(event) {
    event.preventDefault();
    // const { onChange } = this.props;
    this.setState({stateValue: event.target.value});
    // perf hack:
    this.setTimerToApplyStore(event.target.value);
  }

  setTimerToApplyStore(value) {
    const { onChange } = this.props;

    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }

    this.timer = setTimeout(
      () => onChange(value),
      200
    );
  }
}

TextAreaInput.propTypes = {
  label:    PropTypes.string.isRequired,
  id:       PropTypes.string.isRequired,
  value:    PropTypes.string.isRequired,
  nbrows:   PropTypes.number,
  onChange: PropTypes.func.isRequired
};

TextAreaInput.defaultProps = {
  nbrows: 3
};

export default TextAreaInput;
