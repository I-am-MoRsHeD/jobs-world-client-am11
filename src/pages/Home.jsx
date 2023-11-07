// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Banner from '../Components/Home/Banner';
import Faq from '../Components/Home/Faq';
import { useLoaderData } from 'react-router-dom';
import JobCategories from '../Components/Home/JobCategories';
import "../Components/Home/Job.css";

const Home = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    const [cards, setCards] = useState(); 

    const handleJobs = category => {
        setCards(category);
    }

    return (
        <div>
            <Banner></Banner>

            <div className='max-w-5xl mx-auto '>
                <div className='text-center my-10'>
                    <h2 className="text-4xl font-bold">Job Categories</h2>
                    <ul className='tabs gap-4'>
                        <li>All Jobs</li>
                        <li onClick={() => handleJobs(jobs.category)}>On Site</li>
                        <li>Remote</li>
                        <li>Hybrid</li>
                        <li>Part Time</li>
                    </ul>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        jobs.map(job => <JobCategories
                            key={job._id}
                            job={job}
                            setCards={setCards}
                            cards={cards}
                        ></JobCategories>)
                    }
                </div>
            </div>

            <Faq></Faq>
        </div>
    );
};

export default Home;