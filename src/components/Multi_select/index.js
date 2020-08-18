import React, { useState } from 'react'
import MultiSelect from 'react-multi-select-component'

const MultiSelc = () => {
  const options = [
    { value: 'PHP', label: 'PHP' },
    { value: 'Java', label: 'Java' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Python', label: 'Python' },
    { value: 'CMS', label: 'CMS' },
    { value: 'HTML', label: 'HTML' }
  ]

  const [selected, setSelected] = useState([])

  return (
    <div>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={'Select'}
      />
    </div>
  )
}

export default MultiSelc
