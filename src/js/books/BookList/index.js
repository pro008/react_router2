import React, { PropTypes, Component } from "react";
import { connect } from "react-redux"

import ReactPaginate from 'react-paginate';

import Article from "../../components/Article"
import { fetchBook } from "../book_action"

@connect((store) => {
  return {
    books: store.bookReducer.books
  };
})
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      pageCount: 0,
      search: ''
    };
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  componentWillMount() {
     this.loadComments();
  }

  loadComments(){
    const self = this.state;
    this.props.dispatch(fetchBook(self.page, self.search));
  }


  handlePageClick = (paginate) => {
    this.setState({page: paginate.selected}, () => {
      this.loadComments();
    });
  };


  handleChangeField(event){
    this.setState({search: event.target.value});
  }

  handleSearch(){
    this.setState({page: 0});
    this.loadComments();
  }

  _renderBlocks() {
    let html = []
    this.props.books.map((book, i) => 
      html.push(<Article  key={i} showBtn={true} book={book}/>)
    );

    return html;
  }

  render() {
    return (
      <div>
        <h1 class="center">List articles</h1>
        <input class="form-control" type="text" value={this.state.search} onChange={this.handleChangeField} />
        <input class="btn btn-lg btn-xlarge" type="submit" onClick={this.handleSearch} value="Submit" />
        <hr />
        <div className="commentBox">
          <div class="row">
            {this._renderBlocks()}
            <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={this.state.pageCount}
                       marginPagesDisplayed={1}
                       pageRangeDisplayed={1}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
          </div>
        </div>
      </div>
    );
  }
}
