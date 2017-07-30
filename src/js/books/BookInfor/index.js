import React, { Component } from "react"
import PropTypes from 'prop-types';

import Article from "../../components/Article"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { fetchGetID, fetchDelete, clearBook } from "../book_action"

class BookInfor extends Component{
  constructor(props) {
    super(props);
    this._handleDelete = this._handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchGetID(this.props.id)
  }

  componentWillUnmount() {
    this.props.clearBook()
  }

  _handleDelete(id) {
    this.props.fetchDelete(this.props.id)
    this.props.history.push('/');
  }

  render() {
    return (
     <div>
        <Article onDelete={this._handleDelete.bind(this)} book={this.props.book}  showBtn={false} />
      </div>
    );
  }
}

BookInfor.propTypes = {
  id: PropTypes.string,
  book: PropTypes.object
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGetID, fetchDelete, clearBook }, dispatch)
}

function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.params.id,
    book: state.bookReducer.book
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookInfor)