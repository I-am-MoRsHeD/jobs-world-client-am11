// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const appliedJobs = useLoaderData();

    const [applied, setApplied] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);

    const handleFilterJob = category => {
        if(category === 'All'){
            setDisplayJob(applied);
        }
        else if(category === 'On Site'){
            const onSiteJob = applied.filter(job => job.category === 'On Site');
            setDisplayJob(onSiteJob)
        }
        else if(category === 'Remote'){
            const remoteJob = applied.filter(job => job.category === 'Remote');
            setDisplayJob(remoteJob);
        }
        else if(category === 'Hybrid'){
            const hybridJob = applied.filter(job => job.category === 'Hybrid');
            setDisplayJob(hybridJob);
        }
        else if(category === 'Part Time'){
            const partTimeJob = applied.filter(job => job.category === 'Part Time');
            setDisplayJob(partTimeJob);
        }
    }



    useEffect(() => {
        const myapplied = appliedJobs.filter(appliedJob => appliedJob.email === user?.email);
        setApplied(myapplied);
        setDisplayJob(myapplied);
    }, [appliedJobs, user?.email])

    return (
        <div>
            <Helmet>
            <title>JobsWorld | AppliedJobs </title>
            </Helmet>
            <h2 className="text-5xl text-center mt-5 font-bold font-serif">Your Applied Jobs</h2>
            <div className='max-w-5xl mx-auto'>
                <div className=' w-32 p-1 rounded-lg'>
                    <details className="dropdown">
                        <summary className="m-1 btn btn-accent">Select Category</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-100 rounded-box w-52">
                            <li onClick={() => handleFilterJob('All')}><a>All</a></li>
                            <li onClick={() => handleFilterJob('On Site')}><a>On Site</a></li>
                            <li onClick={() => handleFilterJob('Remote')}><a>Remote</a></li>
                            <li onClick={() => handleFilterJob('Hybrid')}><a>Hybrid</a></li>
                            <li onClick={() => handleFilterJob('Part Time')}><a>Part Time</a></li>
                          
                        </ul>
                    </details>
                    
                </div>
            </div>
            <div className='max-w-5xl mx-auto'>
                {
                    displayJob?.map(job => <div key={job._id} className="flex items-center justify-center gap-5 my-10 rounded-lg shadow-xl hover:shadow-2xl">
                        <figure><img className='w-[800px] rounded-lg' src={job?.photo} alt="Job Thumbnail" /></figure>
                        <div className="w-1/2 p-5 space-y-3 rounded-lg bg-[#e5eae4] h-[405px] pt-36">
                            <h2 className="card-title">Posted from <span className='font-bold'>{job?.name}</span></h2>
                            <h2 className="card-title font-extrabold">{job?.title}</h2>
                            <div className='flex gap-3'>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <p>Salary: <span className='font-bold'>{job?.salary}</span></p>
                                <p className="text-xl">Category: <span className='font-bold'>{job?.category}</span></p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;