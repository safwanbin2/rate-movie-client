import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../Components/Loading';
import Message from './Message';

const Messages = () => {
    const { data: messages, refetch, isLoading } = useQuery({
        queryKey: ["/messages"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/messages`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='text-xl mb-6'>Messages : </h2>
            <div className='md:divide-y'>
                {
                    messages.map(message => <Message
                        key={message._id}
                        message={message}
                        refetch={refetch}
                    />)
                }
            </div>
        </div>
    );
};

export default Messages;