import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import NavItem        from './navItem/NavItem';


const TypeFicheContactNavPills = ({ onClick }) => {
  return (
    <ul className="nav nav-pills">
      <NavItem
        itemId={}
        itemText={}
        isSelected={}
        onClick={onClick}
      />
      <NavItem
        itemId={}
        itemText={}
        isSelected={}
        onClick={onClick}
      />
    </ul>
  );
}

TypeFicheContactNavPills.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default TypeFicheContactNavPills;
