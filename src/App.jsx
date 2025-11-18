import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=5d670c1cfdad1c4ee0aa840b250735b6&language=en-US&page=1";

function App() {
  const [movies, setMovies] = useState([]);

  // Fetch movies when the page loads
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <div className="container">
      <h1 className="title">🎬 Popular Movies</h1>

      <div className="grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
