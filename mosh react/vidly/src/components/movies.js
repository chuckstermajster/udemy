import { getMovies } from "../services/fakeMovieService";
import React, { Component } from "react";
import Pagination from "./pagination";
import paginate from "../utils/paginate";
import GenresList from "./genresList";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import MovieForm from "./movieForm";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 9,
    currentPage: 1,
    selectedGenre: null,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleGenreChange = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleDeleteMovie = movieToDelete => {
    const movies = this.state.movies.filter(
      movie => movie._id !== movieToDelete._id
    );

    this.setState({
      movies
    });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({
      movies
    });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
      sortColumn
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,

      sortColumn
    } = this.state;

    const { totalCount, data: movies } = this.getPagedData();
    if (count === 0) return <p>There is no movies!</p>;
    return (
      <div className="row">
        <div className="col-3">
          <GenresList
            listOfGenres={this.state.genres}
            selectedGenre={this.state.selectedGenre}
            onGenreSelect={this.handleGenreChange}
          />
        </div>
        <div className="col">
          <Link
            className="btn btn-primary"
            to="movies/new"
            component={MovieForm}
          >
            New movie
          </Link>
          <p>Showing {movies.length} movies in the database</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDeleteMovie}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />

          {Math.ceil(totalCount / pageSize) > 1 ? (
            <Pagination
              itemsCount={totalCount}
              pageSize={this.state.pageSize}
              onPageChange={this.handlePageChange}
              currentPage={this.state.currentPage}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Movies;
