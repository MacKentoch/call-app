/* eslint no-console: 0 */
import React, {
PropTypes
}                     from 'react';
import { appConfig }  from '../../../../config';
import cx             from 'classnames';
import { Link }       from 'react-router';
import UserPanel      from './userPanel/UserPanel';
import { Horloge }    from '../../../../components';

const homeView      = appConfig.views.home.viewName;
const rechercheView = appConfig.views.recherche.viewName;

const AsideLeft = ({ isFetching, currentView, connectionStatus, userIsConnected, username, helloWord, userPicture, showPicture, isAnimated, isCollapsed }) => {
  return (
    <aside
      className={cx({
        'left-side': true,
        'aside-left--fixed': true,
        'sidebar-offcanvas': true,
        'sidebar-animated': isAnimated,
        'collapse-left':    isCollapsed
      })}>
      <section className="sidebar">
        <UserPanel
          hello={helloWord}
          username={username}
          connectionStatus={connectionStatus}
          online={userIsConnected}
          userPicture={userPicture}
          showUserPicture={showPicture}
          isFetching={isFetching}
        />
        <Horloge />
        {/*
        <SearchForm
          onSearchSubmit={(value) => console.log('searching: ', value)}
        />
        */}
        <ul className="sidebar-menu sidebar-menu__marginTop">
          {/* Menu accueil */}
          <li className={cx({'active': currentView === homeView})}>
            <Link
              to="/">
              <i className="fa fa-home"></i>
              <span>
                {homeView}
              </span>
            </Link>
          </li>
          {/* Menu recherche détaillées */}
          <li className={cx({'active': currentView === rechercheView})}>
            <Link to="/recherche">
              <i className="fa fa-search"></i>
              <span>
                {rechercheView}
              </span>
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  );
};

AsideLeft.propTypes = {
  isFetching: PropTypes.bool,
  isAnimated: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  currentView: PropTypes.string,
  connectionStatus: PropTypes.shape({
    online: PropTypes.string,
    disconnected: PropTypes.string
  }),
  userIsConnected: PropTypes.bool,
  username: PropTypes.string,
  userPicture: PropTypes.string,
  showPicture: PropTypes.bool,
  helloWord: PropTypes.string
};

AsideLeft.defaultProps = {
  isAnimated: false,
  isCollapsed: false,
  isFetching: true
};

export default AsideLeft;
