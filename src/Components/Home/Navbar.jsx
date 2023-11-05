// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/alljobs">All Jobs</NavLink></li>
        <li><NavLink to="/applied">Applied Jobs</NavLink></li>
        <li><NavLink to="/addjob">Add a Job</NavLink></li>
        <li><NavLink to="/myjobs">My Jobs</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
    </>
    return (
        <div>
            <div className="bg-gradient-to-r from-[#f6e4e0] to-[#fbfadb]">
                <div className='navbar max-w-5xl mx-auto'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navlinks}
                            </ul>
                        </div>
                        <img className='w-44' src="https://i.ibb.co/vwkpYCm/logo.png" alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="btn"><NavLink to="/login">Login</NavLink></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;