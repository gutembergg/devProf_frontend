import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './styles.css'

const Pagehedetest = ({ title, description, children, titleMargin }) => {
  return (
    <>
      <div className="page-header">
        <div className="row d-flex justify-content-between test">
          <Link to="/">
            <FiArrowLeft
              style={{ marginLeft: '2rem', color: '#f0f0f7', cursor: 'pointer' }}
              size="4rem"
              className="mt-4"
            />
          </Link>

          <div className="text-white mt-4" style={{ marginRight: '4rem', fontSize: '3rem' }}>
            DevProf
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div
            className={`d-flex justify-content-center align-self-center col-sm-6 col-md-3 title-text ${titleMargin}`}
          >
            {title}
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2"></div>
          <div className="col-md-2"></div>
        </div>
      </div>
      {children}
    </>
  )
}

export default Pagehedetest
