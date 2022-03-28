import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionToggleSelectedTask } from '../redux/actions';
import './css/Item.css';

function Item(props) {
  const { content, toggleSelectedTask } = props;
  const classDone = content.done ? ' done_task' : '';
  const classInProgress = content.inProgress ? ' inProgress_task' : '';
  return (
    <div
      className={`Item${classDone}${classInProgress}`}
      onClick={() => toggleSelectedTask(content.task)}
      onKeyDown={(event) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter'
          || event.code === 'Space') {
          toggleSelectedTask(content.task);
        }
      }}
      role="button"
      tabIndex={0}
    >
      {content.task}
    </div>
  );
}

Item.propTypes = {
  content: PropTypes.shape({}).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleSelectedTask: (task) => dispatch(actionToggleSelectedTask(task)),
});

export default connect(null, mapDispatchToProps)(Item);
