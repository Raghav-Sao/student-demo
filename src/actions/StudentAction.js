export const UPDATE_STUDENT_DATA = 'UPDATE_STUDENT_DATA'
export const UPDATE_FILTER_NAME = 'UPDATE_FILTER_NAME'
export const TOGGLE_SORT_BY_NAME = 'TOGGLE_SORT_BY_NAME'
export const TOGGLE_SORT_BY_MARKS = 'TOGGLE_SORT_BY_MARKS'
export const UPDATE_SORT_BY = 'UPDATE_SORT_BY'


export const getStudentData = dispatch => {
  fetch('https://api.myjson.com/bins/1dlper').then(response => {
    if (response.status === 200) {
      response.json().then(payload => {
        console.log(payload)
        dispatch({
          type: UPDATE_STUDENT_DATA,
          payload: payload,
        })
      })
    }
  })
}

export const updateFilterName = payload => ({
  type: UPDATE_FILTER_NAME,
  payload,
})

export const updateSortBy = (payload, dispatch) => {
  dispatch({
    type: UPDATE_SORT_BY,
    payload
  })
  if(payload === 'name') {
    dispatch({
      type: TOGGLE_SORT_BY_NAME
    })
  } else {
     dispatch({
      type: TOGGLE_SORT_BY_MARKS
    })
  }
}

export const toggleNameSort = () => ({
  type: TOGGLE_SORT_BY_NAME
})

export const toggleMarksSort = () => ({
  type: TOGGLE_SORT_BY_MARKS
})
