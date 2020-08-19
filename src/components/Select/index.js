import React from 'react'

import './styles.css'

function Select({ label, name, options, classeWeekDay, ...rest }) {
  return (
    <div className={`${classeWeekDay}`}>
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          Sélectionnez une option
        </option>
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
