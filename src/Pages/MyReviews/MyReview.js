import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyReview = ({ review, refetch }) => {
    const { comment, movieBanner, movieId, movieTitle, reviewDate, stars, userEmail, userPhoto, userName, _id } = review;

    const handleDeleteReview = id => {
        const consent = window.confirm("Are you sure you want to delete your review?");
        if (consent) {
            fetch(`http://localhost:5000/myreviews/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast.success("Review deleted successfully");
                    refetch();
                })
                .catch(err => {
                    console.error(err);
                    toast.error("There was a problem deleting the review");
                })
        }
    }

    return (
        <article className="md:gap-8 md:grid md:grid-cols-3 my-20">
            <div>
                <div className="flex items-center mb-6 space-x-4">
                    <img className="w-16 h-16 rounded-full" src={movieBanner} alt="" />
                    <div className="space-y-1 font-medium dark:text-white">
                        <p>{movieTitle}</p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <p>category</p>
                        </div>
                    </div>
                </div>
                <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                    <li className="flex items-center"><svg aria-hidden="true" className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"></path></svg>Apartament with City View</li>
                    <li className="flex items-center"><svg aria-hidden="true" className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>3 nights December 2021</li>
                    <li className="flex items-center"><svg aria-hidden="true" className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>Family</li>
                </ul>
            </div>
            <div className="col-span-2 mt-6 md:mt-0">
                <div className="flex items-start mb-5">
                    <div className="pr-4">
                        <footer>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Reviewed: <time dateTime="2022-01-20 19:00">{reviewDate.slice(0, 10)}</time></p>
                        </footer>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{userName}</h4>
                    </div>
                    <div className='bg-blue-700 text-white text-sm font-semibold p-2 rounded flex items-center justify-center'>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="">{stars}</p>
                    </div>
                </div>
                <p className="mb-2 text-gray-500 dark:text-gray-400">{comment}</p>
                <aside className="flex items-center mt-3 space-x-5">
                    <Link to={`/movies/${movieId}`} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Visit Movie
                        </span>
                    </Link  >
                    <button onClick={() => handleDeleteReview(_id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                </aside>
            </div>
        </article>
    );
};

export default MyReview;