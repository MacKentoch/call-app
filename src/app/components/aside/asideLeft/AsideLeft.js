/* eslint no-console: 0 */
import React, {
  PropTypes
}                     from 'react';
import { appConfig }  from '../../../config';
import classNames     from 'classnames';
import { Link }       from 'react-router';
import UserPanel      from './userPanel/UserPanel';
import SearchForm     from './searchForm/SearchForm';

const AsideLeft = (props) => {
  const sideMenuClasses = classNames({
    'left-side': true,
    'aside-left--fixed': true,
    'sidebar-offcanvas': true,
    'sidebar-animated': props.isAnimated,
    'collapse-left':    props.isCollapsed
  });
  const { connectionStatus, userIsConnected, username, helloWord, userPicture, showPicture } = props;
  const homeView      = appConfig.views.home.viewName;
  const rechercheView = appConfig.views.recherche.viewName;

  return (
    <aside className={sideMenuClasses}>
        <section className="sidebar">
          <UserPanel
            hello={helloWord}
            username={username}
            connectionStatus={connectionStatus}
            online={userIsConnected}
            userPicture={userPicture}
            showUserPicture={showPicture}
          />

          <SearchForm
            onSearchSubmit={(value) => console.log('searching: ', value)}
          />
          <ul className="sidebar-menu sidebar-menu__marginTop">

            {/* Menu accueil */}
            <li className={props.currentView === homeView ? 'active' : '' }>
              <Link
                to="/">
                <i className="fa fa-home"></i>
                <span>
                  Accueil
                </span>
              </Link>
            </li>

            {/* Menu recherche détaillées */}
            <li className={props.currentView === rechercheView ? 'active' : '' }>
              <Link to="/recherche">
                <i className="fa fa-search"></i>
                <span>
                  Recherche
                </span>
              </Link>
            </li>

          </ul>

        </section>

    </aside>

  );
};

AsideLeft.propTypes = {
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
  isCollapsed: false
};

export default AsideLeft;
