// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateJob = () => {
    const [startDate, setStartDate] = useState(null);
    const jobs = useLoaderData();
    const { id } = useParams();
    const [jobDetails, setJobDetails] = useState([]);

    useEffect(() => {
        const findJob = jobs.filter(job => job._id === id);
        setJobDetails(findJob)
    }, [id, jobs])
    

    const handleUpdateJob = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const name = form.name.value;
        const email = form.email.value;
        const category = form.category.value;
        const salary = form.salary.value;
        const date = form.date.value;
        const desc = form.desc.value;
        const deadline = form.deadline.value;
        const applicants = form.applicants.value;
        const updateJob = {
            name,
            email,
            photo,
            description: desc,
            deadline,
            category,
            title,
            salary_range: salary,
            date,
            applicants
        };
        console.log(updateJob)


        fetch(`http://localhost:5000/jobs/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateJob)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })


    }

    return (
        <div className='lg:my-10 my-3 py-10  rounded-tl-full rounded-tr-full bg-cyan-600'>
            <form onSubmit={handleUpdateJob}>
                <div className='w-5/6 flex my-10 gap-8 mx-auto'>
                    <div className='w-1/2'>
                        <label>
                            <h2>Image</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="text" defaultValue={jobDetails[0]?.photo} name="photo" placeholder='Photo URL' id="" />
                    </div>
                    <div className='w-1/2'>
                        <label>
                            <h2>Title</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="text" defaultValue={jobDetails[0]?.title} placeholder='Job title' name="title" id="" />
                    </div>
                </div>
                <div className='w-5/6 flex my-10 gap-8 mx-auto'>
                    <div className='w-1/2'>
                        <label>
                            <h2>Name</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="text" defaultValue={jobDetails[0]?.name} name="name" placeholder='Name' id="" />
                    </div>
                    <div className='w-1/2'>
                        <label>
                            <h2>Category</h2>
                        </label>
                        <select className=' p-1 w-1/2' name="category" defaultValue={jobDetails[0]?.category} id="type">
                            <option value="On Site">On Site</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Part Time">Part Time</option>
                        </select>
                    </div>
                </div>
                <div className='w-5/6 flex my-10 gap-8 mx-auto '>
                    <div className='w-1/2'>
                        <label>
                            <h2>Salary</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="text" defaultValue={jobDetails[0]?.salary_range} name="salary" placeholder='$' id="" />
                    </div>
                    <div className='w-1/2'>
                        <label>
                            <h2>Email</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="email" defaultValue={jobDetails[0]?.email} name="email" placeholder='Email' id="" />
                    </div>
                </div>
                <div className='w-5/6 flex my-10 gap-8 mx-auto '>
                    <textarea name="desc" id="" placeholder='Short Description' defaultValue={jobDetails[0]?.description} cols="100" rows="3"></textarea>

                    <div className='w-1/2'>
                        <label>
                            <h2>Posting Date (MM/DD/YYYY)</h2>
                        </label>
                        <input className=' p-1 w-1/2' defaultValue={jobDetails[0]?.date} type="date" name="date" id="" />
                    </div>
                </div>
                <div className='w-5/6 flex my-10 gap-8 mx-auto '>
                    <div className='w-1/2 flex gap-2'>
                        <label>
                            <h2>Application Deadline: </h2>
                        </label>
                        <DatePicker
                            className='p-1'
                            name='deadline'
                            defaultValue={jobDetails[0]?.deadline}
                            placeholderText='Fix a deadline'
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            minDate={new Date()}
                            dateFormat='dd/MM/yyyy'
                        />
                    </div>
                    <div className='w-1/2'>
                        <label>Applicants :  </label>
                        <input className='w-10 pl-2' defaultValue={jobDetails[0]?.applicants} type="number" name="applicants" id="" />
                    </div>

                </div>
                <div className='w-5/6 mx-auto'>
                    <input type="submit" className='btn w-full' value="Update Job" />
                </div>
            </form>
        </div>
    );
};

export default UpdateJob;