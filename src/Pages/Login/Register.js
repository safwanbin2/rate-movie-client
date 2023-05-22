import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import saveUser from '../../Hooks/saveUser';

const Register = () => {
    const url = `https://api.imgbb.com/1/upload?key=ee207df4d4ece17d8fc4767557525c84`;
    const { createUser, user, isLoading, setIsLoading, update } = useContext(AuthContext);
    const navigate = useNavigate();
    const date = new Date();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleCreateAccount = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                if (user.uid) {
                    const image = data.photo[0];
                    const formdata = new FormData();
                    formdata.append('image', image);
                    fetch(url, {
                        method: "POST",
                        body: formdata
                    })
                        .then(res => res.json())
                        .then(imgData => {
                            console.log(imgData)
                            updateUserData(`${data.firstName} ${data.lastName}`, imgData.data.url);
                            saveUser(data.email, `${data.firstName} ${data.lastName}`, imgData.data.url, data.role, date);
                            setIsLoading(false);
                            navigate("/");
                        })
                        .catch(err => console.error(err));
                }
                console.log(user);
            })
            .catch(err => console.error(err));
    }

    const updateUserData = (name, photo) => {
        update(name, photo)
            .then(() => { })
            .catch(err => console.error(err));
    }

    console.log(user);
    return (
        <section className='grid grid-cols-2 w-[90vw] mx-auto shadow-lg rounded overflow-hidden gap-6'>
            <img src="https://tdips.uat.shakeys.solutions/LoginLayout/images/undraw_remotely_2j6y.svg" alt="" />
            <div className='flex items-center py-8'>
                <form onSubmit={handleSubmit(handleCreateAccount)} className='w-[90%]'>
                    <h2 className=' text-2xl font-bold uppercase'>Register Now!</h2>
                    <div className="relative z-0 w-full mb-6 group">
                        <input {...register('email', {
                            // required: "Email is required"
                        })} type="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlhtmlFor="floating_email" className={`${errors.email ? "text-red-600" : "text-gray-500"} peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input {...register('password', {
                            required: "Password is required"
                        })} type="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlhtmlFor="floating_password" className={`${errors.password ? "text-red-600" : "text-gray-500"} peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Password</label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input {...register('firstName', {
                                required: "First name is required"
                            })} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlhtmlFor="floating_first_name" className={`${errors.firstName ? "text-red-600" : "text-gray-500"} peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>First name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input {...register('lastName', {
                                required: "Last Name is requried"
                            })} type="text" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlhtmlFor="floating_last_name" className={`${errors.lastName ? "text-red-600" : "text-gray-500"} peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Last name</label>
                        </div>
                    </div>
                    <div className='mb-6'>
                        <label htmlhtmlFor="countries" className={`${errors.role ? "text-red-600" : "text-gray-900"} block mb-2 text-sm font-medium dark:text-white`}>Choose a Role</label>
                        <select {...register('role', {
                            required: "Must select a role"
                        })} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="fan">Fan</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-center w-full mb-6">
                        <label htmlhtmlFor="dropzone-file" className={`${errors.photo ? "border-red-600" : "border-gray-300"} flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600`}>
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input {...register('photo', {
                                required: "Must upload an image"
                            })} id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                    <button type="submit" className={`${isLoading ? "animate-pulse" : ""} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>Submit{isLoading ? "ting..." : ""}</button>
                </form>
            </div>
        </section>
    );
};

export default Register;