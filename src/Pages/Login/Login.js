import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import saveUser from '../../Hooks/saveUser';

const Login = () => {
    const { logInWithEmail, logInWithGoogle, isLoading } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const date = new Date();

    // logging in using email and password from handle submit
    const handleLogInWithEmail = data => {
        logInWithEmail(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success(`Successfully logged in as ${user?.displayName}`);
                navigate("/");
            })
            .catch(err => {
                console.error(err);
                toast.error("Failed to log In, Try again")
            });
    }

    // logging in with google
    const handleLogInWithGoogle = () => {
        logInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success(`Successfully logged in as ${user?.displayName}`);
                saveUser(user?.email, user?.displayName, user?.photoURL, "fan", date);
                navigate("/");
            })
            .catch(err => {
                console.error(err);
                toast.error("Failed to log In, Try again")
            });
    }

    return (
        <section className='grid grid-cols-2 w-[90vw] mx-auto shadow-lg rounded overflow-hidden gap-6'>
            <img src="https://tdips.uat.shakeys.solutions/LoginLayout/images/undraw_remotely_2j6y.svg" alt="" />
            <div className='flex items-center py-8'>
                <form onSubmit={handleSubmit(handleLogInWithEmail)} className='w-[90%]'>
                    <h2 className=' text-2xl font-bold uppercase'>Register Now!</h2>
                    <div className="relative z-0 w-full mb-6 group">
                        <input {...register('email', {
                            required: "Email is required"
                        })} type="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlhtmlFor="floating_email" className={`${errors.email ? "text-red-600" : "text-gray-500"} peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input {...register('password', {
                            required: "Password is required"
                        })} type="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlhtmlFor="floating_password" className={`${errors.password ? "text-red-600" : "text-gray-500"} peer-focus:font-medium absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}>Password</label>
                    </div>
                    <button onClick={handleLogInWithGoogle} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                    <button type="submit" className={`${isLoading ? "animate-pulse" : ""} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>Submit{isLoading ? "ting..." : ""}</button>
                </form>
            </div>
        </section>
    );
};

export default Login;