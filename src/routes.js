import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'
import PageNotFound from './pages/pageNotFound'
import HomeTest from './pages/homeTest'
import HomeTest2 from './pages/homeTest2'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
        <Route path="/hometest" component={HomeTest} />
        <Route path="/hometest2" component={HomeTest2} />

        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
