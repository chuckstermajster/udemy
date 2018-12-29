import React from "react";

const genresList = props => {
  const {
    listOfGenres,
    textProperty,
    valueProperty,
    onGenreSelect,
    selectedGenre
  } = props;
  return (
    <ul className="list-group">
      {listOfGenres.map(genre => (
        <li
          key={genre[valueProperty]}
          className={
            genre === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onGenreSelect(genre)}
          style={{ cursor: "pointer" }}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

genresList.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default genresList;
