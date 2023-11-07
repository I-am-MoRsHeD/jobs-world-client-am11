import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddJobs from "../pages/AddJobs";



const router = createBrowserRouter([
    {
        path: '/',
       element: <MainLayout></MainLayout>,
       children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/alljobs',
            element: <Home></Home>
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

