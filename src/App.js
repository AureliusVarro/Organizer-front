import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import AppRouting from './pages/AppRouting';
import LayoutManagerContainer from './modules/layout-manager/LayoutManagerContainer';
import SideNotificationsContainer from './modules/side-notifications/SideNotificationsContainer';
import configureStore from './configure-store';

const history = createBrowserHistory();
const store = configureStore(history);
syncHistoryWithStore(history, store);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <SideNotificationsContainer />
      <LayoutManagerContainer>
        <AppRouting />
      </LayoutManagerContainer>
    </BrowserRouter>
  </Provider>
);

export default App;
