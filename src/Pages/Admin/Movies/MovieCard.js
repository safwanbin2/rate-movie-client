import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from "react-icons/ai";

const MovieCard = ({ movie }) => {
    const { banner, title, description, _id } = movie;

    const handleDeleteMovie = id => {
        console.log(id);
    }

    return (
        <Link to={`/movies/${_id}`} className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg h-[150px] w-full" src={banner} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description.length > 100 ? `${description.slice(0, 100)}...` : description}</p>
            </div>
            <button onClick={() => handleDeleteMovie(_id)} className='absolute bottom-3 right-3 p-2 text-white rounded-[50%] bg-red-500'>
                <AiFillDelete />
            </button>
        </Link>
    )
};

export default MovieCard;