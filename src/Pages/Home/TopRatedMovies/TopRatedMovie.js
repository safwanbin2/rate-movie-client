import React from 'react';
import { Link } from 'react-router-dom';

const TopRatedMovie = ({ movie }) => {
    const { title, banner, duration, category, _id, stars, reviewer } = movie;
    return (
        <Link to={`/movies/${_id}`} className='bg-cover min-h-[300px] rounded-xl flex justify-start items-end px-6 py-6' style={{ backgroundImage: `url(${banner})` }} >
            <div>
                <h2 className='text-xl text-white shadow tracking-wider uppercase'>{title}</h2>
                <p className='text-sm shadow text-white'>Type: {category}</p>
                <p className='text-sm shadow text-white'>Duration: {duration}hours</p>
                <div className='flex items-center'>
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <p className='text-white text-sm shadow '>: {stars}</p>
                </div>
                <p>Reviewer: {reviewer}</p>
            </div>
        </Link >
    );
};

export default TopRatedMovie;