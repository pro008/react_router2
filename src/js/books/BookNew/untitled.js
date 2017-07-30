import React, { Component } from "react"
import PropTypes from 'prop-types';

import { hashHistory } from "react-router"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { fetchSave, fetchGetID, clearBook } from "../book_action"
import BookForm from "./book_form"

export const fields = [ 'name', 'description', 'price' ]

class BookNew extends Component{
  constructor(props) {
    super(props)
    this._handleSave = this._handleSave.bind(this)
  }

  componentWillMount() {
    if (this.props.id) 
      this.props.fetchGetID(this.props.id)
  }

  componentWillUnmount() {
    this.props.clearBook()
  }

  _handleSave(campaign) {
    this.props.fetchSave(campaign)
  }

  render() {
    return (<form className="form-horizontal" onSubmit={handleSubmit}>
      <div>
        <BookForm
            onSave={this._handleSave}
            book={this.props.book}/>
      </div>
    )
  }
}

BookNew.propTypes = {
  id: PropTypes.string,
  book: PropTypes.object,
  saveCampaign: PropTypes.func.isRequired,
  clearBook: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGetID, fetchSave, clearBook }, dispatch)
}

function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.params.id,
    book: state.bookReducer.book
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookNew)