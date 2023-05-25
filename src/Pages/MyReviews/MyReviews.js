import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Loading from '../../Components/Loading';
import MyReview from './MyReview';
import useTitle from '../../Hooks/useTitle';

const MyReviews = () => {
    useTitle("rm-Reviews")
    const { user } = useContext(AuthContext);
    const { data: reviews, isLoading, refetch } = useQuery({
        queryKey: [user?.email, "myreviews"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myreviews?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }

    console.log(reviews)
    return (
        <div className='w-[90%] mx-auto'>
            <h2 className='text-center text-xl font-semibold -tracking-wider my-6'>My reviews on Movies</h2>
            <section className='my-6'>
                {
                    reviews.map(review => <MyReview
                        key={review._id}
                        review={review}
                        refetch={refetch}
                    />)
                }
            </section>
        </div>
    );
};

export default MyReviews;