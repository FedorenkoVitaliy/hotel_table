import React from "react";
import './Select.scss';

const Select = ({options, selected, setSelected, ...rest}) => {
  if(!options?.length){
    return null;
  }
  return(
    <select
      className={'select'}
      onChange={(e) => setSelected(e.target.value)}
      value={selected}
      {...rest}
    >
      {
        options.map(({name}) => (
          <option
            value={name}
            key={name}
          >
            {name}
          </option>
        ))
      }
    </select>
  )
}

export default Select;
