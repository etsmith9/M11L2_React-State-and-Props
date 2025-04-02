import React, { useState } from "react";

// Task 1, create a MovieList functional component
// The component should display a list of movies with their details.

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Desperato",
      genre: "Action",
      staring: "Antonio Banderas",
      description: "A gripping tale of love and loss.",
      showDetails: false, // task 2, conditional rendering of details
    },
    {
      id: 2,
      title: "1984",
      genre: "Drama",
      staring: "John Hurt",
      description: "A dystopian novel set in a totalitarian regime.",
      showDetails: false,
    },
    {
      id: 3,
      title: "The Great Escape",
      genre: "Action",
      staring: "Steve McQueen",
      description: "A classic war film about a daring escape from a POW camp.",
      showDetails: false,
    },
    {
      id: 4,
      title: "The Shawshank Redemption",
      genre: "Drama",
      staring: "Tim Robbins",
      description: "A story of hope and friendship in prison.",
      showDetails: false,
    },
    {
      id: 5,
      title: "The Godfather",
      genre: "Crime",
      staring: "Marlon Brando",
      description: "An epic tale of family and power in the Mafia.",
      showDetails: false,
    },
  ]);

  const [filterGenre, setFilterGenre] = useState("all");

  const toggleDetails = (id) => {   // task 2. toggling details
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === id ? { ...movie, showDetails: !movie.showDetails } : movie
      )
    );
  };

  const removeMovie = (id) => { // task 3. removing a movie
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const toggleGenreView = () => { // task 4. toggling genre view for 'Action' movies
    setFilterGenre((prev) => (prev === "all" ? "Action" : "all"));
  };

  const filteredMovies =
    filterGenre === "all"
      ? movies
      : movies.filter((movie) => movie.genre === filterGenre);

  return (
    <div className="movie-list">
      <h3><strong>Movie Catalogue:</strong></h3>
      <button onClick={toggleGenreView}>
        {filterGenre === "all" ? "Show Only Action Movies" : "Show All Movies"}
      </button>
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <h3 onClick={() => toggleDetails(movie.id)} style={{ cursor: "pointer" }}>
              {movie.title}
            </h3>
            <button onClick={() => removeMovie(movie.id)}>Remove</button>
            {movie.showDetails && (
              <div>
                <p><strong>Starring:</strong> {movie.staring}</p>
                <p>{movie.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;