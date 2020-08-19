import React from 'react'

import './styles.css'

function Input({ label, name, placeholderName, ...rest }) {
  return (
    <div className="input_block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} placeholder={`${placeholderName}`} />
    </div>
  )
}

export default Input
