import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class TextAreaInput extends Component {
  constructor(props) {
    super(props);
    this.handlesOnChange = this.handlesOnChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {label, id, value, nbrows} = this.props;
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
