// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const JobDetails = () => {
    const { user } = useContext(AuthContext);
    const {displayName,email} = user;
    const [jobDetails, setJobDetails] = useState([]);
    const jobs = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const findJob = jobs.filter(job => job._id === id);
        setJobDetails(findJob)
    }, [id, jobs])

    // console.log(jobDetails)

    const handleApply = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const resume = form.resume.value;
        console.log(name, email,resume);

    }

    return (
        <div>
            {
                jobDetails.map(jobDetail => <div
                    className='mt-10 mb-72 max-w-5xl mx-auto'
                    key={jobDetail._id}>
                    <img className='w-[800px]' src={jobDetail.photo} alt="Movie" />
                    <div className='absolute -mt-[500px]'>
                        <img className='w-16' src="https://i.ibb.co/VDjjm8p/company-logo.png" alt="" />
                    </div>
                    <div className='bg-[#869780] w-[440px] space-y-5 px-6 py-16 lg:absolute left-[740px] -bottom-72 shadow-2xl rounded-lg'>
                        <h2 className="text-4xl font-bold">{jobDetail.title}</h2>
                        <p>{jobDetail.description
                        }</p>
                        <p>Probable Salary: <span className='font-semibold'>{jobDetail.salary_range}</span></p>
                        <p>Applied Applicants: {jobDetail.applicants}</p>
                        <div className='w-full'>

                            <button className="btn btn-outline w-full" onClick={() => document.getElementById('my_modal_1').showModal()}>Apply</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <form onSubmit={handleApply}>
                                        <div className="form-control mb-6 border-b-2">
                                            <input
                                                type="text"
                                                name="name"
                                                defaultValue={displayName}
                                                placeholder="Name" className="input"
                                            />
                                        </div>
                                        <div className="form-control mb-6 border-b-2">
                                            <input
                                                type="email"
                                                name="email"
                                                defaultValue={email}
                                                placeholder="Email" className="input"
                                            />
                                        </div>
                                        <div className="form-control mb-6 border-b-2">
                                            <input
                                                type="text"
                                                name="resume"
                                                placeholder="Resume Link" className="input"
                                            />
                                        </div>
                                        <div className="form-control mt-6">
                                            <input type="submit" className='btn btn-outline' value="Apply" />
                                        </div>
                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default JobDetails;