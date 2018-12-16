import { getMovies } from "../services/fakeMovieService";

import React, { Component } from "react";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDeleteMovie = movieToDelete => {
    const movies = this.state.movies.filter(
      movie => movie._id !== movieToDelete._id
    );

    this.setState({
      movies
    });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There is no movies!</p>;
    return (
      <div>
        <p>Showing {count} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => this.handleDeleteMovie(movie)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
