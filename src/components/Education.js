import React from 'react';

const Education = () => {
    return (
        <div>
            <section className="bg-light" id="education">
                <div className="container">
                    <header className="mb-5 pb-4">
                        <p className="font-weight-bold text-prim text-uppercase letter-spacing-3">Lazy isn't in my vocabulary.</p>
                        <h2 className="text-uppercase lined">Education</h2>
                    </header>
                    <ul className="timeline">
                        <li className="timeline-item ml-3 pb-4">
                            <div className="timeline-arrow"></div>
                            <div className="row no-gutter">
                                <div className="col-lg-5 mb-4 mb-lg-0">
                                    <p className="font-weight-bold mb-2 text-prim text-small">2020 - 2022 </p>
                                    <h2 className="h5 mb-0 text-uppercase">Master of Science</h2>
                                    <p className="text-small mb-0">Liverpool John Moore's University</p><span className="small text-muted">United Kingdeom</span>
                                </div>
                                <div className="col-lg-7">
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,\
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\
                                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\
                                     Stet clita kasd gubergren, no sea.</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item ml-3 pb-4">
                            <div className="timeline-arrow"></div>
                            <div className="row no-gutter">
                                <div className="col-lg-5 mb-4 mb-lg-0">
                                    <p className="font-weight-bold mb-2 text-prim text-small">Mar 2000 - Feb 2021 </p>
                                    <h2 className="h5 mb-0 text-uppercase">PGD in Full-stack Development</h2>
                                    <p className="text-small mb-0">IIIT Bangalore</p><span className="small text-muted">Bangalore, KA</span>
                                </div>
                                <div className="col-lg-7">
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \
                                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. \
                                    Stet clita kasd gubergren, no sea.</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item ml-3 pb-4">
                            <div className="timeline-arrow"></div>
                            <div className="row no-gutter">
                                <div className="col-lg-5 mb-4 mb-lg-0">
                                    <p className="font-weight-bold mb-2 text-prim text-small">2013 - 2017 </p>
                                    <h2 className="h5 mb-0 text-uppercase">Bachelor of Technology</h2>
                                    <p className="text-small mb-0">KIET Ghaziabad</p><span className="small text-muted">Ghaziabad, UP</span>
                                </div>
                                <div className="col-lg-7">
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, \
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, \
                                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. \
                                    Stet clita kasd gubergren, no sea.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Education;