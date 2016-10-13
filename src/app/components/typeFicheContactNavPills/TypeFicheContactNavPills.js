import React, {
  PropTypes
}                     from 'react';
import NavItem        from './navItem/NavItem';

const TypeFicheContactNavPills = ({ onClick, listTypeFicheContact, selectedValue }) => {
  return (
    <div
      className="form-group"
      style={{marginTop: '5px', marginBottom: '5px'}}>
      <label
        className="col-xs-1 control-label"
        style={{paddingTop: '7px'}}>
        Type :
      </label>
      <div className="col-xs-11">
        <ul className="nav nav-pills">
        {
          listTypeFicheContact.map(
            (typeFicheContact, idx) => {
              return (
                <NavItem
                  itemId={idx}
                  itemText={typeFicheContact}
                  isSelected={selectedValue === idx}
                  onClick={onClick}
                />
              );
            }
          )
        }
        </ul>
      </div>
    </div>
  );
};

TypeFicheContactNavPills.propTypes = {
  onClick: PropTypes.func.isRequired,
  listTypeFicheContact: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default TypeFicheContactNavPills;
