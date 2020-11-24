import React from 'react'
import './App.css'
import './assets/styles/global.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import Routes from './routes'

function App() {
  return (
    <div>
      <ReactNotification />
      <Routes />
    </div>
  )
}

export default App
