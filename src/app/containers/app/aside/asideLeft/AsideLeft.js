/* eslint no-console: 0 */
import React, {
PropTypes
}                     from 'react';
import cx             from 'classnames';
import UserPanel      from './userPanel/UserPanel';
import { Horloge }    from '../../../../components';
import Menu           from './menu/Menu';


const AsideLeft = ({
  isFetching,
  currentView,
  connectionStatus,
  userIsConnected,
  username,
  helloWord,
  userPicture,
  showPicture,
  isAnimated,
  isCollapsed,
  navGeneralTitle,
  navGeneral,
  navGestBenTitle,
  navGestBen,
  navActivTitle,
  navActiv,
  navMailBoxesTitle,
  navMailBoxes }) => {
  return (
    <aside
      className={cx({
        'no-print': true,
        'left-side': true,
        'aside-left--fixed': true,
        'sidebar-offcanvas': true,
        'sidebar-animated': isAnimated,
        'collapse-left':    isCollapsed
      })}
      // add overflow to left sidebar:
      style={{
        height: '100%',
        overflow: 'scroll',
        position: 'fixed'
      }}
      >
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
          headerTitle={navGeneralTitle}
          activeView={currentView}
          views={navGeneral}
        />
        <Menu
          headerTitle={navGestBenTitle}
          activeView={currentView}
          views={navGestBen}
        />
        <Menu
          headerTitle={navActivTitle}
          activeView={currentView}
          views={navActiv}
        />
        <Menu
          headerTitle={navMailBoxesTitle}
          activeView={currentView}
          views={navMailBoxes}
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
  helloWord: PropTypes.string,
  // navigation link for group "general":
  navGeneralTitle: PropTypes.string.isRequired,
  navGeneral: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      linkTo: PropTypes.string.isRequired,
      faIconName: PropTypes.string
    })
  ).isRequired,
  // navigation link for group "gest. ben":
  navGestBenTitle: PropTypes.string.isRequired,
  navGestBen: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      linkTo: PropTypes.string.isRequired,
      faIconName: PropTypes.string
    })
  ).isRequired,
  // navigation link for group "Activ":
  navActivTitle: PropTypes.string.isRequired,
  navActiv: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      linkTo: PropTypes.string.isRequired,
      faIconName: PropTypes.string
    })
  ).isRequired,
  // navigation link for group "mailboxes":
  navMailBoxesTitle: PropTypes.string.isRequired,
  navMailBoxes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      linkTo: PropTypes.string.isRequired,
      faIconName: PropTypes.string
    })
  ).isRequired
};

AsideLeft.defaultProps = {
  isAnimated: false,
  isCollapsed: false,
  isFetching: true
};

export default AsideLeft;
