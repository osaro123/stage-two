import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

const Movies = () => {
    const BASE_URL = "https://api.themoviedb.org/3/discover/movie?api_key=dc78c17436db702a0c15acae61e73ccd"
    const [movies, setMovies] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    useEffect(() => {
        const fetchMovies = async () => {
            try{
                setIsLoading(true)
                const response = await fetch(`${BASE_URL}`)
                const data = await response.json()
                setMovies(data)
                console.log(data);
                setIsLoading(false)
            }catch(err){
                console.log(err);
            }
        }
        fetchMovies()
    },[])

    if (isLoading) {
        return (
          <div className='flex justify-center items-center h-screen'>
            <p>Loading...</p>
          </div>
        );
      }

  return (
    <div>
        <Header movies={movies}/>
        <MovieList/>
        <Footer/>
    </div>
  )
}

export default Movies