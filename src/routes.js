import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'
import Instructions from './pages/Instructions'
import PageNotFound from './pages/pageNotFound'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
        <Route path="/instructions" component={Instructions} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
