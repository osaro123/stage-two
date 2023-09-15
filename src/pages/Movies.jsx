import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import Footer from '../components/Footer';

const Movies = () => {
    const BASE_URL = "https://api.themoviedb.org/3/discover/movie?api_key=dc78c17436db702a0c15acae61e73ccd"
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const response = await fetch(`${BASE_URL}`)
                const data = await response.json()
                setMovies(data)
                console.log(data);
            }catch(err){
                console.log(err);
            }
        }
        fetchMovies()
    },[])
  return (
    <div>
        <Header movies={movies}/>
        <MovieList/>
        <Footer/>
    </div>
  )
}

export default Movies