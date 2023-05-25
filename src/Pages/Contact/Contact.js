import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const { user } = useContext(AuthContext);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const d = new Date();
    const handleFormSubmit = data => {
        const newMessage = {
            senderName: data.name,
            senderEmail: data.email,
            userEmail: user?.email,
            senderPhoto: user?.photoURL,
            message: data.message,
            date: d,
            isRead: false
        }
        fetch(`http://localhost:5000/messages`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newMessage)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Message sent successfully, I will get back to you on Email")
                }
            })
            .catch(err => {
                console.error(err);
            })

        reset();
    }
    return (
        <div className="grid w-full grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x items-center">
            <div className="py-6 md:py-0 md:px-6 mx-auto">
                <div>
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Dharmapur, Fatikchhari, Chittagong</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>+8801830967327</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>safwanridwan321@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(handleFormSubmit)} novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                <label className="block">
                    <span className={`${errors.name ? "text-red-600" : "text-white"} mb-1 `}>Full name</span>
                    <input {...register("name", {
                        required: "Name is required!"
                    })} type="text" placeholder="Example Khan" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                </label>
                <label className="block">
                    <span className={`${errors.email ? "text-red-600" : "text-white"} mb-1 `}>Email address</span>
                    <input {...register("email", {
                        required: "Email is required!"
                    })} type="email" placeholder="example@gmail.com" className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                </label>
                <label className="block">
                    <span className={`${errors.message ? "text-red-600" : "text-white"} mb-1 `}>Message</span>
                    <textarea {...register("message", {
                        required: "Message can not be Empty!"
                    })} rows="3" className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                </label>
                <button type="submit" className="border-2 border-white text-white self-center px-8 py-2 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 ">Submit</button>
            </form>
        </div>
    );
};

export default Contact;