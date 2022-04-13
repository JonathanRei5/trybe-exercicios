import React from "react";
import { getPostsBySubreddit } from "../services/redditAPI";
import redditContext from "./redditContext";

class RedditProvider extends React.Component {
  constructor(){
    super();

    this.state = {
      frontend: this.postState(),
      reactjs: this.postState(),
      selectedSubreddit: 'reactjs',
    }
  }

  postState = () => ({
    shouldRefreshSubreddit: false,
    isFetching: false,
    lastUpdated: null,
    items: null,
    error: null,
  });

  selectSubreddit = (subreddit) => this.setState({selectedSubreddit: subreddit});

  refreshSubreddit = (subreddit) => this.setState((state) => ({
    [subreddit]: {
      ...state[subreddit],
      shouldRefreshSubreddit: true,
    }
  }));
  
  requestPosts = (subreddit) => this.setState((state) => ({
    [subreddit]: {
      ...state[subreddit],
      shouldRefreshSubreddit: false,
      isFetching: true,
    }
  }));
  
  receivePostsSuccess = (subreddit, json) => this.setState((state) => ({
    [subreddit]: {
      ...state[subreddit],
      shouldRefreshSubreddit: false,
      isFetching: false,
      items: json.data.children.map((child) => child.data),
      lastUpdated: Date.now(),
    }
  }));
  
  receivePostsFailure = (subreddit, error) => this.setState((state) => ({
    [subreddit]: {
      ...state[subreddit],
      shouldRefreshSubreddit: false,
      isFetching: false,
      items: [],
      error,
    }
  }));

  fetchPosts = () => {
    const {selectedSubreddit} = this.state;
    this.requestPosts(selectedSubreddit);
    getPostsBySubreddit(selectedSubreddit)
    .then(
      (posts) => this.receivePostsSuccess(selectedSubreddit, posts),
      (error) => this.receivePostsFailure(selectedSubreddit, error.message),
    );
  }
  
  shouldFetchPosts = () => {
    const {selectedSubreddit, [selectedSubreddit]: posts} = this.state;
    if (!posts.items) return true;
    if (posts.isFetching) return false;
    return posts.shouldRefreshSubreddit;
  };
  
  fetchPostsIfNeeded = () => { if(this.shouldFetchPosts()) this.fetchPosts(); }

  render(){
    const {Provider} = redditContext;
    const {children} = this.props;
    const contextValue = { ...this.state, fetchPostsIfNeeded: this.fetchPostsIfNeeded };
    return (
      <Provider value={contextValue}>
        {children}
      </Provider>
    )
  }
}

export default RedditProvider;
