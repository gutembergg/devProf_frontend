import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

const Pagehedetest = ({ title, description, children }) => {
  return (
    <>
      <div className="page-header">
        <div className="row d-flex justify-content-between test">
          <FiArrowLeft
            style={{ marginLeft: '2rem', color: '#f0f0f7', cursor: 'pointer' }}
            size="4rem"
            className="mt-4"
          />
          <div className="text-white mt-4" style={{ marginRight: '4rem', fontSize: '3rem' }}>
            DevProf
          </div>
        </div>
        <div className="wrap-text">
          <div className="d-flex align-self-center col-sm-6 col-md-6 title-text">{title}</div>
        </div>
      </div>
      {children}
    </>
  )
}

export default Pagehedetest
