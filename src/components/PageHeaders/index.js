import React from 'react'
import { useHistory } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'

function PageHeaders({ title, description, textMargin, children }) {
  const history = useHistory()

  const goBack = () => {
    history.push('/')
  }

  return (
    <div className="page-header">
      <div className="row top-navbar d-flex justify-content-between align-items-center">
        <FiArrowLeft
          onClick={goBack}
          style={{ marginLeft: '2rem', color: '#f0f0f7', cursor: 'pointer' }}
          size="4rem"
        />
        <div className="text-white" style={{ marginRight: '4rem', fontSize: '3rem' }}>
          DevProf
        </div>
      </div>
      <div className="header-content">
        <div className={`${textMargin}`}>
          <strong>{title}</strong>
        </div>

        {description && <p>{description}</p>}

        {children}
      </div>
    </div>
  )
}

export default PageHeaders
