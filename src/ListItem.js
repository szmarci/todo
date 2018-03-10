import React from 'react';
import Edit from './Edit';
import Checkbox from './Checkbox';
import Controls from './Controls';

const ListItem = ({editItem, deleteItem, toggleItem, changeItemState, item, index, handleKeypress}) => {
  return (
    <div className={"to-do" + (item.done ? " completed" : "")}>
      <Edit editItem={editItem} item={item} index={index} handleKeypress={handleKeypress}/>
      <Checkbox index={index} changeItemState={changeItemState} item={item}/>
      <Controls index={index} item={item} deleteItem={deleteItem} toggleItem={toggleItem}/>
    </div>
  )
}

export default ListItem;
