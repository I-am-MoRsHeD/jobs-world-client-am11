// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)
    }
    return (
        <div>
            <div className='lg:w-1/2 mx-auto my-10'>
                <div className='border-2 rounded-md border-orange-500'>
                    <h2 className="text-4xl font-bold pl-10 mt-10">Register</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control mb-6 border-b-2">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name" className="input text-white"
                                required />
                        </div>
                        <div className="form-control mb-6 border-b-2">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email" className="input text-white"
                                required />
                        </div>
                        <div className="form-control mb-6 border-b-2">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password" className="input"
                                required />
                        </div>
                        <div className="form-control mb-6 border-b-2">
                            <input
                                name="photo"
                                placeholder="Photo URL" className="input text-white"
                                required />
                        </div>
                        <div className='flex justify-between mt-4'>
                            <div>
                                <input type="checkbox" name="checkbox" id="checkbox" />
                                <label htmlFor="checkbox" className='font-bold ml-1'>Remember Me</label>
                            </div>
                        </div>
                        <div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning hover:btn-ghost">Register</button>
                        </div>
                        <div className='mt-2'>
                            <p>Already have an account? Please <Link className='font-semibold text-orange-500 underline' to='/login'>Login</Link></p>
                        </div>
                    </form>
                </div>
                {/* PopUp componenets */}
                {/* <div className='w-3/4 mt-8 mx-auto'>
                <p className='text-center font-bold mb-5 text-2xl'>Or</p>
                <div className='flex lg:justify-start mt-2 rounded-full py-1 px-2 border-2 bg-slate-600 text-white '>
                    <button onClick={handleGoogle} className='font-semibold p-2 flex items-center'>
                        <span className='lg:mr-16 mr-10 lg:text-2xl text-base'><FaGoogle></FaGoogle></span> <span className='lg:text-2xl text-sm'>Continue With Google</span>
                    </button>
                </div>

            </div> */}

            </div>
        </div>
    );
};

export default Register;