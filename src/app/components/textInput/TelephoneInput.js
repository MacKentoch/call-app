import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import cx             from 'classnames';

const telephoneRegex = /^(\+33|0033|0)(6|7)[0-9]{8}$/g;


class TelephoneInput extends Component {
  constructor(props) {
    super(props);
    this.state = { valid: true };
    this.handlesOnChange = this.handlesOnChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {label, id, value} = this.props;
    const {valid} = this.state;

    return (
      <div
        className={
          cx({
            'form-group': true,
            'has-error': !valid
          })
        }>
        <label
          className="control-label"
          htmlFor={id}>
          {label}
        </label>
        <div>
          <input
            className="form-control"
            id={id}
            type="text"
            value={value}
            onChange={this.handlesOnChange}
          />
        </div>
      </div>
    );
  }

  handlesOnChange(event) {
    event.preventDefault();
    const { onChange } = this.props;
    // test telephone pattern:
    const isValid = telephoneRegex.test(event.target.value.trim());
    this.setState({ valid: isValid });

    onChange(event.target.value);
  }
}

TelephoneInput.propTypes = {
  label:    PropTypes.string.isRequired,
  id:       PropTypes.string.isRequired,
  value:    PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TelephoneInput;
