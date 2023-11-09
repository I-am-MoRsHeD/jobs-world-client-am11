// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const MyJobs = () => {
    const { user } = useContext(AuthContext);
    const jobs = useLoaderData();
    const [myJobs, setMyJobs] = useState([]);


    useEffect(() => {
        const findJobs = jobs.filter(job => job.email === user?.email)
        setMyJobs(findJobs)
    }, [jobs, user?.email])

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://jobs-world-server-am11-lt5zm4spz-i-am-morsheds-projects.vercel.app/jobs/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaining = myJobs.filter(myjob => myjob._id !== id)
                        setMyJobs(remaining);
                    })
            }
        });
    }


    return (
        <div>
            <Helmet>
                <title>JobsWorld | MyJobs </title>
            </Helmet>
            <div className="overflow-x-auto max-w-6xl mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Posted by</th>
                            <th>Job</th>
                            <th>Deadline</th>
                            <th>Salary Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myJobs.map(myJob => <tr key={myJob._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{myJob.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className='font-semibold'>{myJob.title}</span>
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Posted: {myJob.date}</span>
                                </td>
                                <td>{myJob.deadline}</td>
                                <td>{myJob.salary_range}</td>
                                <th>
                                    <div className='flex flex-col gap-2'>
                                        <Link to={`/update/${myJob._id}`}>
                                            <button className="btn btn-ghost btn-outline btn-sm">Update</button>
                                        </Link>
                                        <Link >
                                            <button onClick={() => handleDelete(myJob._id)} className="btn btn-error btn-outline btn-sm">Delete</button>
                                        </Link>
                                    </div>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;