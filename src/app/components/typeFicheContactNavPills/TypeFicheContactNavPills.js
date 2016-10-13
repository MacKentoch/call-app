import React, {
  PropTypes
}                     from 'react';
import NavItem        from './navItem/NavItem';

const TypeFicheContactNavPills = ({ onClick, selectedValue }) => {
  return (
    <ul className="nav nav-pills">
      <NavItem
        itemId={'information'}
        itemText={'Information'}
        isSelected={selectedValue === 'information'}
        onClick={onClick}
      />
      <NavItem
        itemId={'reclamation'}
        itemText={'Réclamation'}
        isSelected={selectedValue === 'reclamation'}
        onClick={onClick}
      />
    </ul>
  );
};

TypeFicheContactNavPills.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default TypeFicheContactNavPills;
