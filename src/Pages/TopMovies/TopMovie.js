import React from 'react';
import { Link } from 'react-router-dom';

const TopMovie = ({ movie }) => {
    console.log(movie)
    const { title, category, releaseDate, stars, reviewer, _id } = movie;
    return (
        <tr class=" border-b hover:bg-gray-50 text-white hover:text-black relative">
            <th scope="row" class="px-6 py-4 font-medium   whitespace-nowrap ">
                {title}
            </th>
            <td class="px-6 py-4   whitespace-nowrap ">
                {category}
            </td>
            <td class="px-6 py-4   whitespace-nowrap ">
                {stars}
            </td>
            <td class="px-6 py-4   whitespace-nowrap ">
                {reviewer}
            </td>
            <td class="px-6 py-4   whitespace-nowrap ">
                {releaseDate}
            </td>
            <Link to={`/movies/${_id}`} className='absolute h-full w-full top-0 left-0'></Link>
        </tr>
    );
};

export default TopMovie;