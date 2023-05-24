import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Components/Loading';
import { Link } from 'react-router-dom';

const RandomMovieBanner = () => {
    const { data: movie, isLoading } = useQuery({
        queryKey: ['movies/random'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/movies/movie/random`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2 className='text-3xl uppercase underline underline-offset-4 text-center my-12 tracking-wider'>Today's Pick</h2>
            <div className='md:grid overflow-hidden' style={{ gridTemplateColumns: "2fr 3fr" }}>
                <div className='relative'>
                    <img src={movie.banner} alt="" />
                    <div className='absolute bottom-1 right-1 md:top-[30%] md:right-[10%] text-end'>
                        <h2 className='text-3xl text-white shadow tracking-wider uppercase'>{movie.title}</h2>
                        <p className='text-2xl shadow text-white'>Type: {movie.category}</p>
                        <p className='text-2xl shadow text-white'>Duration: {movie.duration}hours</p>
                        <div className='flex items-center justify-end'>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <p className='text-white shadow '> - {movie.stars ? movie.stars/movie.reviewer : "No rating yet"}</p>
                        </div>
                        <div className='my-6'>
                            <Link to={`/movies/${movie._id}`} className='bg-white px-6 py-3 rounded-full border-2 border-gray-300 font-semibold tracking-wider uppercase'>View Details</Link>
                        </div>
                    </div>
                </div>
                <iframe className='w-full h-full' src={movie.trailerLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    );
};

export default RandomMovieBanner;