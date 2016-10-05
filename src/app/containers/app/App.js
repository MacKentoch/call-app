import React, {
  PropTypes,
  Component
}                             from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actions           from '../../redux/actions';
import Header                 from './header/Header.js';
import {
  AsideLeft,
  AsideRight
}                             from './aside';
import {
  Modals
}                             from '../../views';
import {
  RechercheBenefModalConnected as RechercheBenefModal,
  CreateNewDossierBenefModalConnected as CreateNewDossierBenefModal,
  SelectBenefModalConnected as SelectBenefModal
}                             from '../../containers';
import { appConfig }          from '../../config';
import { BackToTop }          from '../../components';
import { navigation }         from '../../models';
import NotificationSystem     from 'react-notification-system';


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      navigationGeneral:    {...navigation.sideNavMenu.find(item=>item.groupe === 'General')},
      navigationGestBen:    {...navigation.sideNavMenu.find(item=>item.groupe === 'GestBen')},
      navigationActivities: {...navigation.sideNavMenu.find(item=>item.groupe === 'Activities')},
      navigationMailBoxes:  {...navigation.sideNavMenu.find(item=>item.groupe === 'MailBoxes')},
      appName:              appConfig.APP_NAME,
      connectionStatus:     appConfig.CONNECTION_STATUS,
      helloWord:            appConfig.HELLO_WORD
    };
    this.handlesMenuButtonClick = this.handlesMenuButtonClick.bind(this);
    this.handlesOnSearchButtonClick = this.handlesOnSearchButtonClick.bind(this);
    this.handlesHideRechercheBenefModal = this.handlesHideRechercheBenefModal.bind(this);
    this.handlesHideCreateDossierBenefModal = this.handlesHideCreateDossierBenefModal.bind(this);
    this.handlesHideSelectBenefModal = this.handlesHideSelectBenefModal.bind(this);
  }

  componentDidMount() {
    const { actions: { fetchUserInfoDataIfNeeded, initSideMenu, fetchUserBoitesMailsDataIfNeeded } } = this.props;
    fetchUserInfoDataIfNeeded();
    fetchUserBoitesMailsDataIfNeeded();
    initSideMenu(); // sideMenu collapse or not from localStorage value (default is opened)
  }

  componentWillReceiveProps(nextProps) {
    this.updateNavigationStateIfNeeded(nextProps);

    // notifications detection:
    const { notificationTime } = this.props;
    if (nextProps.notificationTime !== notificationTime) {
      // new notification added:
      const notification = {
        message: nextProps.notificationMessage,
        level: nextProps.notificationLevel
      };
      this.handlesAddNotification(notification);
    }
  }

  render() {
    const { appName, connectionStatus, helloWord } = this.state;
    const { rechercheBenefModalOpened, selectBenefModalOpened, createDossierBenefModalOpened } = this.props;
    const { userInfos, userInfoFetching, userIsConnected, currentView, children, sideMenuIsCollapsed } = this.props;
    const { navigationGeneral, navigationGestBen, navigationActivities, navigationMailBoxes } = this.state;

    const userFullName = `${userInfos.firstname} ${userInfos.lastname.toUpperCase()}`;

    return (
      <div>
        <Header
          id="topHeader"
          appName={appName}
          userLogin={userInfos.login}
          userFirstname={userInfos.firstname}
          userLastname={userInfos.lastname}
          userPicture={userInfos.picture}
          showPicture={userInfos.showPicture}
          currentView={currentView}
          toggleSideMenu={this.handlesMenuButtonClick}
          onSearchClick={this.handlesOnSearchButtonClick}
        />
        <div
          id="appWrapper"
          className="wrapper row-offcanvas row-offcanvas-left">
          <AsideLeft
            isAnimated={true}
            currentView={currentView}
            isCollapsed={sideMenuIsCollapsed}
            helloWord={helloWord}
            connectionStatus={connectionStatus}
            userIsConnected={userIsConnected}
            username={userFullName}
            userPicture={userInfos.picture}
            showPicture={userInfos.showPicture}
            isFetching={userInfoFetching}
            // navigation general
            navGeneralTitle={'General'}
            navGeneral={navigationGeneral.menus}
            // navigation GestBen
            navGestBenTitle={'Gest Ben'}
            navGestBen={navigationGestBen.menus}
            onSearchClick={this.handlesOnSearchButtonClick}
            // navigation Activities
            navActivTitle={'Actvities'}
            navActiv={navigationActivities.menus}
            // navigation mailboxes
            navMailBoxesTitle={'Mailboxes'}
            navMailBoxes={navigationMailBoxes.menus}
          />
          <AsideRight
            isAnimated={true}
            isExpanded={sideMenuIsCollapsed}>
            <div id="mainContainer">
              { children }
              <BackToTop
                minScrollY={40}
                scrollTo={'appWrapper'}
              />
            </div>
          </AsideRight>
        </div>
        {/* modals cannot be placed anywhere (avoid backdrop or modal placement issues) so all grouped in same component and outside .wrapper*/}
        <Modals />
        {/* modal recherche benef avant gestion benef */}
        <RechercheBenefModal
          showModal={rechercheBenefModalOpened}
          title={'Recherche de bénéficiaire'}
          onClose={this.handlesHideRechercheBenefModal}
        />
        {/* modal select benef avant gestion contact */}
        <SelectBenefModal
          showModal={selectBenefModalOpened}
          onClose={this.handlesHideSelectBenefModal}
        />
        {/* modal add dossier to benef */}
        <CreateNewDossierBenefModal
          showModal={createDossierBenefModalOpened}
          title={'Ajout d\'un nouveau dossier'}
          onClose={this.handlesHideCreateDossierBenefModal}
        />
        {/* Notifications */}
        <NotificationSystem
          ref={c => {
            this.notificationSystem = c;
          }}
        />
      </div>
    );
  }

  handlesAddNotification(notification) {
    if (!notification) {
      return;
    }
    if (!notification.message) {
      return;
    }
    if(!notification.level) {
      return;
    }

    this.notificationSystem.addNotification({
      ...notification
    });
  }

  handlesHideRechercheBenefModal() {
    const { actions: {hideRechercheBenefModal} } = this.props;
    hideRechercheBenefModal();
  }

  handlesHideSelectBenefModal() {
    const { actions: {hideSelectBenefModal} } = this.props;
    hideSelectBenefModal();
  }

  handlesHideCreateDossierBenefModal() {
    const { actions: {hideNewBenefDossierModal} } = this.props;
    hideNewBenefDossierModal();
  }

  handlesMenuButtonClick(event) {
    event.preventDefault();
    const {location} = this.props;
    const { actions: { toggleSideMenu } } = this.props;
    toggleSideMenu();
    // refresh stats (to get responsive charts) if current view is Home
    if (location.pathname === '/') {
      const { actions: { fetchFichesTraiteeDataIfNeeded, fetchFichesParCanalDataIfNeeded, fetchPrincipauxMotifsDataIfNeeded } } = this.props;
      fetchFichesTraiteeDataIfNeeded();
      fetchFichesParCanalDataIfNeeded();
      fetchPrincipauxMotifsDataIfNeeded();
    }
  }

  handlesOnSearchButtonClick(event) {
    event.preventDefault();
    const { actions: { showRechercheBenefModal }, rechercheBenefModalOpened } = this.props;
    if (!rechercheBenefModalOpened) {
      showRechercheBenefModal();
    }
  }

  updateNavigationStateIfNeeded(nextProps) {
    // sidemenu navigation mailboxes depends user mailboxes rights: will update mailboxes list
    const { userBoitesMailsLastUpdateTime } = this.props;

    if (userBoitesMailsLastUpdateTime !== nextProps.userBoitesMailsLastUpdateTime &&
        nextProps.userBoitesMails.length > 0) {
      // not same time, refresh navigation since user mailboxes may have changed (administration update?)
      const updatedNavigationMailBoxes = {...this.state.navigationMailBoxes};
      // replace previous mailbox list
      updatedNavigationMailBoxes.menus = [...nextProps.userBoitesMails];

      this.setState({navigationMailBoxes: {...updatedNavigationMailBoxes}});
    }
  }
}

App.propTypes = {
  // redux
  dispatch:   PropTypes.func,
  // router
  children:   PropTypes.node.isRequired,
  history:    PropTypes.object,
  location:   PropTypes.object,
  // sidemenu
  sideMenuIsCollapsed: PropTypes.bool,
  // user
  userInfos: PropTypes.shape({
    login: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    picture: PropTypes.string,
    showPicture: PropTypes.bool
  }),
  userInfoFetching: PropTypes.bool,
  userIsConnected: PropTypes.bool,
  // user mailboxes (extends navigation)
  userBoitesMails: PropTypes.array,
  userBoitesMailsLastUpdateTime: PropTypes.string,
  // currentView
  currentView: PropTypes.string,
  // modal recherche benef:
  rechercheBenefModalOpened: PropTypes.bool.isRequired,
  // modal add dossier to benef:
  createDossierBenefModalOpened: PropTypes.bool.isRequired,
  // notifications
  notificationMessage: PropTypes.string.isRequired,
  notificationLevel: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
  notificationTime: PropTypes.string.isRequired,
  // actions
  actions: PropTypes.shape({
    // view
    enterHome: PropTypes.func,
    leaveHome: PropTypes.func,
    // user
    fetchUserInfoDataIfNeeded: PropTypes.func,
    // stats
    fetchFichesTraiteeDataIfNeeded: PropTypes.func,
    fetchFichesParCanalDataIfNeeded: PropTypes.func,
    fetchPrincipauxMotifsDataIfNeeded: PropTypes.func,
    // sideMenu
    openSideMenu:   PropTypes.func,
    closeSideMenu:  PropTypes.func,
    toggleSideMenu: PropTypes.func,
    initSideMenu:   PropTypes.func,
    // modals recherche benef (befre benef edit/create):
    showRechercheBenefModal: PropTypes.func.isRequired,
    hideRechercheBenefModal: PropTypes.func.isRequired,
    // modals select benef (before contact edit / create):
    showSelectBenefModal: PropTypes.func.isRequired,
    hideSelectBenefModal: PropTypes.func.isRequired,
    // modal create dossier benef:
    showNewBenefDossierModal: PropTypes.func.isRequired, // return promise with notification data
    hideNewBenefDossierModal: PropTypes.func.isRequired,
    // notifications
    addNotificationMessage: PropTypes.func
  })
};

const mapStateToProps = (state) => {
  return {
    // currentView
    currentView:          state.views.currentView,
    // sideMenu
    sideMenuIsCollapsed:  state.sideMenu.isCollapsed,
    // user
    userInfos:            state.userInfos.data,
    userInfoFetching:     state.userInfos.isFetching,
    userIsConnected:      state.userInfos.isConnected,
    // user mailboxes (extends navigation)
    userBoitesMails:      state.userBoitesMails.data,
    userBoitesMailsLastUpdateTime: state.userBoitesMails.time,
    // modal recherche benef (before edit/create benef):
    rechercheBenefModalOpened: state.rechercheBenefModal.isOpened,
    // modal select benef (before edit/create contact):
    selectBenefModalOpened: state.selectBenefModal.isOpened,
    // modal add dossier to benef:
    createDossierBenefModalOpened: state.createNewDossierBenefModal.isOpened,
    // notifications
    notificationMessage: state.notifications.message,
    notificationLevel: state.notifications.level,
    notificationTime: state.notifications.time
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {...actions},
      dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
