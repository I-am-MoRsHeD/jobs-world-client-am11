// eslint-disable-next-line no-unused-vars
import React from 'react';

const Review = () => {
    return (
        <div>
            <div className=" min-h-screen my-10 bg-base-400">
            <h2 className="text-4xl mb-10 font-bold text-center font-serif">Share Your Thoughts!</h2>
                <div className="hero-content max-w-5xl mx-auto gap-5 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='' src="https://i.ibb.co/vzj0fMj/Screenshot-49.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-emerald-500">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="name" placeholder="Full Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control border-2 rounded-xl">
                                <textarea className='p-1' name="" placeholder='Thoughts' id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-warning">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;