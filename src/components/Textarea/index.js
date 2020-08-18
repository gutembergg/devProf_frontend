import React from 'react'

import './styles.css'

function Textarea({ name, label, ...rest }) {
  return (
    <div className="textarea_block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  )
}

export default Textarea
