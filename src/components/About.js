import React from 'react';

const About = () => {
    return (
        <div>
            <section className="bg-light" id="about">
                <div className="container">
                    <header className="mb-5">
                        <p className="font-weight-bold text-prim text-uppercase letter-spacing-3">Innovative solutions</p>
                        <h2 className="text-uppercase lined">Who Am I?</h2>
                    </header>
                    <p className="lead text-muted">I'm a <strong className="text-dark">Software Engineer</strong> with more than 3 years of experience in web development. Working on Java and JavaScript, I am interested in building full-stack web applications. </p>
                    <p className="text-muted">After having invested myself in continuous learning for the past few years, I have gained significant experience in the Web Development domain. I feel comfortable working on and building applications using technologies such as Spring, React, Node, Hibernate, MongoDB, etc. I also have a knack for writing clean code and building scalable and robust applications.</p>
                    <p className="text-muted">Looking at the near future, I intend to be the one-man-team for developing web applications, i.e., take care of everything from design to deployment.
                    Writing blogs is my new found love and some of them can be found here.</p>
                    <p className="text-muted mb-0">When not working, I'm hunting for rare music. I also have a keen interest in quizzes and trivia. So lookout, I may throw random facts at you.</p>
                </div>
            </section>
        </div>
    );
}

export default About;