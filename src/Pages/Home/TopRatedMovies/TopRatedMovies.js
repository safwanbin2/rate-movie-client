import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Components/Loading';
import TopRatedMovie from './TopRatedMovie';

const TopRatedMovies = () => {
    const { data: movies, isLoading } = useQuery({
        queryKey: ['movies/all'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/movies/all`);
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }
    
    return (
        <div className='w-[92%] mx-auto'>
            <h2 className='text-3xl uppercase underline underline-offset-4 text-center my-12 tracking-wider'>Top Rated Movies</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    movies.map(movie => <TopRatedMovie
                        key={movie._id}
                        movie={movie}
                    />)
                }
            </div>
        </div>
    );
};

export default TopRatedMovies;