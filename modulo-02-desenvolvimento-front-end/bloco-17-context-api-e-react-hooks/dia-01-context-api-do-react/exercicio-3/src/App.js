// import { connect } from 'react-redux';
// import { selectSubreddit, fetchPostsIfNeeded, refreshSubreddit } from './actions';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Posts from './components/Posts';
import Selector from './components/Selector';

class App extends Component {
  componentDidMount() {
    const {  selectedSubreddit, fetchPostsIfNeeded } = this.props;
    fetchPostsIfNeeded(selectedSubreddit);
  }

  componentDidUpdate(prevProps) {
    const { props } = this;
    if (prevProps.selectedSubreddit !== props.selectedSubreddit) {
      const { selectedSubreddit } = props;
      props.fetchPostsIfNeeded(selectedSubreddit);
    }
  }

  selectSubreddit(nextSubreddit) {
    const { selectSubreddit } = this.props;
    selectSubreddit(nextSubreddit);
  }

  handleRefreshClick(event) {
    event.preventDefault();
    const { selectedSubreddit, fetchPostsIfNeeded } = this.props;
    fetchPostsIfNeeded(selectedSubreddit, true);
  }

  renderLastUpdatedAt() {
    const { selectedSubreddit, postsBySubreddit } = this.props;
    const { lastUpdated } = postsBySubreddit[selectedSubreddit];

    return <span>{`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}</span>;
  }

  renderRefreshButton() {
    const { selectedSubreddit, postsBySubreddit } = this.props;
    const { isFetching } = postsBySubreddit[selectedSubreddit];

    return (
      <button
        type="button"
        onClick={(event) => this.handleRefreshClick(event)}
        disabled={isFetching}
      >
        Refresh
      </button>
    );
  }

  render() {
    const { selectedSubreddit, postsBySubreddit } = this.props;
    const { isFetching, lastUpdated, items: posts } = postsBySubreddit[selectedSubreddit];
    const availableSubreddits = Object.keys(postsBySubreddit);

    const isEmpty = posts.length === 0;

    return (
      <div>
        <Selector
          value={selectedSubreddit}
          onChange={(nextSubreddit) => this.selectSubreddit(nextSubreddit)}
          options={availableSubreddits}
        />
        <div>
          {lastUpdated && this.renderLastUpdatedAt()}
          {this.renderRefreshButton()}
        </div>
        {isFetching && <h2>Loading...</h2>}
        {!isFetching && isEmpty && <h2>Empty.</h2>}
        {!isFetching && !isEmpty && <Posts posts={posts} />}
      </div>
    );
  }
}

App.propTypes = {
  postsBySubreddit: PropTypes.shape({
   frontend: PropTypes.shape({}).isRequired,
   reactjs: PropTypes.shape({}).isRequired,
  }).isRequired,
  selectedSubreddit: PropTypes.string.isRequired,
  fetchPostsIfNeeded: PropTypes.func.isRequired,
  selectSubreddit: PropTypes.func.isRequired,
};

export default App;

// const mapStateToProps = (state) => {
//   const { selectedSubreddit, postsBySubreddit } = state;
//   const { isFetching, lastUpdated, items: posts } = postsBySubreddit[selectedSubreddit];

//   return {
//     selectedSubreddit,
//     posts,
//     isFetching,
//     lastUpdated,
//     availableSubreddits: Object.keys(postsBySubreddit),
//   };
// };

// export default connect(mapStateToProps)(App);
