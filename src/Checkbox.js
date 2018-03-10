import React, { Fragment } from 'react';

const Checkbox = ({changeItemState, index, item}) => {
  return (
    <React.Fragment>
      <input type="checkbox"
        id={"styled-checkbox-"+ index}
        className='styled-checkbox'
        checked={item.done} 
        onChange={(event) => {changeItemState(event.target.checked, index)}}/>
      <label htmlFor={"styled-checkbox-"+ index}></label>
    </React.Fragment>
  )
}

export default Checkbox;
