import { UPDATE_STUDENT_DATA, UPDATE_FILTER_NAME, UPDATE_SORT_BY, TOGGLE_SORT_BY_NAME, TOGGLE_SORT_BY_MARKS} from 'actions/StudentAction'

const initialState = {
  students: {},
  filterName: '',
  sortBy: null,
  ascName: false,
  ascMarks: false
}

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action
  debugger
  switch (type) {
    case UPDATE_STUDENT_DATA: {
      return {
        ...state,
        students: payload,
      }
    }

    case UPDATE_FILTER_NAME: {
      return {
        ...state,
        filterName: payload,
      }
    }

    case UPDATE_SORT_BY: {
      return {
        ...state,
        sortBy: payload
      }
    }

    case TOGGLE_SORT_BY_NAME: {
      return {
        ...state,
        ascName: !state.ascName
      }
    }

    case TOGGLE_SORT_BY_MARKS: {
      return {
        ...state,
        ascMarks: !state.ascMarks
      }
    }

    default:
      return state
  }
}
