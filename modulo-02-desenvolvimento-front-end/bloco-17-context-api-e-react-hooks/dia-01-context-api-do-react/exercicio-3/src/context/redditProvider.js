import React from "react";
import { getPostsBySubreddit } from "../services/redditAPI";
import redditContext from "./redditContext";

class RedditProvider extends React.Component {
  constructor(){
    super();

    this.state = {
      postsBySubreddit: {
        frontend: this.postState(),
        reactjs: this.postState(),
      },
      selectedSubreddit: 'reactjs',
    }
  }

  postState = () => ({
    isFetching: false,
    lastUpdated: null,
    items: [],
    error: null,
  });

  selectSubreddit = (subreddit) => this.setState({selectedSubreddit: subreddit});
  
  requestPosts = (subreddit) => this.setState((prevState) => ({
    postsBySubreddit: {
      ...prevState.postsBySubreddit,
      [subreddit]: {
        ...prevState.postsBySubreddit[subreddit],
        isFetching: true,
      }
    }
  }));
  
  receivePostsSuccess = (subreddit, json) => this.setState((prevState) => ({
    postsBySubreddit: {
      ...prevState.postsBySubreddit,
      [subreddit]: {
        ...prevState.postsBySubreddit[subreddit],
        isFetching: false,
        items: json.data.children.map((child) => child.data),
        lastUpdated: Date.now(),
      }
    }
  }));
  
  receivePostsFailure = (subreddit, error) => this.setState((prevState) => ({
    postsBySubreddit: {
      ...prevState.postsBySubreddit,
      [subreddit]: {
        ...prevState.postsBySubreddit[subreddit],
        isFetching: false,
        items: [],
        error,
      }
    }
  }));

  fetchPosts = (subreddit) => {
    this.requestPosts(subreddit);
    getPostsBySubreddit(subreddit)
    .then(
      (posts) => this.receivePostsSuccess(subreddit, posts),
      (error) => this.receivePostsFailure(subreddit, error.message),
    );
  }
  
  shouldFetchPosts = (subreddit, refresh) => {
    const { [subreddit]: posts } = this.state.postsBySubreddit;
    if (!posts.items.length) return true;
    if (posts.isFetching) return false;
    return refresh;
  };
  
  fetchPostsIfNeeded = (subreddit, refresh = false) => {
    if(this.shouldFetchPosts(subreddit, refresh)) this.fetchPosts(subreddit);
  }

  render(){
    const {Provider} = redditContext;
    const {children} = this.props;
    const contextValue = {
      ...this.state, 
      fetchPostsIfNeeded: this.fetchPostsIfNeeded,
      selectSubreddit: this.selectSubreddit,
    };
    return (
      <Provider value={contextValue}>
        {children}
      </Provider>
    )
  }
}

export default RedditProvider;
