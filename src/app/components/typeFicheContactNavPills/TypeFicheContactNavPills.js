import React, {
  PropTypes
}                     from 'react';
import NavItem        from './navItem/NavItem';

const TypeFicheContactNavPills = ({ onClick, selectedValue }) => {
  return (
    <div className="col-xs-12">
      <div className="center-block">
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
      </div>
    </div>
  );
};

TypeFicheContactNavPills.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default TypeFicheContactNavPills;
