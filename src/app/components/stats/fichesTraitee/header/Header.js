import React, { PropTypes } from 'react';

const Header = ({headerText, onRefreshClick, dateMaj}) => {
  return (
    <header className="panel-heading">
      {headerText}
      <div className="pull-right ficheTraitee__last-maj">
        <a
          href="#"
          onClick={onRefreshClick}>
          <small>
            <i
              className="fa fa-refresh"
              aria-hidden="true">
            </i>
          </small>
        </a>
        <small>
          &nbsp;
          { dateMaj }
        </small>
      </div>
    </header>
  );
};

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
  onRefreshClick: PropTypes.func.isRequired,
  dateMaj: PropTypes.string.isRequired
};

export default Header;
