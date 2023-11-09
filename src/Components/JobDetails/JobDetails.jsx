// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const JobDetails = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const [jobDetails, setJobDetails] = useState([]);
    const jobs = useLoaderData();
    const { id } = useParams();
    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;


    useEffect(() => {
        const findJob = jobs.filter(job => job._id === id);
        setJobDetails(findJob)
    }, [id, jobs])

    console.log(jobDetails)

    const handleApply = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const category = form.category.value;
        const title = form.title.value;
        const salary = form.salary.value;
        const email = form.email.value;
        const resume = form.resume.value;
        const newApplicant = jobDetails[0]?.applicants + 1;
        const appliedJob = { 
            name, 
            email, 
            resume,
            photo,
            category,
            title,
            salary,
            newApplicant,
            }

        if (name === jobDetails[0].name) {
            Swal.fire({
                icon: 'error',
                title: 'Opps....!',
                text: 'you cannot apply in your own posted job'
            })
            return;
        }
        else if (currentDate === jobDetails[0].deadline) {
            Swal.fire({
                icon: 'error',
                title: 'Opps....!',
                text: 'The Deadline is over'
            })
            return;
        }



        // added to the database
        fetch('http://localhost:5000/appliedJobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appliedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        icon: 'success',
                        title: 'Nice...',
                        text: 'Job applied successfully!'
                    })
                }
            })
    }

    return (
        <div>
            <Helmet>
            <title>JobsWorld | JobDetails </title>
            </Helmet>
            {
                jobDetails.map(jobDetail => <div
                    className='mt-10 mb-72 max-w-6xl mx-auto'
                    key={jobDetail._id}>
                    <img className='w-[800px]' src={jobDetail.photo} alt="Movie" />
                    <div className='absolute -mt-[500px]'>
                        <img className='w-16' src="https://i.ibb.co/VDjjm8p/company-logo.png" alt="" />
                    </div>
                    <div className='bg-[#eef0ed] w-[440px] space-y-5 px-6 py-16 lg:absolute left-[740px] -bottom-72 shadow-2xl rounded-lg'>
                        <h2 className="text-4xl font-bold">{jobDetail.title}</h2>
                        <p>{jobDetail.description
                        }</p>
                        <p>Probable Salary: <span className='font-semibold'>{jobDetail.salary_range}</span></p>
                        <p>Applied Applicants: {jobDetail?.applicants}</p>
                        <div className='w-full'>

                            <button className="btn btn-outline w-full" onClick={() => document.getElementById('my_modal_1').showModal()}>Apply</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <form onSubmit={handleApply}>
                                        <div className='w-5/6 flex my-10 gap-8 mx-auto'>
                                            <div className='w-1/2 form-control mb-6 border-b-2'>
                                                <label>
                                                    <h2>Image</h2>
                                                </label>
                                                <input className='w-full p-2 rounded-lg' defaultValue={jobDetail.photo} type="text" name="photo" placeholder='Photo URL' id="" />
                                            </div>
                                            <div className='w-1/2 form-control mb-6 border-b-2'>
                                                <label>
                                                    <h2>Title</h2>
                                                </label>
                                                <input className='w-full p-2 rounded-lg' defaultValue={jobDetail.title} type="text" placeholder='Job title' name="title" id="" />
                                            </div>
                                        </div>
                                        <div className='w-5/6 flex my-10 gap-8 mx-auto'>
                                            <div className='w-1/2 form-control mb-6 border-b-2'>
                                                <label>
                                                    <h2>Name</h2>
                                                </label>
                                                <input className='w-full p-2 rounded-lg' type="text" name="name" defaultValue={displayName} placeholder='Name' id="" />
                                            </div>
                                            <div className='w-1/2 '>
                                                <label>
                                                    <h2>Category</h2>
                                                </label>
                                                <select className=' p-1 w-1/2' name="category" id="type">
                                                    <option defaultValue={jobDetail.category
                                                    } value={jobDetail?.category}>{jobDetail.category}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='w-5/6 flex my-10 gap-8 mx-auto '>
                                            <div className='w-1/2 form-control mb-6 border-b-2'>
                                                <label>
                                                    <h2>Salary</h2>
                                                </label>
                                                <input className='w-full p-2 rounded-lg' defaultValue={jobDetail.salary_range} type="text" name="salary" placeholder='$' id="" />
                                            </div>
                                            <div className='w-full form-control mb-6 border-b-2'>
                                                <label>
                                                    <h2>Email</h2>
                                                </label>
                                                <input className=' p-1' type="email" defaultValue={email} name="email" id="" />
                                            </div>
                                        </div>

                                        <div className="form-control mb-6 border-b-2">
                                            <input
                                                type="text"
                                                name="resume"
                                                placeholder="Resume Link" className="input"
                                                required
                                            />
                                        </div>
                                        <div className='w-5/6 mx-auto'>
                                            <input type="submit" className='btn btn-outline w-full' value="Apply" />
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