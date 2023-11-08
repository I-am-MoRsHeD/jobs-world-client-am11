// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const JobCategories = ({ job }) => {
    const { _id, name, photo, deadline, category, title, salary_range, date, applicants } = job;

    return (
        <div>
            <div className="card bg-[#c5f1b6] shadow-xl">
                <figure><img src={photo} alt="Job Thumbnail" /></figure>
                <div className="py-10 px-4 space-y-3">
                    <h2 className="card-title">Posted from <span className='font-bold'>{name}</span></h2>
                    <h2 className="card-title font-extrabold">{title}</h2>
                    <div className='flex gap-3'>
                        <p>Posted: {date}</p>
                        <p>Deadline: {deadline}</p>
                    </div>
                    <div className='flex gap-2'>
                        <p>Salary: {salary_range}</p>
                        <p className="text-xl">Category: <span className='font-bold'>{category}</span></p>
                    </div>
                    <p>Applicants: {applicants}</p>
                    <div className="card-actions justify-end">
                        <Link className="btn btn-warning" to={`/alljobs/${_id}`}>View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCategories;