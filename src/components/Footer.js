import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container text-center section-padding-y">
                    <div className="row px-4">

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <div className="text-center">
                            <img src="/images/people/mayank.jpeg" alt="Avatar" width="300" className="contact-img"/>
                        </div>
                        </div>
                        <div className="col-lg-7 mx-auto">
                            <h2 className="text-uppercase mb-0">Mayank Yadav </h2>
                            <h6 className="text-prim text-uppercase mb-0 letter-spacing-3">Full-stack Web Developer</h6>
                            <p className="text-muted my-4">Check out my work or follow my activity in these platforms as well.</p>
                            <ul className="list-inline mb-0">
                            <li className="list-inline-item"><a className="social-link" href="https://www.linkedin.com/in/mbyadav9"><i className="fab fa-linkedin"></i></a></li>
                            <li className="list-inline-item"><a className="social-link" href="https://dev.to/mby9"><i className="fab fa-dev"></i></a></li>
                                <li className="list-inline-item"><a className="social-link" href="https://twitter.com/_mby_9"><i className="fab fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a className="social-link" href="https://github.com/Mby9"><i className="fab fa-github"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyrights px-4">
                    <div className="container py-4 border-top text-center">
                        <p className="mb-0 text-muted py-2 copyright">&copy; All rights reserved. Design inspired from <a href="https://bootstraptemple.com">Bootstrap Temple</a>. </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;