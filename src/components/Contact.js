import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className="bg-light" id="contact">
                <div className="container">
                    <header className="mb-5 pb-4">
                        <p className="font-weight-bold text-prim text-uppercase letter-spacing-3">Call me, maybe.</p>
                        <h2 className="text-uppercase lined">Contact</h2>
                    </header>
                    <div className="row">
                        <div className="col-lg-2 col-md-6 mb-0 mb-lg-0">
                            <div className="px-4 py-5 text-center contact-item shadow-sm"><i className="fas fa-map-marker-alt fa-2x mb-4"></i>
                                <h4 className="contact-item-title h5 text-uppercase">Location</h4>
                                <p className="text-small mb-0">Gurgaon, Haryana</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-0 mb-lg-0">
                            <div className="px-4 py-5 text-center contact-item shadow-sm"><i className="fas fa-mobile fa-2x mb-4"></i>
                                <h4 className="contact-item-title h5 text-uppercase">Phone</h4>
                                <p className="text-small mb-0">+91 7839 150 740</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-0 mb-lg-0"><a className="px-4 py-5 text-center contact-item shadow-sm d-block reset-anchor" href="mailto:jsmayankyadav@gmail.com"><i className="fas fa-envelope fa-2x mb-4"></i>
                            <h4 className="contact-item-title h5 text-uppercase">Email</h4>
                            <p className="text-small mb-0">jsmayankyadav@gmail.com</p></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;