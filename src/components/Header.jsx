import React from 'react';
import tv from "../assets/tv.png";
import menu from "../assets/Menu.png";
import { AiFillPlayCircle } from 'react-icons/ai';
import SearchComponent from './SearchComponent';

const Header = ({ movies }) => {
  // Check if movies.results exists and contains data
  if (!movies.results || movies.results.length === 0) {
    return (
      <header className="h-screen flex justify-center items-center" style={{ background: `url(${tv}) center/cover` }}>
        <div className='flex gap-2'>
          <img src={tv} alt="logo" />
          <p className='text-white'>MovieBox</p>
        </div>
        <div></div>
        <div></div>
      </header>
    );
  }

  const movieBackground = movies.results[2].backdrop_path;

  // Construct the full image URL with the backdrop_path
  const backgroundImageUrl = `https://image.tmdb.org/t/p/original${movieBackground}`;

  return (
    <header className="h-screen px-8" style={{ background: `url(${backgroundImageUrl}) center/cover` }}>
        <div className='flex items-center justify-between w-full py-4'>
            <div className='flex gap-4 items-center'>
                <img src={tv} alt="logo" />
                <p className='text-white text-xl font-semibold'>MovieBox</p>
            </div>
            <div className='sm:block hidden'>
                <SearchComponent/>
            </div>
            <div>
                <img src={menu} alt="menu" />
            </div>
        </div>
        <div className='max-w-[500px] py-32 text-white'>
            <h1 className='text-4xl'>{movies.results[2].original_title}</h1>
            <p className='py-4'>{`${movies.results[2].vote_average}/10`}</p>
            <p className='py-2'>{movies.results[2].overview}</p>
            <button className='flex gap-2 items-center py-1 px-2 rounded-sm bg-[#BE123C]'> <AiFillPlayCircle/> Watch Trailer</button>
        </div>
    </header>
  );
};

export default Header;
