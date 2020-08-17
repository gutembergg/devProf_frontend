import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import TeacherList from './pages/TeacherList'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/study" component={TeacherList} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
