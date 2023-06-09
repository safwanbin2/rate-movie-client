import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen w-full bg-transparent flex justify-center items-center'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    );
};

export default Loading;