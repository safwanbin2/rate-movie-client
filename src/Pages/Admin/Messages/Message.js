import React from 'react';

const Message = ({ message }) => {
    const { date, message: body, isRead, senderEmail, senderName, senderPhoto, _id } = message;
    console.log(message)
    return (
            <article className='my-6'>
                <div class="flex items-center mb-4 space-x-4">
                    <img class="w-10 h-10 rounded-full" src={senderPhoto} alt="" />
                    <div class="space-y-1 font-medium dark:text-white">
                        <p>{senderName} <time class="block text-sm text-gray-500 dark:text-gray-400">{senderEmail}</time></p>
                    </div>
                </div>
                <footer class="mb-5 text-xs text-gray-500 dark:text-gray-400"><p>Message Sent on <time datetime="2017-03-03 19:00">{date.slice(0, 10)}</time></p></footer>
                <p class="mb-2 text-xm text-white dark:text-gray-400">{body}</p>
                
                {/* <aside>
                    <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
                    <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                        <a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                        <a href="#" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                    </div>
                </aside> */}
            </article>
        
    );
};

export default Message;