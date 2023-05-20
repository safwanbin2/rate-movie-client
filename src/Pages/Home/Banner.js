import React from 'react';
import './Banner.css';

const Banner = ({ title, description, photo }) => {
    return (
        <div className='banner h-[60vh] w-full flex items-center' style={{ backgroundImage: `url(${photo})` }}>
            <div className='w-[80%] mx-auto'>
                <h2 className='uppercase text-5xl drop-shadow underline underline-offset-8 text-white tracking-widest'>{title}</h2>
                <p className='text-white my-6 drop-shadow tracking-wider'>{description}</p>
            </div>
        </div>
    );
};

export default Banner;