import * as BookConstant from './book_constants'

export default function reducer(state={
    books: [],

    book: {
      name: null,
      description: null,
      price: null,
    }
  }, action) {

    switch (action.type) {
      case BookConstant.CLEAR_BOOK:
        return action.payload
      case BookConstant.FETCH_BOOKS_FULFILLED: {
        return {...state, books: action.payload.data}
      }
      case BookConstant.FETCH_ADD_BOOK_FULFILLED: {
        return {...state}
      }
      case BookConstant.FETCH_GET_BOOK_FULFILLED: {
        return {...state, book: action.payload.data}
      }
      case BookConstant.FETCH_DELETE_BOOK_FULFILLED: {
        return {...state}
      }
    }

    return state
}
