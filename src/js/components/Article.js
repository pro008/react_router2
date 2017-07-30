import React from "react";
import { Link } from "react-router";

export default class Article extends React.Component {
  constructor(props) {
    super(props)
    // this._handleDelete = this._handleDelete.bind(this)
  }



  render() {
    const { book } = this.props;

    return (
      <div class="col-sm-10 col-sm-offset-1 well">
        <h2 class ="center">{book.name}</h2>
        <hr />
        <p>{book.description}</p>
        <hr />
        <h4><a href="#">Price: {book.price}$</a></h4>
        {this.props.showBtn ? <Link className="btn btn-xs btn-warning" to={`/book/${book.id}` }>ShowInfor</Link> : ''}
        {this.props.showBtn ? '' :<Link className="btn btn-xs btn-warning" to={`/book/${book.id}/edit`}>Edit</Link>}
        {this.props.showBtn ? '' : <a class="btn btn-xs btn-warning" onClick={(e) => this.props.onDelete(book.id)}>Delete</a>}
      </div>
    );
  }
}
