// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { createUser, loading, signInPopUp } = useContext(AuthContext);
    const [error, setError] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;


        setError('');
        setShowPassword('');

        if (loading) {
            return <div className='flex justify-center items-center h-screen'>
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        }
        else if (password.length < 6) {
            setError('Password must be 6 character or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError("Password must have atleast one uppercase");
            return;
        }
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setError('Password must have atleast one special letter');
            return;
        }

        // creating user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Wow....!',
                    text: 'Successfully registered'
                })
                navigate(location?.state ? location?.state : '/')


                // updating users profile
                updateProfile(result.user, {
                    ...result.user,
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {

                    })
                    .catch(error => {
                        console.log(error);
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogle = () => {
        signInPopUp()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <Helmet>
            <title>JobsWorld | Register </title>
            </Helmet>
            <div className='lg:w-1/2 mx-auto my-10'>
                <div className='border-2 rounded-md border-orange-500'>
                    <h2 className="text-4xl font-bold pl-10 mt-10">Register</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control mb-6 border-b-2">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name" className="input "
                                required
                            />
                        </div>
                        <div className="form-control mb-6 border-b-2">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email" className="input"
                                required />
                        </div>
                        <div className="form-control mb-6 border-b-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password" className="input"
                                required />
                            <span className='absolute ml-[540px] mt-5' onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </div>
                        <div className="form-control mb-6 border-b-2">
                            <input
                                name="photo"
                                placeholder="Photo URL" className="input"
                                required
                            />
                        </div>
                        <div>
                            {
                                error ? <p className='text-red-600'>{error}</p> : ''
                            }
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
                <div className='w-3/4 mt-8 mx-auto'>
                    <p className='text-center font-bold mb-5 text-2xl'>Or</p>
                    <div className='flex lg:justify-start mt-2 rounded-full py-1 px-2 border-2 bg-slate-600 text-white '>
                        <button onClick={handleGoogle} className='font-semibold p-2 flex items-center'>
                            <span className='ml-52 lg:text-2xl text-base'><FaGoogle></FaGoogle></span>
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;