import React, { Fragment } from 'react';

const Controls = ({toggleItem, deleteItem, index, item}) => {
  return (
    <React.Fragment>
      <div className="controls">
        <button onClick={() => { toggleItem(item.editing, index) }}>edit</button>
        <button onClick={() => { deleteItem(index) }}>delete</button>
      </div>  
    </React.Fragment>
  )
}

export default Controls;
