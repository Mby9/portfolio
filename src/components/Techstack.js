import React from 'react';

const Techstack = () => {
    return (
        <div>
            <section id="customers" className="customers-section bg-gray">
                <div className="container">
                    <div className="col-md-12">
                        <header className="mb-5 pb-4">
                            <p className="font-weight-bold text-prim text-uppercase letter-spacing-3">I <del>drink</del> learn and I know things</p>
                            <h2 className="text-uppercase lined">Technologies</h2>
                        </header>
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="customer"><img src="/images/logos/java.png" title="Java"
                                    data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto" /></div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="customer"><img src="/images/logos/javascript.svg" title="JavaScript"
                                    data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto" /></div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="customer"><img src="/images/logos/linux.png" title="Linux"
                                    data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto" /></div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="customer"><img src="/images/logos/mysql.svg" title="MySQL"
                                    data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto" /></div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="customer"><img src="/images/logos/spring.png" title="Spring"
                                    data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto" /></div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="customer"><img src="/images/logos/react.svg" title="React"
                                    data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto" /></div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="customer"><img src="/images/logos/hibernate.png" title="Hibernate"
                                    data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto" /></div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="customer"><img src="/images/logos/node.png" title="NodeJSB"
                                    data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto" /></div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="customer"><img src="/images/logos/mongodb.svg" title="MongoDB"
                                    data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto" /></div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="customer"><img src="/images/logos/express.png" title="ExpressJS"
                                    data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto" /></div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="customer"><img src="/images/logos/redux.svg" title="Redux"
                                    data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto" /></div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="customer"><img src="/images/logos/threedots.svg" title="More stuff coming"
                                    data-placement="bottom" data-toggle="tooltip" alt="" className="img-fluid d-block mx-auto" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Techstack;