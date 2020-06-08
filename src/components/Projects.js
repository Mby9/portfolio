import React from 'react';

const Projects = () => {
    return (
        <div>
            <section id="projects" class="bg-light">
                <div className="container">
                    <div className="col-sm-12 col-lg-12 col-md-12">
                        <header className="mb-5 pb-4">
                            <p className="font-weight-bold text-prim text-uppercase letter-spacing-3">Does this website count?</p>
                            <h2 className="text-uppercase lined">Projects</h2>
                        </header>

                        <div className="col-lg-6 col-md-6col-sm-6 float-sm-right">
                            <figure>
                                <div className="media" id="proj1"></div>
                                <figcaption>
                                    <svg viewBox="0 0 200 200" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <mask id="mask" x="0" y="0" width="100%" height="100%">
                                                <rect id="alpha" x="0" y="0" width="100%" height="100%" fill-opacity="0.4"></rect>
                                            </mask>
                                        </defs>
                                        <rect id="base" x="0" y="0" width="100%" height="100%" fill-opacity="0.4"></rect>
                                    </svg>
                                    <div className="body">
                                        <h1 className="project-title" dx="50%" dy="2.5em">GEORBIS</h1>
                                        <p>Web based 3D processing and analysis tool for Geo-spatial Data</p>
                                    </div>
                                </figcaption><a href="#"></a>
                            </figure>
                        </div>
                        <div className="col-lg-6 col-md-6col-sm-6 float-sm-right">
                            <figure>
                                <div className="media" id="proj2"></div>
                                <figcaption>
                                    <svg viewBox="0 0 200 200" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <mask id="mask" x="0" y="0" width="100%" height="100%">
                                                <rect id="alpha" x="0" y="0" width="100%" height="100%" fill-opacity="0.4"></rect>
                                            </mask>
                                        </defs>
                                        <rect id="base" x="0" y="0" width="100%" height="100%" fill-opacity="0.4"></rect>
                                    </svg>
                                    <div className="body">
                                        <h1 className="project-title" dx="50%" dy="2.5em">EXXAR</h1>
                                        <p>A web based CAD collaboration and communication platform</p>
                                    </div>
                                </figcaption><a href="#"></a>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;