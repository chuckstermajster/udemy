import React, { Component } from "react";
import Like from "./like";
import Table from "./common/Table";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like isLiked={movie.liked} onClick={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "rate",
      content: movie => (
        <button
          className="btn btn-primary"
          onClick={() => this.props.onDelete(movie)}
        >
          delete
        </button>
      )
    }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        data={movies}
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
      />
    );
  }
}

export default MoviesTable;
