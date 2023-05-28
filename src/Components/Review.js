import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import UseIsAdmin from '../Hooks/useIsAdmin';

const Review = ({ review, setRefetch, refetch }) => {
    const { user } = useContext(AuthContext);
    const { comment, reviewDate, stars, userName, userEmail, userPhoto, _id } = review;
    const [isAdmin, isAdminLoading] = UseIsAdmin(user?.email);

    const showStars = amount => {
        let arr = [];
        for (let i = 1; i <= parseInt(amount); i++) {
            arr.push(<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>);
        }
        return arr;
    }

    const handleHelpful = (id, email) => {
        fetch(`http://localhost:5000/reviews/foundHelpful?id=${id}&email=${email}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(data.message);
                setRefetch(!refetch);
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleDeleteReview = id => {
        const consent = window.confirm("Are you sure you want to delete the review?");
        if (consent) {
            fetch(`http://localhost:5000/reviews/delete?id=${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        setRefetch(!refetch);
                        return toast.success("Deleted Successfully");
                    }
                    toast.error("Problem Occured")
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }

    return (
        <article className='my-6 py-2'>
            <div className="flex items-center mb-4 space-x-4">
                <img className="w-10 h-10 rounded-full" src={userPhoto} alt="" />
                <div className="space-y-1 font-medium dark:text-white">
                    <p>{userName} <time className="block text-sm text-gray-500 dark:text-gray-400">{userEmail}</time></p>
                </div>
            </div>
            <div className="flex items-center mb-1">
                {
                    // stars
                    showStars(stars).map(star => star)
                }
            </div>
            <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><>Reviewed on : <time>{reviewDate.slice(0, 10)}</time></></footer>
            <p className="mb-2 text-white">{comment}</p>
            <aside>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{review?.foundHelpful.length ? `${review.foundHelpful.length} people found this helpful` : ``}</p>
                <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                    <button onClick={() => handleHelpful(_id, user?.email)} className={`${review?.foundHelpful.includes(user?.email) ? "bg-blue-700 hover:bg-blue-600 text-white border-white" : "bg-white text-gray-900 hover:bg-gray-100 border-gray-300"} border  focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-xs px-2 py-1 text-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}>Helpful</button>
                    {
                        isAdmin && <div className='pl-2 flex items-center'>
                            <button onClick={() => handleDeleteReview(_id)} type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-xs px-2 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete Review</button>
                        </div>
                    }
                </div>
            </aside>
        </article>
    );
};

export default Review;