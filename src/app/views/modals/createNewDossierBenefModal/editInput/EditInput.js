import React, {
  Component,
  PropTypes
}                         from 'react';
import shallowCompare     from 'react-addons-shallow-compare';

class EditInput extends Component {
  constructor(props) {
    super(props);

    this.handlesOnValueChanged = this.handlesOnValueChanged.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      showLabel,
      labelText,
      showHelpBlock,
      helpBlockText
    } = this.props;

    const { value } = this.props;

    return (
      <div
        className="form-group remove-margin-bottom">
        {
          showLabel &&
          <label htmlFor="labelText">
            {labelText}
          </label>
        }
        <input
          type="text"
          value={value}
          onChange={this.handlesOnValueChanged}
          placeholder={`${labelText}...`}
          className="form-control"
        />
        {
          showHelpBlock &&
          <p
            className="help-block remove-margin-bottom"
            style={{ fontSize: '11px'}}>
            {helpBlockText}
          </p>
        }
        <br />
      </div>

      
    );
  }

  handlesOnValueChanged(event) {
    const value = event.target.value.trim();
    const { onValueChanged } = this.props;
    onValueChanged(value);
  }
}

EditInput.propTypes = {
  // label:
  showLabel: PropTypes.bool,
  labelText: PropTypes.string,
  // value:
  value: PropTypes.string,
  onValueChanged: PropTypes.func,
  // help block text:
  showHelpBlock: PropTypes.bool,
  helpBlockText: PropTypes.string
};

EditInput.defaultProps = {
  // label:
  showLabel: true,
  labelText: 'val1',
  // help block text:
  showHelpBlock: true,
  helpBlockText: 'val2'
};

export default EditInput;
