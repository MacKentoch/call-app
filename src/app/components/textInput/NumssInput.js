import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import cx             from 'classnames';

const numss15regex = /[12][ \.\-]?[0-9]{2}[ \.\-]?(0[1-9]|[1][0-2])[ \.\-]?([0-9]{2}|2A|2B)[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{3}[ \.\-]?[0-9]{2}/;


class NumssInput extends Component {
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
    // test numss pattern:
    this.setState({ valid: numss15regex.test(event.target.value) });
    onChange(event.target.value);
  }
}

NumssInput.propTypes = {
  label:    PropTypes.string.isRequired,
  id:       PropTypes.string.isRequired,
  value:    PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default NumssInput;
