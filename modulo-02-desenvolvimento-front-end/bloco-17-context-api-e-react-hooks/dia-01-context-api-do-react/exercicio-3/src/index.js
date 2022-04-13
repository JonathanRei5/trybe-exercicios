import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

import RedditProvider from './context/redditProvider';

render(
  <Provider store={store}>
    <RedditProvider>
      <App />
    </RedditProvider>
  </Provider>,
  document.getElementById('root'),
);
