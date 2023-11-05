// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { signUser, signInPopUp } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');

        // signing in user
        signUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    icon: 'success',
                    title: 'Wow....!',
                    text: 'Successfully logged in'
                })
                navigate('/')


            })
            .catch(error => {
                setError(error.message);
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
            <div className='lg:w-1/2 mx-auto my-10'>
                <div className='border-2 rounded-md border-orange-500'>
                    <h2 className="text-4xl font-bold pl-10 mt-10">Login</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control mb-6 border-b-2">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email" className="input"
                                required />
                        </div>
                        <div className="form-control border-b-2">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                className="input" required />
                            <span className='absolute ml-[540px] mt-5' onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
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
                            <button className="btn btn-warning hover:btn-ghost">Login</button>
                        </div>
                        <div className='mt-2'>
                            <p>Do not have an account? <Link className='font-semibold text-orange-500 underline' to='/register'>Create an account</Link></p>
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

export default Login;