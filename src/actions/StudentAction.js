export const UPDATE_STUDENT_DATA = 'UPDATE_STUDENT_DATA'
export const UPDATE_FILTER_NAME = 'UPDATE_FILTER_NAME'
export const TOGGLE_SORT_BY_NAME = 'TOGGLE_SORT_BY_NAME'
export const TOGGLE_SORT_BY_MARKS = 'TOGGLE_SORT_BY_MARKS'
export const UPDATE_SORT_BY = 'UPDATE_SORT_BY'

export const getStudentData = dispatch => {
  fetch('https://api.myjson.com/bins/1dlper')
    .then(response => {
      if (response.status === 200) {
        response.json().then(payload => {
          dispatch({
            type: UPDATE_STUDENT_DATA,
            payload: payload,
          })
        })
      } else {
        console.error('lets see kk ', response)
        //can use a boolean flag to show erorr in ui
      }
    })
    .catch(error => {
      console.error('lets see', error)
    })
}

export const updateFilterName = payload => ({
  type: UPDATE_FILTER_NAME,
  payload,
})

export const updateSortBy = (payload, dispatch) => {
  dispatch({
    type: UPDATE_SORT_BY, //can combine this to optimise render call
    payload,
  })
  if (payload === 'name') {
    dispatch({
      type: TOGGLE_SORT_BY_NAME,
    })
  } else {
    dispatch({
      type: TOGGLE_SORT_BY_MARKS,
    })
  }
}

export const toggleNameSort = () => ({
  type: TOGGLE_SORT_BY_NAME,
})

export const toggleMarksSort = () => ({
  type: TOGGLE_SORT_BY_MARKS,
})
