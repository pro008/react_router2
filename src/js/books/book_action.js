import axios from "axios"

import * as BookConstant from './book_constants'

export function clearBook() {
  return { type: CampaignConstants.CLEAR_BOOK, payload: {} }
}

export function fetchBook(page, search){
  return function(dispatch){
    dispatch({
      type: BookConstant.FETCH_BOOKS,
      payload: axios.get(`http://210.211.117.57/books`, {
        params: {
          page: page +1,
          search: search
        }
      })
    });
  }
}

export function fetchGetID(id) {
  return (dispatch) => {
    axios.get(`http://210.211.117.57/books/${id}`)
    .then((resp) => {
      dispatch({ type: BookConstant.FETCH_GET_BOOK_FULFILLED, payload: resp })
    })
  }
}

export function fetchDelete(id) {
  return function(dispatch) {
    dispatch({
      type: BookConstant.FETCH_GET_BOOK,
      payload: axios.delete(`http://210.211.117.57/books/${id}`)
    });
  }
}

export function fetchSave(book) {
  return (dispatch) => {
    if(book.id){
      dispatch({
        type: BookConstant.FETCH_ADD_BOOK,
        payload:  axios.post(`http://210.211.117.57/books`,
        {name: book.name, description: book.description, price: book.price})
      });
    }else {
      dispatch({
        type: BookConstant.FETCH_EDIT_BOOK,
        payload:  axios.post(`http://210.211.117.57/books/${book.id}`,
        {name: book.name, description: book.description, price: book.price})
      });
    }
  }
}
