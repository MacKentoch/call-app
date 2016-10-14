import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {
  DropdownButton,
  MenuItem
}                     from 'react-bootstrap';


class FicheContactGroupeDestinataireDropDown extends Component {
  constructor(props) {
    super(props);

    this.handlesOnChange = this.handlesOnChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { label, id, value, groupDestinataires } = this.props;
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
            title={ this.valueIsGroupeDestinataire(value) ? value.libelle : groupDestinataires[0].libelle }>
            {
              groupDestinataires.map(
                ({id, libelle}, idx) => {
                  return (
                    <MenuItem
                      key={idx}
                      eventKey={id}>
                      {libelle}
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
    const { onChange, groupDestinataires } = this.props;

    onChange(groupDestinataires[key]);
  }

  valueIsGroupeDestinataire(value) {
    const { groupDestinataires } = this.props;
    if (value) {
      const index = groupDestinataires.findIndex(
        valeur => {
          if (valeur &&
              Object.prototype.hasOwnProperty.call(valeur, 'id') &&
              Object.prototype.hasOwnProperty.call(valeur, 'libelle')) {
            return valeur.id === value.id;
          } else {
            return false;
          }
        }
      );
      return index > -1 ? true : false;
    }
    return false;
  }
}

FicheContactGroupeDestinataireDropDown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  // list statut ref
  groupDestinataires: PropTypes.arrayOf(PropTypes.Object).isRequired
};

export default FicheContactGroupeDestinataireDropDown;
