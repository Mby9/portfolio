import React from 'react';
import "../styles/css/style.red.css";

const Hero = () => {
    return (
        <div>
            <section className="hero bg-cover bg-center mt-5" id="hero" style={{background: "../public/images/author.jpg"}}>
                <div className="container py-5 my-5 index-forward">
                    <div className="row">
                        <div className="col-md-8 text-white">
                            <h2 className="h4 text-prim font-weight-normal mb-0">Hi, I am</h2>
                            <h1 className="text-uppercase text-xl mb-0">Mayank <br /><span className="text-prim">Yadav</span></h1>
                            <h2 className="h4 font-weight-normal mb-5">Full Stack Web Developer</h2>
                            <h1 className="text-prim text-shadow">Hello, bonjour, नमस्ते !</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;