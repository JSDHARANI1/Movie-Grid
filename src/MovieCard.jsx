import React from "react";

function MovieCard({ title, poster, rating }) {
  return (
    <div className="card">
      <img src={poster} alt={title} className="poster" />

      <div className="info">
        <h3>{title}</h3>
        <p>⭐ {rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;