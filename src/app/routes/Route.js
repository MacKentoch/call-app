/* eslint no-process-env:0 */

import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  // useRouterHistory,
  hashHistory // static app
  // browserHistory // with server
 }                              from 'react-router';
import { Provider }             from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {
  App,
  HomeConnected,
  RechercheConnected,
  FicheContactCourierConnected,
  FicheContactMailConnected,
  FicheContactTelephoneConnected,
  FicheContactPersonnesConnected
}                               from '../containers';
import configureStore           from '../redux/store/configureStore';
import DevTools                 from '../redux/devTools/DevTools.jsx';
import { appConfig }            from '../config';
// import { createHistory }        from 'history';


// specified base url
// const browserHistory = useRouterHistory(createHistory)({
//   basename: '/app'
// });

const store         = configureStore();
const syncedHistory = syncHistoryWithStore(hashHistory, store);
const {
  home,
  recherche,
  createFicheContactCourier,
  createFicheContactMail,
  createFicheContactTelephone,
  createFicheContactPersonnes
} = appConfig.views;

export const Routes = () => {
  return (
    <Provider store={store}>
      <div>
        <Router history={syncedHistory}>
          <Route path={home.path} component={App} >
            <IndexRoute component={HomeConnected} />

            <Route path={recherche.path} component={RechercheConnected} />

            <Route path={createFicheContactCourier.path} component={FicheContactCourierConnected} />
            <Route path={createFicheContactMail.path} component={FicheContactMailConnected} />
            <Route path={createFicheContactTelephone.path} component={FicheContactTelephoneConnected} />
            <Route path={createFicheContactPersonnes.path} component={FicheContactPersonnesConnected} />
          </Route>
        </Router>
        { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
      </div>
    </Provider>
  );
};
