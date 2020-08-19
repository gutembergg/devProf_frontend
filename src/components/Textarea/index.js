import React from 'react'

import './styles.css'

function Textarea({ name, label, placeholderName, ...rest }) {
  return (
    <div className="textarea_block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} placeholder={`${placeholderName}`} />
    </div>
  )
}

export default Textarea
