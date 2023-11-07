// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllJobs = () => {
    const jobs = useLoaderData();
    console.log(jobs)

    const handleDetails = id => {
        console.log(id)
    }

    return (
        <div>
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
                            jobs.map(job => <tr key={job._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{job.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className='font-semibold'>{job.title}</span>
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Posted: {job.date}</span>
                                </td>
                                <td>{job.deadline}</td>
                                <td>{job.salary_range}</td>
                                <th>
                                    <Link to={`/alljobs/${job._id}`}>
                                        <button onClick={() => handleDetails(job._id)} className="btn btn-ghost btn-sm">details</button>
                                    </Link>
                                    {/* <button onClick={() => handleDetails(job._id)} className="btn btn-ghost btn-sm">details</button> */}
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};



export default AllJobs;