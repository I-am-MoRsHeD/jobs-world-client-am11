import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddJobs from "../pages/AddJobs";
import AllJobs from "../pages/AllJobs";



const router = createBrowserRouter([
    {
        path: '/',
       element: <MainLayout></MainLayout>,
       children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/jobs')
        },
        {
            path: '/alljobs',
            element: <AllJobs></AllJobs>,
            loader: () => fetch('http://localhost:5000/jobs')
        },
        {
            path: '/applied',
            element: <Home></Home>
        },
        {
            path: '/addjob',
            element: <AddJobs></AddJobs>
        },
        {
            path: '/myjobs',
            element: <Home></Home>
        },
        {
            path: '/blogs',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
       ]
    }
])


export default router;

