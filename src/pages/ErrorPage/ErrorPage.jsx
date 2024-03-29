// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>


                                </div>

                                <div className="contant_box_404">
                                    <h3 className="text-3xl font-sans font-bold">
                                        Look like you are lost
                                    </h3>

                                    <p>the page you are looking for not avaible!</p>

                                    <Link className='btn btn-accent' to='/'>Go Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;