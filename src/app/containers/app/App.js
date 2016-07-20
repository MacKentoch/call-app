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
import { Modals }             from '../../views';
import { appConfig }          from '../../config';
import { BackToTop }          from '../../components';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      appName: appConfig.APP_NAME,
      connectionStatus: appConfig.CONNECTION_STATUS,
      helloWord: appConfig.HELLO_WORD
    };
    this.handlesMenuButtonClick = this.handlesMenuButtonClick.bind(this);
  }

  componentDidMount() {
    this.props.actions.fetchUserInfoDataIfNeeded();
  }

  render() {
    const { appName, connectionStatus, helloWord } = this.state;
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
      </div>
    );
  }

  handlesMenuButtonClick(event) {
    event.preventDefault();
    const {location} = this.props;
    this.props.actions.toggleSideMenu();

    // refresh stats (to get responsive charts) if current view is Home
    if (location.pathname === '/') {
      this.props.actions.fetchFichesTraiteeDataIfNeeded();
      this.props.actions.fetchFichesParCanalDataIfNeeded();
      this.props.actions.fetchPrincipauxMotifsDataIfNeeded();
    }
  }
}

App.propTypes = {
  dispatch:   PropTypes.func,
  children:   PropTypes.node.isRequired,
  history:    PropTypes.object,
  location:   PropTypes.object,

  sideMenuIsCollapsed: PropTypes.bool,
  userInfos: PropTypes.shape({
    login: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    picture: PropTypes.string,
    showPicture: PropTypes.bool
  }),
  userInfoFetching: PropTypes.bool,
  userIsConnected: PropTypes.bool,
  currentView: PropTypes.string,

  actions: PropTypes.shape({
    enterHome: PropTypes.func,
    leaveHome: PropTypes.func,
    fetchUserInfoDataIfNeeded: PropTypes.func,
    fetchFichesTraiteeDataIfNeeded: PropTypes.func,
    fetchFichesParCanalDataIfNeeded: PropTypes.func,
    fetchPrincipauxMotifsDataIfNeeded: PropTypes.func,
    openSideMenu:   PropTypes.func,
    closeSideMenu:  PropTypes.func,
    toggleSideMenu: PropTypes.func
  })
};

const mapStateToProps = (state) => {
  return {
    currentView:          state.views.currentView,
    sideMenuIsCollapsed:  state.sideMenu.isCollapsed,
    userInfos:            state.userInfos.data,
    userInfoFetching:     state.userInfos.isFetching,
    userIsConnected:      state.userInfos.isConnected
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
