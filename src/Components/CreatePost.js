import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const CreatePost = ({ movie, refetch, setRefetch }) => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const date = new Date();
    const handleCreatePost = (data) => {
        const review = {
            "stars": data.stars,
            "comment": data.comment,
            "reviewDate": date,
            "movieTitle": movie.title,
            "movieCategory": movie.category,
            "movieId": movie._id,
            "movieBanner": movie.banner,
            "userName": user?.displayName,
            "userPhoto": user?.photoURL,
            "userEmail": user?.email,
            "foundHelpful": []
        }
        fetch(`http://localhost:5000/reviews`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setRefetch(!refetch)
                    return toast.success("Review added successfully");
                }
                toast.error("failed to post the review");
            })
    }
    return (
        <form onSubmit={handleSubmit(handleCreatePost)}>
            <div className={`${errors.comment ? "border-red-400" : "border-gray-200"} w-full mb-4 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600`}>
                <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                    <div className="flex items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Stars</label>
                        <select {...register('stars', {
                            required: "Stars are required"
                        })} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ms-2">
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <div id="tooltip-fullscreen" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Show full screen
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                    <label htmlFor="editor" className="sr-only">Publish post</label>
                    <textarea {...register("comment", {
                        required: "Adding a comment is required"
                    })} id="editor" rows="8" className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." ></textarea>
                </div>
            </div>
            <button type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                Publish post
            </button>
        </form>

    );
};

export default CreatePost;