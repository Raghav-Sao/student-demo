import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import StudentCards from 'components/StudentCards'
import Header from 'components/Header'

import { getStudentData } from 'actions/StudentAction.js'

import './Style.css'

class StudentList extends Component {
  componentDidMount() {
    getStudentData(this.props.dispatch)
  }

  render() {
    const { students, filterName = '', sortBy, ascName, ascMarks } = this.props
    const getTotal = marks => 
      Object.keys(marks).reduce((acc, data) => (acc+marks[data]), 0)
    const getSortedData = () => {
      let keys = Object.keys(students)
        .filter(
          data =>
            filterName === '' ||
            filterName === null ||
            students[data].name.indexOf(filterName) === 0
        )
      if(sortBy === 'name') {
        keys = keys.sort((a, b) => students[a].name < students[b].name)
        if(ascName) keys.reverse();
      }
     if(sortBy === 'marks') {
        keys.sort((a, b) => ascMarks ? getTotal(students[a].marks) - getTotal(students[b].marks) : getTotal(students[b].marks) - getTotal(students[a].marks))
     }

      return keys
    }
    return (
      <Fragment>
        <Header />
        <div className="flex__container student__cards">
          {getSortedData().map(data => <StudentCards data={students[data]} />)}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ studentReducer: { students, filterName, sortBy, ascName, ascMarks } }) => ({
  students,
  filterName,
  sortBy,
  ascName,
  ascMarks
})
export default connect(mapStateToProps)(StudentList)
