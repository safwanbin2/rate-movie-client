import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Components/Loading';
import TopMovie from './TopMovie';

const TopMovies = () => {
    const { data: movies, isLoading } = useQuery({
        queryKey: ["/movies/toprated"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/movies/toprated?limit=50`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading />
    }
    console.log(movies)
    return (
        <div className='w-[92%] mx-auto my-6'>
            <h2 className='my-6 text-xl font-semibold tracking-wider'>Top-50 Movies according stars: </h2>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Stars
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Reviewer
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Release
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map(movie => <TopMovie
                                key={movie._id}
                                movie={movie}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TopMovies;