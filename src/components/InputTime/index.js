import React from 'react'

import './styles.css'

function InputTime({ label, name, ...rest }) {
  return (
    <div className="input_time_block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  )
}

export default InputTime
