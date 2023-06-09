import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import UseIsAdmin from '../../Hooks/useIsAdmin';
import film from '../../Assets/film.png';
import { useQuery } from '@tanstack/react-query';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSub, setIsOpenSub] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseIsAdmin(user?.email);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    const toggleSub = () => {
        setIsOpenSub(!isOpenSub);
    }

    const { data: notification, isLoading } = useQuery({
        queryKey: [user?.email],
        queryFn: async () => {
            const res = await fetch(`https://rate-movie-server-safwanbin2.vercel.app/messages/updateNotification?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })
    const handleLogOut = () => {
        const consent = window.confirm("Are you sure you want to logout?");
        if (consent) {
            logOut()
                .then(() => {
                    toast.success("Successfully logged out");
                })
                .catch(err => {
                    console.error(err);
                    toast.error("failed to log out");
                });
        }
    }

    const navLinks = <>
        <li>
            <Link to='/moviespage' className="block py-2 pl-3 pr-4 text-white border-b-2 focus:border-b-2 border-transparent focus:border-white tracking-wider">Movies</Link>
        </li>
        <li>
            <Link to='/topmovies' className="block py-2 pl-3 pr-4 text-white border-b-2 focus:border-b-2 border-transparent focus:border-white tracking-wider">Top-50 Movies</Link>
        </li>
        <li>
            <Link to='/about' className="block py-2 pl-3 pr-4 text-white border-b-2 focus:border-b-2 border-transparent focus:border-white tracking-wider">About</Link>
        </li>
        <li>
            <Link to='/contact' className="block py-2 pl-3 pr-4 text-white focus:border-b-2 tracking-wider">Contact</Link>
        </li>
    </>

    const subNavLinks = <>
        <li>
            <Link to='/myreviews' className="block px-4 py-2 text-sm text-white hover:bg-gray-600 ">My reviews</Link>
        </li>
        {
            isAdmin ? <li>
                <Link to='/admin/dashboard' className="block px-4 py-2 text-sm text-white hover:bg-gray-600 ">Admin Dashboard</Link>
            </li> : <>
                {
                    isLoading ? <li>
                        <Link to='' className="block px-4 py-2 text-sm text-white hover:bg-gray-600 ">Notifications <span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                            0
                        </span></Link>
                    </li> :
                        <li>
                            <Link to='/messages/notification' className="block px-4 py-2 text-sm text-white hover:bg-gray-600 ">Notifications <span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                                {notification.notifications}
                            </span></Link>
                        </li>
                }
            </>
        }
        <li>
            <Link to='/profile' className="block px-4 py-2 text-sm text-white hover:bg-gray-600 ">Profile</Link>
        </li>
        <li>
            <Link onClick={handleLogOut} className="block px-4 py-2 text-sm text-white hover:bg-gray-600 ">Logout</Link>
        </li>
    </>
    return (
        <nav className="bg-base border-gray-200 shadow-lg dark:bg-gray-900 relative">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to='/' className="flex items-center tracking-wider">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">rateM</span>
                    <img className='w-6 h-6' src={film} alt="" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">vie</span>
                </Link>
                <div className="flex items-center md:order-2">
                    <button onClick={toggleSub} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src={`${user ? user?.photoURL : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhucrCAdxSta_qRn5P8kdjpDnJUGKu1wjtw"}`} alt="user " />
                    </button>
                    <div className={`z-50 top-10 right-14 my-4 text-base list-none bg-base divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${isOpenSub ? "absolute" : "hidden"}`} id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-white dark:text-white">{user ? user?.displayName : "Login options"}</span>
                            {user ? <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span> : ""}
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            {
                                user ? subNavLinks :
                                    <>
                                        <li>
                                            <Link to='/login' className="block px-4 py-2 text-sm text-white hover:bg-gray-600">Login</Link>
                                        </li>
                                        <li>
                                            <Link to='/register' className="block px-4 py-2 text-sm text-white hover:bg-gray-600">Register</Link>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                    <button onClick={toggleNavbar} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className={`items-center justify-between md:flex w-full md:w-auto md:order-1 ${isOpen ? "md:flex" : "hidden"}`} id="mobile-menu-2">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-base md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;