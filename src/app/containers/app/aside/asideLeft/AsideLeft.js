/* eslint no-console: 0 */
import React, {
PropTypes
}                     from 'react';
// import { appConfig }  from '../../../../config';
import cx             from 'classnames';
// import { Link }       from 'react-router';
import UserPanel      from './userPanel/UserPanel';
import { Horloge }    from '../../../../components';
import Menu           from './menu/Menu';
import SearchForm     from './searchForm/SearchForm'
;// const homeView      = appConfig.views.home.viewName;
// const rechercheView = appConfig.views.recherche.viewName;

const AsideLeft = ({ isFetching, currentView, connectionStatus, userIsConnected, username, helloWord, userPicture, showPicture, isAnimated, isCollapsed }) => {
  return (
    <aside
      className={cx({
        'no-print': true,
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

        <SearchForm
          onSearchSubmit={(value) => console.log('searching: ', value)}
        />

        <Menu
          headerTitle={'Général'}
        />


        {/* <div>
          <ul className="list-inline sidebar-menu__group-container">
            <li style={{width: '100%', backgroundColor: '#4A4A4A'}}>
              <a
                className="btn"
                style={{width: '100%', paddinLeft: '0px !important'}}>
                <span className="pull-left sidebar-menu__group-title">
                  Général
                </span>
                <i
                  className="fa fa-angle-up fa-1x pull-right"
                  aria-hidden="true">
                </i>
              </a>
            </li>
          </ul>

          <ul className="sidebar-menu sidebar-menu__marginTop">

            <li
              className={cx({'active': currentView === homeView})}
              style={{paddingLeft: '10px'}}>
              <Link
                to="/">
                <i className="fa fa-home"></i>
                <span>
                  {homeView}
                </span>
              </Link>
            </li>

            <li
              className={cx({'active': currentView === rechercheView})}
              style={{paddingLeft: '10px'}}>
              <Link to="/recherche">
                <i className="fa fa-search"></i>
                <span>
                  {rechercheView}
                </span>
              </Link>
            </li>
          </ul>
        </div> */}


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
