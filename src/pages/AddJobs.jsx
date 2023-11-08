// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddJobs = () => {
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(null);
    const [applicants, setApplicants] = useState(0);


    const handleAddJob = e => {
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
        const job = {
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
        console.log(job)

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(job)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow....!',
                        text: 'Successfully added a job'
                    })
                }
            })


        // onsite: https://i.ibb.co/CszL8DN/onsite.jpg
        //remote: https://i.ibb.co/8r5RmZZ/remote.jpg
        // hybrid: https://i.ibb.co/D5pZdVx/hybrid.jpg
        // partTime: https://i.ibb.co/3d9QGcp/partTime.jpg
        // We are searching for an experienced Web Developer for your task..Must be 2 years experienced on react-js,node-js and express js also..And also be expert on css framework and others....


    }

    return (
        <div className='lg:my-10 my-3 py-10  rounded-tl-full rounded-tr-full bg-cyan-600'>
            <Helmet>
                <title>JobsWorld | AddJob </title>
            </Helmet>
            <h2 className="lg:text-4xl text-2xl mb-10 font-semibold text-center">Add a Product, <br /> Whatever you want</h2>
            <form onSubmit={handleAddJob}>
                <div className='w-5/6 flex my-10 gap-8 mx-auto'>
                    <div className='w-1/2'>
                        <label>
                            <h2>Image</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="text" name="photo" placeholder='Photo URL' id="" />
                    </div>
                    <div className='w-1/2'>
                        <label>
                            <h2>Title</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="text" placeholder='Job title' name="title" id="" />
                    </div>
                </div>
                <div className='w-5/6 flex my-10 gap-8 mx-auto'>
                    <div className='w-1/2'>
                        <label>
                            <h2>Name</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="text" name="name" defaultValue={user?.displayName
                        } placeholder='Name' id="" />
                    </div>
                    <div className='w-1/2'>
                        <label>
                            <h2>Category</h2>
                        </label>
                        <select className=' p-1 w-1/2' name="category" id="type">
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
                        <input className='w-full p-2 rounded-lg' type="text" name="salary" placeholder='$' id="" />
                    </div>
                    <div className='w-1/2'>
                        <label>
                            <h2>Email</h2>
                        </label>
                        <input className='w-full p-2 rounded-lg' type="email" name="email" defaultValue={user?.email
                        } placeholder='Email' id="" />
                    </div>
                </div>
                <div className='w-5/6 flex my-10 gap-8 mx-auto '>
                    <textarea name="desc" id="" placeholder='Short Description' cols="100" rows="3"></textarea>
                    <div className='w-1/2'>
                        <label>
                            <h2>Posting Date (MM/DD/YYYY)</h2>
                        </label>
                        <input className=' p-1 w-1/2' type="date" name="date" id="" />
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
                            placeholderText='Fix a deadline'
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            minDate={new Date()}
                            dateFormat='dd/MM/yyyy'
                        />
                    </div>
                    <div className='w-1/2'>
                        <label>Applicants :  </label>
                        <input className='w-10 pl-2' type="number" value={applicants} name="applicants" id="" />
                    </div>

                </div>
                <div className='w-5/6 mx-auto'>
                    <input type="submit" className='btn w-full' value="Add Job" />
                </div>
            </form>
        </div>
    );
};

export default AddJobs;