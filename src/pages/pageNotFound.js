import React from 'react'

import NotFound from '../assets/images/devProfPageNotFound3.png'

const PageNotFound = () => {
  return (
    <div style={{ background: '#fff' }}>
      <img style={{ width: '100vw', height: '100vh', marginLeft: '0' }} src={NotFound} alt="404" />
    </div>
  )
}

export default PageNotFound
