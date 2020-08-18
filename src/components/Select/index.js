import React from 'react'

import './styles.css'

function Select({ label, name, options, ...rest }) {
  return (
    <div className="select_block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
