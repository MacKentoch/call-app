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
// import SearchForm     from './searchForm/SearchForm'
// const homeView      = appConfig.views.home.viewName;
// const rechercheView = appConfig.views.recherche.viewName;

const views = [
  {
    name: 'Accueil',
    linkTo: '/',
    faIconName: 'fa-home'
  },
  {
    name: 'Recherche',
    linkTo: '/recherche',
    faIconName: 'fa-search'
  }
];

const viewsBenef = [
  {
    name: 'Rechercher un bénéficaire',
    linkTo: '/',
    faIconName: 'fa-search'
  },
  {
    name: 'Mise à jour de bénéficiaire',
    linkTo: '/',
    faIconName: 'fa-edit'
  }
];

const viewsActivite = [
  {
    name: 'fiches de mes groupes',
    linkTo: '/',
    faIconName: 'fa-file-o'
  }
];

const viewsEmails = [
  {
    name: 'Service.CAVDI',
    linkTo: '/',
    faIconName: 'fa-file-o',
    itemCount: 26
  },
  {
    name: 'Retraite.SUEZ',
    linkTo: '/',
    faIconName: 'fa-file-o',
    itemCount: 2
  }
];

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
        {/* <SearchForm
          onSearchSubmit={(value) => console.log('searching: ', value)}
        /> */}
        <Menu
          headerTitle={'Général'}
          activeView={currentView}
          views={views}
        />
        <Menu
          headerTitle={'Gestion des bénéficiaires'}
          activeView={currentView}
          views={viewsBenef}
        />
        <Menu
          headerTitle={'Activités'}
          activeView={currentView}
          views={viewsActivite}
        />
        <Menu
          headerTitle={'Emails'}
          activeView={currentView}
          views={viewsEmails}
        />
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
