import React from "react";

import Article from "../../components/Article"
import { connect } from "react-redux"

import { fetchGetID, fetchDelete } from "../book_action"

@connect((store) => {
  return {
    book: store.bookReducer.book
  };
})
export default class BookInfor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      pageCount: 0,
      search: '',
    };
  }
  componentWillMount() {
    this.props.dispatch(fetchGetID(this.props.params.id))
  }

  _handleDelete(id) {
    this.props.dispatch(fetchDelete(this.props.params.id))
    this.props.history.push('/');
  }

  render() {
    console.log("render is here");
    return (
     <div>
        <Article onDelete={this._handleDelete.bind(this)} book={this.props.data}  showBtn={false} />
      </div>
    );
  }
}
