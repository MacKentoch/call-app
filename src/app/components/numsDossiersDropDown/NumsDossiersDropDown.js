import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import {
  DropdownButton,
  MenuItem
}                     from 'react-bootstrap';


class NumsDossiersDropDown extends Component {
  constructor(props) {
    super(props);

    this.handlesOnChange = this.handlesOnChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { label, id, value, listNumDossierFicheContact } = this.props;
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
            title={ this.valueIsNumDossier(value) ? value : listNumDossierFicheContact[0] }>
            {
              listNumDossierFicheContact.map(
                (numDossier, idx) => {
                  console.log('listNumDossierFicheContact: ', listNumDossierFicheContact);
                  return (
                    <MenuItem
                      key={idx}
                      eventKey={idx}>
                      {numDossier}
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
    const { onChange, listNumDossierFicheContact } = this.props;

    onChange(listNumDossierFicheContact[key]);
  }

  valueIsNumDossier(value) {
    const { listNumDossierFicheContact } = this.props;
    if (value) {
      const index = listNumDossierFicheContact.findIndex(
        valeur => value === valeur
      );
      return index > -1 ? true : false;
    }
    return false;
  }
}

NumsDossiersDropDown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  // list statut ref
  listNumDossierFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default NumsDossiersDropDown;
