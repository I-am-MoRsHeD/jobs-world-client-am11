import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddJobs from "../pages/AddJobs";
import AllJobs from "../pages/AllJobs";
import JobDetails from "../Components/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyJobs from "../pages/MyJobs";
import UpdateJob from "../Components/UpdateJob/UpdateJob";
import AppliedJobs from "../pages/AppliedJobs";
import Blogs from "../pages/Blogs";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://jobs-world-server-am11-lt5zm4spz-i-am-morsheds-projects.vercel.app/jobs')
            },
            {
                path: '/alljobs',
                element: <AllJobs></AllJobs>,
                loader: () => fetch('https://jobs-world-server-am11-lt5zm4spz-i-am-morsheds-projects.vercel.app/jobs')
            },
            {
                path: '/alljobs/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: () => fetch('https://jobs-world-server-am11-lt5zm4spz-i-am-morsheds-projects.vercel.app/jobs')
            },
            {
                path: '/applied',
                element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
            },
            {
                path: '/addjob',
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>,
            },
            {
                path: '/myjobs',
                element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>,
                loader: () => fetch('https://jobs-world-server-am11-lt5zm4spz-i-am-morsheds-projects.vercel.app/jobs')
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
                loader: () => fetch('https://jobs-world-server-am11-lt5zm4spz-i-am-morsheds-projects.vercel.app/jobs')
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
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

