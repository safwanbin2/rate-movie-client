import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = ({ title, description, photo }) => {
    return (
        <div className='banner min-h-screen w-full flex items-center' style={{ backgroundImage: `url(${photo})` }}>
            <div className='w-[92%] mx-auto'>
                <div className='md:w-[60%]'>
                    <h2 className='uppercase text-2xl md:text-5xl drop-shadow underline underline-offset-8 text-white tracking-widest'>{title}</h2>
                    <p className='text-white my-6 drop-shadow tracking-wider'>{description}</p>
                    <Link to="/moviespage" className='bg-white px-6 py-3 rounded-full border-2 border-gray-300 font-semibold tracking-wider uppercase'>Look up for Movies</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;