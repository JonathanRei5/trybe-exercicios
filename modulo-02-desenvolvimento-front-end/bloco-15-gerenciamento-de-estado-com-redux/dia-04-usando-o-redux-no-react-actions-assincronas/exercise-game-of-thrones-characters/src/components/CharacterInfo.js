import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CharacterInfo extends React.Component {
  render() {
    const { loading, character, error, } = this.props;

    if (!loading && character) {
      return (
        <ul>
          <li>Name: {character.name}</li>
          <li>Gender: {character.gender}</li>
          <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
          <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
        </ul>
      )
    }
    if (error) { return <div>{error}</div>; }
    if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

CharacterInfo.defaultProps = {
  character: null,
}

CharacterInfo.propTypes = {
  loading: PropTypes.bool.isRequired,
  character: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    aliases: PropTypes.array,
    books: PropTypes.array,
  }),
  error: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  loading: state.reducer.loading,
  character: state.reducer.character,
  error: state.reducer.error,
});

export default connect(mapStateToProps)(CharacterInfo);
