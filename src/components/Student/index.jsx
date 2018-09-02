import React, { Component, Fragment } from 'react'
import BarChart from 'react-bar-chart'
import { connect } from 'react-redux'
import { getStudentData } from 'actions/StudentAction.js'

import './Style.css'

class Student extends Component {
  componentDidMount() {
    getStudentData(this.props.dispatch)
  }
  render() {
    console.log(this.props)
    debugger
    const { students, match: { params: { id } } } = this.props
    const { [id]: { name, marks = {}, rollNo } = {} } = students
    console.log(marks,"m")

    const data = Object.keys(marks).map(key => ({ text: key, value: marks[key] }))
    console.log(data)
    const getTotal = marks =>  Object.keys(marks).reduce((acc, data) => (acc+marks[data]), 0)
    const margin = { top: 20, right: 20, bottom: 30, left: 40 }
    return (
      <div className="student__details_container flex__container  flex__jcenter">
        <div className="student__details flex__card dir__column p-10">
          <div><span>Name: {name}</span></div>
          <div className="flex__container  flex__jcenter">
            <BarChart
              ylabel="Marks"
              width={200}
              height={200}
              data={data}
              margin={margin}
              colors="#f00"
            />
          </div>
          <span>Id: {rollNo}</span>
          <span>Marks: {getTotal(marks)}</span>
          {Object.keys(marks).map(data => <span>{data}: {marks[data]}</span>)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ studentReducer: { students, postFilter } }) => ({ students, postFilter })
export default connect(mapStateToProps)(Student)
