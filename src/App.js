import React, { Component } from 'react'
import { Provider } from 'react-redux'
import 'assets/fontello/css/fontello.css'
import Header from 'components/Header'
import StudentList from 'components/StudentList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="container__main">
        <StudentList />
      </div>
    )
  }
}

export default App
