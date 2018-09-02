import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'
import { updateFilterName, updateSortBy } from 'actions/StudentAction.js'

class Header extends Component {
  render() {
    const { sortBy,
  ascName,
  ascMarks} = this.props
    const filterName = e => {
      console.log(e.target.value)
      this.props.dispatch(updateFilterName(e.target.value))
    }
    return (
      <div className="header flex__container">
        <div className="header__text"><input type="text" onChange={e => filterName(e)} placeholder="search" /></div>
       
        <div className="header__right__icons flex__container">
          sort-by: &nbsp;
          <span className={`${sortBy ? (ascName ? 'icon-sort-up' : 'icon-sort-down') : ''} icon__button`} onClick={() => updateSortBy('name', this.props.dispatch)}>Name</span>
          <span className={`${sortBy ? (ascMarks ? 'icon-sort-up' : 'icon-sort-down') : ''} icon__button`}  onClick={() => updateSortBy('marks', this.props.dispatch)}>Marks</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ studentReducer: { showSidebar, sortBy,
  ascName,
  ascMarks } }) => ({
  showSidebar,
  sortBy,
  ascName,
  ascMarks
})

export default connect(mapStateToProps)(Header)
