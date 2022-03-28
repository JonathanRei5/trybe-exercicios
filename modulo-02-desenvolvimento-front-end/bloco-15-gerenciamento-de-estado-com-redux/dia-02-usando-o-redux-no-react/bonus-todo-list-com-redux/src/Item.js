import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionToggleSelectedTask } from './redux/actions'

function Item(props) {
  const { content, toggleSelectedTask } = props;

  return (
    <div
      className="Item"
      onClick={() => toggleSelectedTask(content)}
      onKeyDown={(event) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter'
          || event.code === 'Space') {
          toggleSelectedTask(content);
        }
      }}
      role="button"
      tabIndex={0}
    >
      {content}
    </div>
  );
}

Item.propTypes = {
  content: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleSelectedTask: (task) => dispatch(actionToggleSelectedTask(task)),
});

export default connect(null, mapDispatchToProps)(Item);
