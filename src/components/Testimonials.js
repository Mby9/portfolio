import React from 'react';

const Testimonials = () => {
    return (
        <div>
            <section id="testimonials" className="testimonials-section bg-gray">
                <div className="container">
                <header className="mb-5 pb-4">
                <p className="font-weight-bold text-prim text-uppercase letter-spacing-3">They can't stop talking about me</p>
                <h2 className="text-uppercase lined">Testimonials</h2>
            </header>
                    <ul data-animate="fadeInUp" className="testimonials equalize-height col-md-12">
                        <li className="testimonial-item col-md-4" key="1">
                            <div className="testimonial">
                                <div className="testimonial-body">
                                    <p>Mayank is highly skilled in technologies like Java, Spring and JavaScript. He is a great team player and quick learner with very sound technical and communication skills. I always look forward to working with him again, it would be a great opportunity for me. Thanks to being a great colleague and good friend as well.</p>
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <div className="testimonial-footer">
                                    <img src="/images/people/abhinav.jpeg" alt="user" />
                                    <h5>Abhinav Shukla</h5>
                                    <h6>GlobalLogic</h6>
                                </div>
                            </div>

                        </li>
                        <li className="testimonial-item col-md-4" key="2">
                            <div className="testimonial">
                                <div className="testimonial-body">
                                    <p>Over enthusiast tech-savvy person. This is the best way to describe Mayank's as a developer. He is always passionate towards his work, which makes him a must have person in the team. He will always pick the difficult task, put his brains and gives you the results with his perfect blend of required skills.</p>
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <div className="testimonial-footer">
                                    <img src="/images/people/anuj.jpeg" alt="user" />
                                    <h5>ANuj Ladia</h5>
                                    <h6>StoryXpress</h6>
                                </div>
                            </div>


                        </li>
                        <li className="testimonial-item col-md-4" key="3">
                            <div className="testimonial">
                                <div className="testimonial-body">
                                    <p>Mayank has been a fantastic colleague to work with. His attributes such as taking complete ownership, zeal to learn new stuff and openness to new aspects of work make him a very reliable person. During our time at Vizexperts, Mayank got to wear many hats and he handled all those responsibilities with solace. I wish him all the best!</p>
                                    <i className="fas fa-quote-right"></i>
                                </div>
                                <div className="testimonial-footer">
                                    <img src="/images/people/paras.png" alt="user" />
                                    <h5>Paras Kashyap</h5>
                                    <h6>RapidSoft Technologies</h6>
                                </div>
                            </div>


                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Testimonials;