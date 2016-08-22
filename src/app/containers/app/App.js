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
  Modals,
  UploadMailAttachment
}                             from '../../views';
import { appConfig }          from '../../config';
import { BackToTop }          from '../../components';
import { navigation }         from '../../models';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      navigation:       [...navigation.sideNavMenu],
      appName:          appConfig.APP_NAME,
      connectionStatus: appConfig.CONNECTION_STATUS,
      helloWord:        appConfig.HELLO_WORD
    };
    console.log('init navigation: ', this.state.navigation);
    this.handlesMenuButtonClick = this.handlesMenuButtonClick.bind(this);
  }

  componentDidMount() {
    const { actions: { fetchUserInfoDataIfNeeded, initSideMenu, fetchUserBoitesMailsDataIfNeeded } } = this.props;
    fetchUserInfoDataIfNeeded();
    fetchUserBoitesMailsDataIfNeeded();
    initSideMenu(); // sideMenu collapse or not from localStorage value (default is opened)
  }

  componentWillReceiveProps(nextProps) {
    this.updateNavigationStateIfNeeded(nextProps);
  }

  render() {
    const { appName, connectionStatus, helloWord } = this.state;
    const { uploadMailAttachmentsModalOpened } = this.props;
    const { userInfos, userInfoFetching, userIsConnected, currentView, children, sideMenuIsCollapsed } = this.props;
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
        {/* modal upload pieces jointes mails */}
        <UploadMailAttachment
          showModal={uploadMailAttachmentsModalOpened}
          title={'Ajouter des pièces jointes'}
          onAttachmentsChange={(evt)=>console.log('UploadMailAttachment onAttachmentsChange event to dev')}
          onClose={(evt)=>console.log('UploadMailAttachment onClose event to dev')}
        />
      </div>
    );
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

  updateNavigationStateIfNeeded(nextProps) {
    const { userBoitesMailsLastUpdateTime } = this.props;

    if (userBoitesMailsLastUpdateTime !== nextProps.userBoitesMailsLastUpdateTime &&
        nextProps.userBoitesMails.length > 0) {
      // not same time, refresh navigation since user mailboxes may have changed (administration update?)
      const navMailBoxesGroupIndex = this.state.navigation.findIndex(
        navItem => navItem.groupe === 'MailBoxes'
      );
      if (navMailBoxesGroupIndex !== -1) {
        const updatedNavigation = [...this.state.navigation];
        // replace previous mailbox list
        updatedNavigation[navMailBoxesGroupIndex].menus = [...nextProps.userBoitesMails];

        this.setState({navigation: [...updatedNavigation]});
      }
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
  userBoitesMails: PropTypes.arrayOf(PropTypes.Object),
  userBoitesMailsLastUpdateTime: PropTypes.string,
  // currentView
  currentView: PropTypes.string,
  // modals
  uploadMailAttachmentsModalOpened: PropTypes.bool.isRequired,
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
    // modals
    showUploadMailAttachmentsModal: PropTypes.func,
    hideUploadMailAttachmentsModal: PropTypes.func
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
    // modal
    uploadMailAttachmentsModalOpened: state.uploadMailAttachmentsModal.isOpened
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
