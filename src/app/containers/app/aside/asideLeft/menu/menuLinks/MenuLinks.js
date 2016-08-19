import React, { PropTypes } from 'react';
import ViewLink from './viewLink/ViewLink';

const MenuLinks = ({ activeView, views }) => {
  return (
    <ul className="sidebar-menu sidebar-menu__marginTop">
      {
        views.map(
          (viewName, idx) => {
            return (
              <ViewLink
                key={idx}
                isActive={activeView === viewName}
                viewName={viewName}
                faIconName={''}
              />
            );
          }
        )
      }
    </ul>
  );
};

MenuLinks.propTypes = {
  activeView: PropTypes.string.isRequired,
  views: PropTypes.arrayOf(PropTypes.string)
};

export default MenuLinks;
