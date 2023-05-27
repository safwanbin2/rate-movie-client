import React from 'react';
import { toast } from 'react-hot-toast';

const Message = ({ message, refetch }) => {
    const { date, message: body, isRead, senderEmail, senderName, senderPhoto, _id } = message;
    console.log(message)
    const handleIsRead = () => {
        fetch(`http://localhost:5000/messages/updateStatus?id=${_id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    toast.success("auto Reply sent")
                    refetch();
                }
            })
            .catch(err => {
                console.error(err)
            })
    }
    return (
        <article className='mb-12 pt-4'>
            <div class="flex items-center mb-4 space-x-4">
                <img class="w-10 h-10 rounded-full" src={senderPhoto} alt="" />
                <div class="space-y-1 font-medium dark:text-white">
                    <p>{senderName} <time class="block text-sm text-gray-500 dark:text-gray-400">{senderEmail}</time></p>
                </div>
            </div>
            <footer class="mb-5 text-xs text-gray-500 dark:text-gray-400"><p>Message Sent on <time datetime="2017-03-03 19:00">{date.slice(0, 10)}</time></p></footer>
            <p class="mb-2 text-xm text-white dark:text-gray-400">{body}</p>

            <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                <button onClick={() => handleIsRead()} className={`${isRead ? "bg-blue-600" : ""} text-white border-white border-gray-300"} border  focus:outline-none  focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-xs px-2 py-1 text-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`} >{isRead ? "Reply sent" : "I'll Mail you"}</button>
            </div>
        </article>

    );
};

export default Message;