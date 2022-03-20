import React from 'react';
import PropTypes from 'prop-types';

function Item(props) {
  const { content, selectCallBack } = props;

  return (
    <div
      className="Item"
      onClick={ () => selectCallBack(content) }
      onKeyDown={ (event) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter'
        || event.code === 'Space') {
          selectCallBack(content);
        }
      } }
      role="button"
      tabIndex={ 0 }
    >
      { content }
    </div>
  );
}

Item.propTypes = {
  content: PropTypes.string.isRequired,
  selectCallBack: PropTypes.func.isRequired,
};

export default Item;
