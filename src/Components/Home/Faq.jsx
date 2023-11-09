// eslint-disable-next-line no-unused-vars
import React from 'react';

const Faq = () => {
    return (
        <div className='flex gap-5 items-center my-20 max-w-5xl mx-auto'>
            <div>
                <img src="https://i.ibb.co/6wqKk1T/FAQs.gif" alt="" />
            </div>
            <div className='space-y-4'>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Why choose Us?
                    </div>
                    <div className="collapse-content">
                        <p>We are providing you the best quality of service.And every of our customer is rating us much well..</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Is searching for the best online job website?
                    </div>
                    <div className="collapse-content">
                        <p>Here is your site for posting jobs and finding any kinds of response and solution regarding jobs is here..</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Is jobs information safe here?
                    </div>
                    <div className="collapse-content">
                        <p>Of course.We are protecting our data in our own security protectors and also we are not disappointed our customers and visitors...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;