// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Banner from '../Components/Home/Banner';
import Faq from '../Components/Home/Faq';
import { useLoaderData } from 'react-router-dom';
import JobCategories from '../Components/Home/JobCategories';
import "../Components/Home/Job.css";
import Review from '../Components/Home/Review';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    const [cards, setCards] = useState(jobs);

    const handleJobs = category => {
        if (category === 'All') {
            setCards(jobs)
        }
        else if (category === 'On Site') {
            const onSiteJob = jobs.filter(job => job?.category === 'On Site');
            setCards(onSiteJob)
        }
        else if (category === 'Remote') {
            const remoteJob = jobs.filter(job => job?.category === 'Remote');
            setCards(remoteJob)
        }
        else if (category === 'Hybrid') {
            const hybridJob = jobs.filter(job => job?.category === 'Hybrid');
            setCards(hybridJob)
        }
        else if (category === 'Part Time') {
            const partTimeJob = jobs.filter(job => job?.category === 'Part Time');
            setCards(partTimeJob)
        }
    }

    return (
        <div>
            <Helmet>
                <title>JobsWorld | Home</title>
            </Helmet>
            <Banner></Banner>

            <div className='max-w-5xl mx-auto '>
                <div className='text-center my-10'>
                    <h2 className="text-4xl font-bold">Job Categories</h2>
                    <ul className='tabs gap-4'>
                        <li onClick={() => handleJobs('All')}>All Jobs</li>
                        <li onClick={() => handleJobs('On Site')}>On Site</li>
                        <li onClick={() => handleJobs('Remote')}>Remote</li>
                        <li onClick={() => handleJobs('Hybrid')}>Hybrid</li>
                        <li onClick={() => handleJobs('Part Time')}>Part Time</li>
                    </ul>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        cards?.map(job => <JobCategories
                            key={job._id}
                            job={job}
                        ></JobCategories>)
                    }
                </div>
            </div>

            <Faq></Faq>
            <Review></Review>
        </div>
    );
};

export default Home;