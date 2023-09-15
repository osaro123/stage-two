import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BiCameraMovie, BiLogOut } from 'react-icons/bi';
import { PiTelevisionThin } from 'react-icons/pi';
import { SlCalender } from 'react-icons/sl';
import tv from '../assets/tv.png';

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState('');
  const apiKey = 'dc78c17436db702a0c15acae61e73ccd';
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    const getDetailsPageData = async () => {
        try{
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
              );
              const data = await response.json();
              setMovieDetails(data);
        }catch(err){
            console.log(err);
            setIsLoading(false)
        }
    };
    getDetailsPageData();
  }, [id]);

  const runtimeHours = Math.floor(movieDetails.runtime);
  const runtimeMinutes = Math.round((movieDetails.runtime - runtimeHours) * 60);

  const releaseDateUTC = new Date(movieDetails.release_date).toUTCString();

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='lg:w-1/4 flex flex-col gap-4 h-screen border-r-2 border-black py-16 rounded-[4rem]'>
        <div className='flex gap-4 items-center sm:mx-16 mx-4'>
          <img src={tv} alt='logo' />
          <p className='sm:block hidden'>MovieBox</p>
        </div>
        <ul className='my-2'>
          <li className='flex gap-2 py-4 sm:px-16 px-8 items-center'>
            <AiOutlineHome />
            Home
          </li>
          <li className='flex gap-2 py-4 sm:px-16 px-8 items-center bg-[#BE123C1A] border-r-8 border-[#BE123C]'>
            <BiCameraMovie />
            Movies
          </li>
          <li className='flex gap-2 py-4 sm:px-16 px-8 items-center'>
            <PiTelevisionThin />
            TV Series
          </li>
          <li className='flex gap-2 py-4 sm:px-16 px-8 items-center'>
            <SlCalender />
            Upcoming
          </li>
        </ul>
        <div className='sm:mx-8 mx-4 px-4 py-2 bg-[#F8E7EB66] border-[#BE123C] border-[1px] rounded-2xl'>
          <p>Play movie quizzes and earn free tickets</p>
          <small className='py-2'>50k people are playing now</small>
          <p className='bg-[#BE123C33] text-[#BE123C] my-4 py-1 text-center rounded-2xl'>
            Start Playing
          </p>
        </div>
        <p className='px-8 sm:pt-4 pt-2 flex gap-2 items-center'>
          <BiLogOut />
          Log out
        </p>
      </div>
      <div className='lg:w-3/4 p-4'>
        <div className='w-full h-[449px] bg-black rounded-md'>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className='max-w-full max-h-full object-contain rounded-md'
          />
        </div>
        <div className='flex flex-col gap-4 mt-4'>
          <div>
            <p className='text-xl font-bold'>
              {movieDetails.title} ({releaseDateUTC.slice(-4)})
            </p>
            <p className='text-sm'>
              {`${runtimeHours}h ${runtimeMinutes}m`} | PG-13 |{' '}
              {movieDetails.genres &&
                movieDetails.genres.map((genre) => genre.name).join(', ')}
            </p>
          </div>
          <p className='text-gray-700'>{movieDetails.overview}</p>
          <div>
            <p className='py-[2px]'>
              Director: <span className='text-[#BE123C]'>Lawani Osaro</span>
            </p>
            <p className='py-[2px]'>
              Writers: <span className='text-[#BE123C]'>Lawani Osaro</span>
            </p>
            <p className='py-[2px]'>
              Stars: <span className='text-[#BE123C]'>Lawani Osaro</span>
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <button className='bg-[#BE123C] text-white px-2 py-2 rounded-md'>
              Top rated movie #65
            </button>
            <p className='px-2 py-2 rounded-md'>Awards 9 nominations</p>
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
          <p className='text-xl'>
            8.5 | 350k Ratings |{' '}
            <span className='text-gray-700'>See Showtimes</span>
          </p>
          <button className='bg-[#BE123C] text-white py-2 w-full'>
            More watch options
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
