import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import SearchComponent from './SearchComponent';

const MovieList = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading,setIsLoading] = useState(false)

  
  const fetchTopMovies = async () => {
    try {
      setIsLoading(true);
      const apiKey = 'dc78c17436db702a0c15acae61e73ccd';
      const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      // Extract the top 10 movies from the API response
      const top10Movies = data.results.slice(0, 10);
      setTopMovies(top10Movies);
    } catch (error) {
      console.error('Error fetching top movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTopMovies();
  }, []);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className='px-8'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl py-4'>Top 10 Movies</h1>
        <p>see more</p>
      </div>
      <SearchComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='grid sm:grid-cols-4 grid-cols-1 gap-8 w-full'>
        {topMovies
          .filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((movie) => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MovieList;
