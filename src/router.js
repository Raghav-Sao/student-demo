import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import StudentList from 'components/StudentList'
import Student from 'components/Student'
import './index.css'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={StudentList} />
        <Route exact path="/:id" component={Student} />
      </Switch>
    </Router>
  </Provider>
)

export default Root
