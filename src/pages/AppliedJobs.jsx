// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { Margin, usePDF } from 'react-to-pdf';

const AppliedJobs = () => {
    const { user } = useContext(AuthContext);
    const { toPDF, targetRef } = usePDF({
        filename: "usepdf-appliedJobs.pdf",
        page: { margin: Margin.SMALL }
    })
    const [applied, setApplied] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);

    const handleFilterJob = category => {
        if (category === 'All') {
            setDisplayJob(applied);
        }
        else if (category === 'On Site') {
            const onSiteJob = applied.filter(job => job.category === 'On Site');
            setDisplayJob(onSiteJob)
        }
        else if (category === 'Remote') {
            const remoteJob = applied.filter(job => job.category === 'Remote');
            setDisplayJob(remoteJob);
        }
        else if (category === 'Hybrid') {
            const hybridJob = applied.filter(job => job.category === 'Hybrid');
            setDisplayJob(hybridJob);
        }
        else if (category === 'Part Time') {
            const partTimeJob = applied.filter(job => job.category === 'Part Time');
            setDisplayJob(partTimeJob);
        }
    }


    useEffect(() => {
        fetch(`http://localhost:5000/appliedJobs?email=${user?.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setApplied(data)
                setDisplayJob(data);
            })
    }, [user?.email])



    return (
        <div ref={targetRef}>
            <Helmet>
                <title>JobsWorld | AppliedJobs </title>
            </Helmet>

            <div className='max-w-5xl mx-auto flex justify-between'>
                <div className=' w-32 p-1 rounded-lg'>
                    <details className="dropdown dropdown-right">
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
                <div className='pt-5'>
                    <button onClick={toPDF} className="btn">Download PDF</button>
                </div>
            </div>
            <div className='max-w-5xl mt-36 mx-auto'>
                <h2 className="text-5xl text-center mb-5 font-bold font-serif">Your Applied Jobs</h2>
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