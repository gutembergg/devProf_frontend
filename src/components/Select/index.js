import React from 'react'

import './styles.css'

function Select({ label, name, options, classeWeekDay, ...rest }) {
  console.log(options)
  return (
    <div className={`${classeWeekDay}`}>
      <label className="labelName" htmlFor={name}>
        {label}
      </label>
      <select defaultValue="" id={name} {...rest}>
        <option value="" disabled hidden>
          Select options
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
