import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RouteHook from 'react-route-hook';
import { Provider } from 'react-redux';
import Main from './components/Main';
import store from './store';
import { fetchPlaylists } from './action-creators/playlists';

const onAppEnter = () => store.dispatch(fetchPlaylists());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RouteHook path="/" component={Main} onEnter={onAppEnter} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
