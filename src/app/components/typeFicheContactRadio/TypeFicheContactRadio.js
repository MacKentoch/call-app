import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {
  RadioGroup,
  Radio
}                     from 'react-radio-group';


class TypeFicheContactRadio extends Component {
  constructor(props) {
    super(props);

    this.handlesOnChange = this.handlesOnChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { selectedValue } = this.props;
    return (
      <RadioGroup
        name="typeFicheContact"
        selectedValue={selectedValue}
        onChange={this.handlesOnChange}>
        <Radio value="information" />Information
        <Radio value="reclamation" />Réclamation
      </RadioGroup>
    );
  }

  handlesOnChange(value) {
    event.preventDefault();
    const { onChange } = this.props;
    onChange(value);
  }
}

TypeFicheContactRadio.propTypes = {
  onChange: PropTypes.func.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default TypeFicheContactRadio;
