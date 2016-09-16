import React, {
  Component,
  PropTypes
}                     from 'react';
import DatePicker     from 'react-datepicker';
import shallowCompare from 'react-addons-shallow-compare';

class EditDate extends Component {
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
      <div className="form-group remove-margin-bottom">
        {
          showLabel &&
          <label>
            {labelText}
          </label>
        }
        <DatePicker
          dateFormat="DD/MM/YYYY"
          selected={value}
          onChange={this.handlesOnValueChanged}
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
      </div>
    );
  }

  handlesOnValueChanged(date) {
    const { onValueChanged } = this.props;
    onValueChanged(date);
  }
}

EditDate.propTypes = {
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

export default EditDate;
