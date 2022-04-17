// import { Provider } from 'react-redux';
// import store from './store';
import React from 'react';
import { render } from 'react-dom';
import RedditProvider from './context/redditProvider';
import {renderWithConsumer} from './context/redditContext';
import App from './App';

render(
  // <Provider store={store}>
    <RedditProvider>
      {renderWithConsumer(App)}
    </RedditProvider>,
  // </Provider>
  document.getElementById('root'),
);
