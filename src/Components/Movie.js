import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CreatePost from './CreatePost';
import { useQuery } from '@tanstack/react-query';
import Review from './Review';
import Loading from './Loading';
import CategoryMovieCard from './CategoryMovieCard';

const Movie = () => {
    const movie = useLoaderData();
    const { actors, banner, category, description, duration, releaseDate, title, trailerLink, _id } = movie;
    const [reviews, setReviews] = useState({});
    const [refetch, setRefetch] = useState(false);
    
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [_id, refetch]);

    const { data: categoryMovies, isLoading } = useQuery({
        queryKey: [category, "movies"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/movies?category=${category}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }
    return (
        <section className='w-[90%] mx-auto grid gap-8 mt-8 mb-20' style={{ gridTemplateColumns: "5fr 2fr" }}>
            <div className=''>
                <img className='w-full h-[500px]' src={banner} alt="" />
                <div className='my-6'>
                    <h2 className='my-2 tracking-wider text-3xl font-semibold'>Title: {title}</h2>
                    <h3 className='my-2 tracking-wider'>Category: {category}</h3>
                    <h3 className='my-2 tracking-wider'>Duration: {duration} Hours</h3>
                    <h3 className='my-2 tracking-wider'>releaseDate: {releaseDate}</h3>
                    <h3 className='my-2 tracking-wider'>Actor: {actors.map(actor => `${actor}, `)}</h3>
                    <iframe className='w-full h-[400px] my-6' src={trailerLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p>{description}</p>
                </div>
                <div>
                    <CreatePost
                        movie={movie}
                        refetch={refetch}
                        setRefetch={setRefetch}
                    />
                </div>
                <div>
                    {reviews.length ? <>{reviews.map(review => <Review
                        key={review._id}
                        review={review}
                        refetch={refetch}
                        setRefetch={setRefetch}
                    />)}</> : ""}
                </div>

            </div>
            <div>
                <h2 className='text-xl font-semibold tracking-wider  mb-2'>Similar Movies: </h2>
                <div className='flex flex-col gap-6'>
                    {
                        categoryMovies.map(movie => <CategoryMovieCard
                            key={movie._id}
                            movie={movie}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Movie;