import React from 'react';
import { TiTick } from 'react-icons/ti';
import { BiError } from 'react-icons/bi';

const Notification = ({ message }) => {
    const { date, isRead, message: body, senderPhoto } = message;
    return (
        <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white bg-white">
                <p className='text-3xl'>{
                    isRead ? <TiTick className='text-green-600' /> : <BiError
                        className='text-red-600' />
                }</p>
            </span>
            <p className='text-xs text-gray-400'>{date.slice(0, 10)}</p>
            <h3 className="font-medium mt-2 leading-tight text-white hover:text-[#3FB883]">{isRead ? "Admin : I'll Mail you" : "No reply yet"}</h3>
            <div className='flex items-center gap-2 mt-2'>
                <img className='w-6 h-6 rounded-[50%]' src={senderPhoto} alt="" />
                <p className="text-sm text-gray-300">{body.length > 50 ? body.slice(0, 100) : body}</p>
            </div>
        </li>
    );
};

export default Notification;