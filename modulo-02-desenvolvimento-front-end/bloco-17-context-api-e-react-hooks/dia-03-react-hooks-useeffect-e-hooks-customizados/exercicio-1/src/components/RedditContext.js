import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getPostsBySubreddit } from '../services/redditAPI';

const Context = createContext();
const { Provider, Consumer } = Context;

function RedditProvider({ children }) {

  const [state, setState] = useState({
      postsBySubreddit: {
        frontend: {},
        reactjs: {},
      },
      selectedSubreddit: 'reactjs',
      shouldRefreshSubreddit: false,
      isFetching: false,
    });

  function shouldFetchPosts() {
    const {
      selectedSubreddit,
      postsBySubreddit,
      shouldRefreshSubreddit,
      isFetching,
    } = state;
    const posts = postsBySubreddit[selectedSubreddit];

    if (!posts.items) return true;
    if (isFetching) return false;
    return shouldRefreshSubreddit;
  };

  function fetchPosts() {
    if (!shouldFetchPosts()) return;

    setState({
      ...state,
      shouldRefreshSubreddit: false,
      isFetching: true,
    });

    const { selectedSubreddit } = state;
    getPostsBySubreddit(selectedSubreddit)
      .then(handleFetchSuccess, handleFetchError);
  };

  function handleFetchSuccess(json) {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);

    setState((state) => {
      const newState = {
        ...state,
        shouldRefreshSubreddit: false,
        isFetching: false,
      };

      newState.postsBySubreddit[state.selectedSubreddit] = {
        items,
        lastUpdated,
      };

      return newState;
    });
  }

  function handleFetchError(error) {
    setState((state) => {
      const newState = {
        ...state,
        shouldRefreshSubreddit: false,
        isFetching: false,
      };

      newState.postsBySubreddit[state.selectedSubreddit] = {
        error: error.message,
        items: [],
      };

      return newState;
    });
  }

  function handleSubredditChange(selectedSubreddit) {
    setState({ ...state, selectedSubreddit });
  }

  function handleRefreshSubreddit() {
    setState({ ...state, shouldRefreshSubreddit: true });
  }

  useEffect(() => { fetchPosts(); }, [state.selectedSubreddit]);
  useEffect(() => {
    const { shouldRefreshSubreddit } = state;
    if (shouldRefreshSubreddit) fetchPosts();
  }, [state.shouldRefreshSubreddit]);

  const { selectedSubreddit, postsBySubreddit } = state;
  const context = {
    ...state,
    selectSubreddit: handleSubredditChange,
    fetchPosts: fetchPosts,
    refreshSubreddit: handleRefreshSubreddit,
    availableSubreddits: Object.keys(postsBySubreddit),
    posts: postsBySubreddit[selectedSubreddit].items,
  };

  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
}

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RedditProvider as Provider, Consumer, Context };
