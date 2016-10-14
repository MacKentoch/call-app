import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {
  DropdownButton,
  MenuItem
}                     from 'react-bootstrap';


class StatutBenefFicheContactDropDown extends Component {
  constructor(props) {
    super(props);

    this.handlesOnChange = this.handlesOnChange.bind(this);
    this.valueIsStatutBenef = this.valueIsStatutBenef.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { label, id, value, listStatutBenefFicheContact } = this.props;
    return (
      <div className="form-group">
        <label
          className="control-label"
          htmlFor={id}>
          {label}
        </label>
        <div>
          <DropdownButton
            id={id}
            onSelect={this.handlesOnChange}
            bsSize="sm"
            block
            bsStyle={'block'}
            title={ this.valueIsStatutBenef(value) ? value : ' --- ' }>
            {
              listStatutBenefFicheContact.map(
                (statut, idx) => {
                  return (
                    <MenuItem
                      key={idx}
                      eventKey={idx}>
                      {statut}
                    </MenuItem>
                  );
                }
              )
            }
          </DropdownButton>
        </div>
      </div>
    );
  }

  handlesOnChange(event, key) {
    event.preventDefault();
    const { onChange, listStatutBenefFicheContact } = this.props;
    onChange(listStatutBenefFicheContact[key]);
  }

  valueIsStatutBenef(value) {
    const { listStatutBenefFicheContact } = this.props;
    if (parseInt(value, 10) >= 0) {
      const index = listStatutBenefFicheContact.findIndex(
        valeur => value === valeur
      );
      return index > -1 ? true : false;
    }
    return false;
  }
}

StatutBenefFicheContactDropDown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  // list statut ref
  listStatutBenefFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default StatutBenefFicheContactDropDown;
