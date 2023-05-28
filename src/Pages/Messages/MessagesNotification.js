import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Loading from '../../Components/Loading';
import Notification from './Notification';

const MessagesNotification = () => {
    const { user } = useContext(AuthContext);
    const { data: messages, isLoading } = useQuery({
        queryKey: [user],
        queryFn: async () => {
            const res = await fetch(`https://rate-movie-server-safwanbin2.vercel.app/messages/mymessages?email=${user?.email}`);
            const data = await res.json();
            console.log(data);
            return data;
        }
    })
    if (isLoading) {
        return <Loading />
    }
    console.log(messages);
    return (
        <div className='w-[92%] mx-auto'>
            <h2>Messages Status: </h2>
            <ol className="relative text-gray-500 border-l border-b py-6 border-gray-200 dark:border-gray-700 dark:text-gray-400">
                {
                    // i stands for index
                    messages.map((message) => <Notification
                        key={message._id}
                        message={message}
                    />)
                }
            </ol>
        </div>
    );
};

export default MessagesNotification;