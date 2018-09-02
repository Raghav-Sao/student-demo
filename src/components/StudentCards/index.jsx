import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import './Style.css'

class Post extends Component {
  render() {
    const { name, marks, rollNo: id } = this.props.data

    const getTotal = marks => 
      Object.keys(marks).reduce((acc, data) => (acc+marks[data]), 0)
    return (
      <div
        className="flex__card flex__container dir__column"
        onClick={() => {
          console.log(this.props.history.push(`/${id}`))
        }}
      >
        <span>Name: {name}</span>
        <span>Marks: {getTotal(marks)}</span>
        <span>Id: {id}</span>
      </div>
    )
  }
}

const mapStateToProps = ({ studentReducer: { postData, postFilter } }) => ({ postData, postFilter })
export default connect(mapStateToProps)(withRouter(Post))
