import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ErrorPage from "../Components/ErrorPage";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Movie from "../Components/Movie";
import MyReviews from "../Pages/MyReviews/MyReviews";
import AdminLayout from "../Layouts/AdminLayout";
import Admins from "../Pages/Admin/Users/Admins";
import Fans from "../Pages/Admin/Users/Fans";
import Movies from "../Pages/Admin/Movies/Movies";
import AddMovie from "../Pages/Admin/AddMovie/AddMovie";
import MoviesPage from "../Pages/MoviesPage/MoviesPage";
import Messages from "../Pages/Admin/Messages/Messages";
import MyProfile from "../Pages/MyProfile/MyProfile";
import TopMovies from "../Pages/TopMovies/TopMovies";
import MessagesNotification from "../Pages/Messages/MessagesNotification";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/moviespage",
                element: <MoviesPage />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/movies/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/movies/${params.id}`),
                element: <PrivateRoute><Movie /></PrivateRoute>,
            },
            {
                path: "/myreviews",
                element: <MyReviews />
            },
            {
                path: "/profile",
                element: <MyProfile />
            },
            {
                path: "/topmovies",
                element: <TopMovies />
            },
            {
                path: "/messages/notification",
                element: <MessagesNotification />
            }
        ]
    },
    {
        path: "/admin/dashboard",
        element: <AdminRoute><AdminLayout /></AdminRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/admin/dashboard",
                element: <Admins />
            },
            {
                path: "/admin/dashboard/admins",
                element: <Admins />
            },
            {
                path: "/admin/dashboard/fans",
                element: <Fans />
            },
            {
                path: "/admin/dashboard/movies/all",
                element: <Movies />
            },
            {
                path: "/admin/dashboard/addmovie",
                element: <AddMovie />
            },
            {
                path: "/admin/dashboard/messages",
                element: <Messages />
            }
        ]
    }
])