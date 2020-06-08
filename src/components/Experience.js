import React from 'react';

const Experience = () => {
    return (
        <div>
            <section id="experience">
                <div className="container">
                    <header className="mb-5 pb-4">
                        <p className="font-weight-bold text-prim text-uppercase letter-spacing-3">The years teach much <br />which the days never know</p>
                        <h2 className="text-uppercase lined">Experience</h2>
                    </header>
                    <ul className="timeline">
                        <li className="timeline-item ml-3 pb-4">
                            <div className="timeline-arrow"></div>
                            <div className="row no-gutter">
                                <div className="col-lg-5 mb-4 mb-lg-0">
                                    <p className="font-weight-bold mb-2 text-prim text-small">October 2018 - Present </p>
                                    <h2 className="h5 mb-0 text-uppercase">Vizexperts</h2>
                                    <p className="text-small mb-0">Senior Full-Stack Developer</p><span className="small text-muted">Gurgaon, HR</span>
                                </div>
                                <div className="col-lg-7">
                                    <p className="text-muted">Leading the product development process through design, documentation and planning. Also, asserting efficiency of the team through sprint planning, task allocation, brain-storming, issue resolution and code reviews.</p>
                                    <p className="text-muted">Worked closely with the client (INCOIS, Hyderabad) for ensuring robustness of the product while dealing with large data sets for working on GIS and Oceanography.</p>
                                </div>
                            </div>
                        </li>
                        <li className="timeline-item ml-3 pb-4">
                            <div className="timeline-arrow"></div>
                            <div className="row no-gutter">
                                <div className="col-lg-5 mb-4 mb-lg-0">
                                    <p className="font-weight-bold mb-2 text-prim text-small">January 2017 - October 2018 </p>
                                    <h2 className="h5 mb-0 text-uppercase">Newgen Software</h2>
                                    <p className="text-small mb-0">Software Engineer</p><span className="small text-muted">Noida, UP</span>
                                </div>
                                <div className="col-lg-7">
                                    <p className="text-muted">Worked with the client, Wellcare, to develop Enrollment Apllication for Medicaid and Medicare. Along with add-on applications wuch as Appeals and Grievance and Provider-Contracting.</p>
                                    <p className="text-muted">Worked on the development of a FATCA compliance portal for Revenue Departments of countries such as Antigua, Barbados, Bahamas and Dominican Republic.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Experience;