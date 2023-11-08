// eslint-disable-next-line no-unused-vars
import React from 'react';

const Blogs = () => {
    return (
        <div className='max-w-6xl my-10 mx-auto'>
            <h2 className="text-6xl font-bold text-center mb-14 mt-5">Important Blogs</h2>
            <div>
                <h2 className="text-4xl mb-2 font-bold">-What is an access token and refresh token? How do they work and where should we
                    store them on the client-side? </h2>
                <div className='bg-gray-200 shadow-lg p-3 rounded-lg'>
                    <h4 className="text-xl bg-purple-400 w-32 p-1 rounded-lg font-semibold">Access Token</h4>
                    <p>Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. The passed token informs the API that the bearer of the token has been authorized to access the API and perform specific actions specified by the Scope that was granted during authorization..</p>

                    <h4 className="text-xl bg-purple-400 w-36 p-1 rounded-lg font-semibold">Refresh Token</h4>
                    <p>A refresh token is a special token that is used to obtain more access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires. You request a refresh token alongside the access and/or ID tokens as part of a users initial authentication and authorization flow. Applications must then securely store refresh tokens since they allow users to remain authenticated.....</p>

                    <h4 className="text-xl bg-purple-400 w-52 p-1 rounded-lg font-semibold">Access Token Work :</h4>
                    <p>Users do not write their own access codes. Servers communicate with devices, and all the work happens in minutes.

                        You will follow a predictable set of steps.

                        --Login: Use a known username and password to prove your identity.
                        --Verification: The server authenticates the data and issues a token.
                        --Storage: The token is sent to your browser for storage.
                        --Communication: Each time you access something new on the server, your token is verified once more.
                        --Deletion: When your session is over, the token is discarded.

                        You can also use access tokens for single sign-on (SSO). Your credentials from one site become your key to enter another. You will follow these steps:

                        --Authorization: You agree to use your credentials from one site to enter another.
                        --Connection: The first site connects the second and asks for help. The second site creates an access token.
                        --Storage: The access token is stored in your browser.
                        --Entry: The access token from the second site gives you entry into the first.</p>

                    <h4 className="text-xl bg-purple-400 w-52 p-1 rounded-lg font-semibold">Refresh Token Work :</h4>
                    <p>The main purpose of using a refresh token is to considerably shorten the life of an access token. The refresh token can then later be used to authenticate the user as and when required by the application without running into problems such as cookies being blocked, etc. If that does not make much sense, think of it this way:

                        When a browser makes a request to an API endpoint to use a resource provided only to authenticated users, the application would require the credentials of the user. And upon authentication (login), the application on the users browser is granted access to the resource. This access is provided by sharing an access token with the users browser so that subsequent API calls from the browser -- which requires the credentials -- can be sent without any hassle.

                        Now in the process of sharing the access token with the user, the system may also provide a refresh token that would later authenticate the user while making the subsequent API calls -- even if the access token has expired -- by requesting a new access token when required.

                        Hence, the refresh tokens allow applications to obtain new access tokens utilizing mere API calls without any need of having users approve cookies, login multiple times, etc</p>

                    <h4 className="text-xl bg-purple-400 w-52 p-1 rounded-lg font-semibold">Store Token</h4>
                    <p>There are 3 and more ways to store that token..1.Memory, 2.Local storage and 3.Cookies..In these ways Cookies is better than others.Cookies parser is safer than other ways.So Access token is stored in cookies....
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-4xl mb-2 mt-5 font-bold">- What is express js? What is Nest JS </h2>
                <div className='bg-gray-200 shadow-lg p-3 rounded-lg'>
                    <h4 className="text-xl bg-purple-400 w-32 p-1 rounded-lg font-semibold">Express js</h4>
                    <p>Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.
                        Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks</p>

                    <h4 className="text-xl bg-purple-400 w-32 p-1 rounded-lg font-semibold">Next js</h4>
                    <p>Next.js is a React framework that gives you building blocks to create web applications.
                        By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, integrations - all while improving the developer and end-user experience.

                        Whether you’re an individual developer or part of a larger team, you can leverage React and Next.js to build fully interactive, highly dynamic, and performant web applications.</p>
                </div>
            </div>
            <div>
                <h2 className="text-4xl mb-2 mt-5 font-bold">-Features of JobsWorld</h2>
                <div className='bg-gray-200 shadow-lg p-3 rounded-lg'>
                    <p>This is basically a job hunting and  posting site..But we provide other services also.Like condoling,helping others to provide information.There are a lot of facilities.One can post for a job and others can apply for the job and so on.In this site,users and company information is obviously safe...</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;