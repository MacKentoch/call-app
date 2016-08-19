import React, { PropTypes } from 'react';

const MenuHeader = ({title, onClick}) => {
  return (
    <ul
      className="list-inline sidebar-menu__group-container"
      onClick={onClick}>
      <li style={{width: '100%', backgroundColor: '#4A4A4A'}}>
        <a
          className="btn"
          style={{width: '100%', paddinLeft: '0px !important'}}>
          <span className="pull-left sidebar-menu__group-title">
            {title}
          </span>
          <i
            className="fa fa-angle-up fa-1x pull-right"
            aria-hidden="true">
          </i>
        </a>
      </li>
    </ul>
  );
};

MenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MenuHeader;
