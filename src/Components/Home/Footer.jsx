// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className=" flex flex-col py-10 space-y-10 bg-base-200 text-base-content rounded">
                <div className='flex justify-around items-center'>
                    <div>
                        <img className='w-44' src="https://i.ibb.co/vwkpYCm/logo.png" alt="" />
                    </div>
                    <div>
                        <h3 className="lg:text-4xl text-3xl font-bold pb-5">Socials</h3>
                        <nav className="grid grid-flow-col gap-4">
                            <a className="lg:text-2xl text-xl link link-hover"><BsInstagram></BsInstagram></a>
                            <a className="lg:text-2xl text-xl link link-hover"><BsFacebook></BsFacebook></a>
                            <a className="lg:text-2xl text-xl link link-hover"><FaTwitter></FaTwitter></a>
                            <a className="lg:text-2xl text-xl link link-hover"><BsYoutube></BsYoutube></a>
                        </nav>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col justify-around items-center'>
                    <div className='flex flex-col gap-5'>
                        <h2 className="text-4xl font-bold text-center">Contact With Us!</h2>
                        <p className="text-xl font-semibold bg-gradient-to-t from-red-200 to-emerald-300 p-3 rounded-lg hover:border-blue-600 hover:border-2 hover:from-white hover:to-white">Email: jobsworld@gmail.com</p>
                        <p className="text-xl font-semibold bg-gradient-to-t from-red-200 to-emerald-300 p-3 rounded-lg hover:border-blue-600 hover:border-2 hover:from-white hover:to-white">Phone: +8801987654321</p>
                    </div>
                    <div className='space-y-4 mt-8 lg:mt-0'>
                        <h2 className="text-4xl font-bold ">Our Location</h2>
                        <p className="text-xl">Road:23,Block-B,Chawkbazar,Chattogram <br />
                            Available: Sat-Thu, 9am to 8pm;
                        </p>
                    </div>
                </div>

                <aside className='text-center'>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;