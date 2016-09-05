import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import cx             from 'classnames';

const telephoneRegex = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;


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
            'has-error': valid
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
    this.setState({ valid: telephoneRegex.test(event.target.value) });
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
