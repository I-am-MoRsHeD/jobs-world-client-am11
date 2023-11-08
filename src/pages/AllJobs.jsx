// eslint-disable-next-line no-unused-vars
import React, { useContext, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

const AllJobs = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    const [matchedJobs, setMatchedJobs] = useState(jobs);
    const searchRef = useRef(null);



    const handleJobs = () => {
        const searchInput = searchRef.current.value;

        if (searchInput === 'On Site') {
            const onSiteJobs = jobs.filter(job => job?.category === 'On Site');
            setMatchedJobs(onSiteJobs);
        }
        else if (searchInput === 'Remote') {
            const remoteJobs = jobs.filter(job => job?.category === 'Remote');
            setMatchedJobs(remoteJobs);
        }
        if (searchInput === 'Hybrid') {
            const hybridJobs = jobs.filter(job => job?.category === 'Hybrid');
            setMatchedJobs(hybridJobs);
        }
        if (searchInput === 'Part Time') {
            const partTimeJobs = jobs.filter(job => job?.category === 'Part Time');
            setMatchedJobs(partTimeJobs);
        }
    }


    return (
        <div>
            <Helmet>
                <title>JobsWorld | AllJobs</title>
            </Helmet>
            <div>
                <h2 className="text-5xl font-bold text-center mt-5 font-serif border-b-2 border-gray-400 mx-auto w-3/6">All Jobs here</h2>
            </div>
            <div className="form-control flex flex-row gap-2 my-10 w-1/4 ml-32">
                <input
                    type="text"
                    ref={searchRef}
                    name="search"
                    placeholder="Search here by category..." className="input border-2 border-gray-400"
                    required />
                {/* <input type="submit" className='btn w-24 btn-warning' 
                value="Search" /> */}
                <button onClick={handleJobs} className="btn w-24 btn-warning">Search</button>
            </div>
            <div className="overflow-x-auto my-10 max-w-5xl rounded-lg bg-gray-200 shadow-xl mx-auto">
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
                            matchedJobs?.map(job => <tr
                                className='shadow-md rounded-lg'
                                key={job._id}>
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
                                        <button className="btn btn-ghost btn-sm">details</button>
                                    </Link>
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