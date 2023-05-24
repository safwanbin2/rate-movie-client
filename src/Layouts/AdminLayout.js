import React, { useContext, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { RiAdminFill } from 'react-icons/ri';
import { GoReport, GoSignOut } from 'react-icons/go';
import { MdCreateNewFolder, MdLocalMovies } from 'react-icons/md';
import film from '../Assets/film.png';

const AdminLayout = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [isSubOpen, setIsSubOpen] = useState(false);
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleSubToggle = () => {
        setIsSubOpen(!isSubOpen);
    }

    const handleLogOut = () => {
        const consent = window.confirm("Are you sure you want to log out?");
        if (consent) {
            logOut()
                .then(() => {
                    toast.success("Logged out successfully")
                    navigate("/")
                })
                .catch(err => {
                    console.error(err)
                    toast.error("Proble occured while logging out")
                })
        }
    }
    return (
        <section>
            <nav class="fixed top-0 z-50 w-full bg-base border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between px-4">
                        <Link to='/' className='hidden md:flex justify-center items-center tracking-wider text-2xl font-semibold'>
                            <span>rateM</span>
                            <img className='w-6 h-6' src={film} alt="" />
                            <span>vie</span>
                        </Link>
                        <div class="flex items-center justify-start">
                            <button onClick={() => handleToggle()} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center ml-3 relative">
                                <div>
                                    <button onClick={() => handleSubToggle()} type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span class="sr-only">Open user menu</span>
                                        <img alt='user' class="w-8 h-8 rounded-full" src={user?.photoURL} />
                                    </button>
                                </div>
                                <div class={`${isSubOpen ? "" : "hidden"} absolute top-6 right-6 z-50 my-4 text-base list-none bg-base divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}>
                                    <div class="px-4 py-3" role="none">
                                        <p class="text-sm text-white" role="none">
                                            {user?.displayName}
                                        </p>
                                        <p class="text-sm font-medium truncate " role="none">
                                            {user?.email}
                                        </p>
                                    </div>
                                    <ul class="py-1" role="none">
                                        <li>
                                            <Link to="/" class="block px-4 py-2 text-sm text-white hover:bg-gray-600 " role="menuitem">Home</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" class={`${isOpen ? "-translate-x-full" : ""} fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-base border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-base dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        {/* <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span class="ml-3">Dashboard</span>
                            </a>
                        </li> */}
                        <li>
                            <Link to="/admin/dashboard/admins" class="flex items-center p-2 text-white rounded-lg  hover:bg-gray-600 focus:border-b-2">
                                <RiAdminFill className='flex-shrink-0 w-6 h-6 text-white transition duration-75 group-hover:text-gray-900' />
                                <span class="flex-1 ml-3 whitespace-nowrap">Admins</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/dashboard/fans" class="flex items-center p-2 text-white rounded-lg  hover:bg-gray-600 focus:border-b-2">
                                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                <span class="flex-1 ml-3 whitespace-nowrap">Fans</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" class="flex items-center p-2 text-white rounded-lg  hover:bg-gray-600 focus:border-b-2">
                                <GoReport className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                <span class="flex-1 ml-3 whitespace-nowrap">Reports</span>
                                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="movies/all" class="flex items-center p-2 text-white rounded-lg  hover:bg-gray-600 focus:border-b-2">
                                <MdLocalMovies className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                <span class="flex-1 ml-3 whitespace-nowrap">Movies</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/dashboard/addmovie" class="flex items-center p-2 text-white rounded-lg  hover:bg-gray-600 focus:border-b-2">
                                <MdCreateNewFolder className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                <span class="flex-1 ml-3 whitespace-nowrap">New Movie</span>
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleLogOut} class="flex items-center p-2 text-white rounded-lg  hover:bg-gray-600 focus:border-b-2">
                                <GoSignOut className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
            {/* display */}
            <div className='mr-8 ml-8 md:ml-72 my-20'>
                <Outlet />
            </div>
        </section>
    );
};

export default AdminLayout;