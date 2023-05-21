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
                element: <Movie />,
            },
            {
                path: "/myreviews",
                element: <MyReviews />
            }
        ]
    },
    {
        path: "/admin/dashboard",
        element: <AdminLayout />,
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
            }
        ]
    }
])