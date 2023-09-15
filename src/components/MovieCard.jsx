import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div data-testid="movie-card">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="poster img" data-testid="movie-poster"/>
        <p data-testid="movie-release-date">{movie.release_date}</p>
        <p data-testid="movie-title">{movie.title}</p>
        <p>{`${movie.vote_average}/10`}</p>
    </div>
  )
}

export default MovieCard