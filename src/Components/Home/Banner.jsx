// eslint-disable-next-line no-unused-vars
import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/1MLRp4F/banner2.jpg')] bg-cover h-[100vh]  mb-10 overflow-x-hidden">
            <div className='h-full w-full backdrop-brightness-50 flex flex-col justify-center pl-40 space-y-8'>

                <h1 className="text-7xl font-bold">Find Your Desired <br /> <span className='text-yellow-600'>Jobs Here</span></h1>
                <p className='text-lg text-lime-100'>A trusted platform for hunting and posting about jobs.You can find all types of jobs here</p>
                <div>
                    <input className='w-1/2 py-3 rounded-lg bg-white' type="text" name="" id="" />
                    <input className='btn btn-outline ml-2 btn-warning' type="submit" value="Search" />
                </div>

            </div>

        </div>
    );
};

export default Banner;