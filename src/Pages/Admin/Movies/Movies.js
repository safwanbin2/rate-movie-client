import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Components/Loading';
import MovieCard from './MovieCard';
import useTitle from '../../../Hooks/useTitle';

const Movies = () => {
    useTitle("rm-Movies")
    const { data: movies, isLoading, refetch } = useQuery({
        queryKey: ["/movies/all"],
        queryFn: async () => {
            const res = await fetch(`https://rate-movie-server-safwanbin2.vercel.app/movies/all`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }
    console.log(movies);
    return (
        <div>
            <h2 className='text-xl font-semibold my-6'>this is movies all : </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8'>
                {
                    movies.map(movie => <MovieCard
                        key={movie._id}
                        movie={movie}
                        refetch={refetch}
                    />)
                }
            </div>
        </div>
    );
};

export default Movies;