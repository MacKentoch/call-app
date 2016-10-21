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
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillReceiveProps(nextProps) {
    const { stateValue } = this.state;
    const { value } = nextProps;

    if (value !== stateValue) {
      this.setState({stateValue: value});
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
            value={stateValue}
            onChange={this.handlesOnChange}>
          </textarea>
        </div>
      </div>
    );
  }

  handlesOnChange(event) {
    event.preventDefault();
    const { onChange } = this.props;

    this.setState({stateValue: event.target.value});
    onChange(event.target.value);
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
