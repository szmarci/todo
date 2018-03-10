import React, { Fragment } from 'react';

const Edit = ({editItem, item, index, handleKeypress}) => {
  return (
    <React.Fragment>
      {
        item.editing 
          ? <input autoFocus
                   onFocus={(event) => { // hack to move caret to end when editing
                       var val = event.target.value;
                       event.target.value = '';
                       event.target.value = val;
                   }}
                   type="text"
                   value={item.name}
                   onKeyDown={(event) => {
                      handleKeypress(event)
                    }}
                   onChange={(event) => {editItem(event.target.value, index)}}/> 
          : <span>{item.name}</span>
      }
    </React.Fragment>
  )
}

export default Edit;
