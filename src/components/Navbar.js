import React from 'react';

const Navbar = () => {
    return (
        <div>
            <header className="header">
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src="/images/brand.png" title="Maydev"
                        data-placement="bottom" data-toggle="tooltip" alt="" className="d-block brand" width="180" /></a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fas fa-bars"></i></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link link-scroll active" href="#hero">Home <span className="sr-only">(current)</span></a></li>
                                <li className="nav-item"><a className="nav-link link-scroll" href="#about">About</a></li>
                                <li className="nav-item"><a className="nav-link link-scroll" href="#experience">Experience</a></li>
                                <li className="nav-item"><a className="nav-link link-scroll" href="#education">Education</a></li>
                                <li className="nav-item"><a className="nav-link link-scroll" href="#testimonials">Testimonials</a></li>
                                <li className="nav-item"><a className="nav-link link-scroll" href="#projects">Projects</a></li>
                                <li className="nav-item"><a className="nav-link link-scroll" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;