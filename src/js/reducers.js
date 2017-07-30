import { combineReducers } from "redux"
import { reducer as formReducer } from 'redux-form'

import bookReducer from "./books/book_reducers"

export default combineReducers({
  bookReducer,
  form: formReducer,
})
