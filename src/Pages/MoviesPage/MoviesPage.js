import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Components/Loading';
import TopRatedMovie from '../Home/TopRatedMovies/TopRatedMovie';
import useTitle from '../../Hooks/useTitle';

const MoviesPage = () => {
    const [searchText, setSearchText] = useState("");
    const [categoryText, setCategoryText] = useState("");
    useTitle("rm-Movies");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleFormSubmit = data => {
        setSearchText(data.search);
    }

    const { data: movies, isLoading } = useQuery({
        queryKey: [searchText, "/movies/find", categoryText],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/movies/find?q=${searchText}&category=${categoryText}`);
            const data = await res.json();
            return data;
        }
    })

    const { data: categories, isLoading: loading } = useQuery({
        queryKey: ["/categories/list"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories/list`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading || loading) {
        return <Loading />
    }
    
    return (
        <section className='flex flex-col-reverse md:grid w-[92%] mx-auto py-6' style={{ gridTemplateColumns: "5fr 2fr" }}>
            <div className='py-3 md:pr-6'>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input {...register("search", {
                            required: "Search text is required"
                        })} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 shadow-inner rounded-xl border-0 border-gray-300 bg-gray-50" placeholder="Search Mockups, Logos..." required />
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
                <div className='grid grid-cols-2 gap-3 my-3'>
                    {movies.map(movie => <TopRatedMovie
                        key={movie._id}
                        movie={movie}
                    />)}
                </div>
            </div>
            <div className='py-2'>
                <h2 className='text-xl font-semibold tracking-wider'>filter: </h2>
                <div>
                    <button onClick={() => setCategoryText("")} className='text-xs px-6 py-2 focus:bg-gray-400 bg-gray-100 rounded-full uppercase tracking-wider shadow-inner m-1'>all</button>
                    {
                        categories.map(cat => <button
                            onClick={() => setCategoryText(cat.title)}
                            key={cat._id}
                            cat={cat}
                            className='text-xs px-6 py-2 bg-gray-100 rounded-full uppercase tracking-wider shadow-inner m-1 focus:bg-gray-400'
                        >{cat.title}</button>)
                    }
                </div>
            </div>
        </section>
    );
};

export default MoviesPage;