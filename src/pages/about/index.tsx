import React from 'react';
import { Map } from '@styled-icons/boxicons-regular/Map';
import GuyProgrammingImg from '../../assets/images/guy-programming.png';
import { Suitcase } from '@styled-icons/remix-line/Suitcase';
import { Layer } from '@styled-icons/boxicons-regular/Layer';
import { HappyHeartEyes } from '@styled-icons/boxicons-regular/HappyHeartEyes';
import { CodeAlt } from '@styled-icons/boxicons-regular/CodeAlt';
import { Layout } from '@styled-icons/boxicons-regular/Layout';
import { FileEarmarkTextFill } from '@styled-icons/bootstrap/FileEarmarkTextFill';
import './styles.scss';
import { useHistory } from 'react-router-dom';

export default function About() {
    const history = useHistory();
    const navigateToResume = () => {
        window.scrollTo(0, 0)
        history.push('/resume');
    }

    return (
        <div className="container background-dark">
            <div className="title-section">
                <h1 className="title-page">About me</h1>
            </div>
            <div className="about-description-container row order-lg-1">
                <div className="about-description-section">
                    <h2>Felipe S. Chan</h2>
                    <p>Located in: <a href="https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/@-23.6821604,-46.8754836,10z/data=!3m1!4b1!4m5!3m4!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5505199!4d-46.6333094" rel="noreferrer" target="_blank"><Map size="15" />Sao Paulo, Brazil</a> 🇧🇷</p>
                    <div className="about-description">
                        <p>I am a Brazillian Full Stack Software Engineer with 5 years of experience developing tech solutions.<br />
                            On my trajetory, I have worked in many digital projects always trying to follow coding best practices to build systems with more integrity, best performance and good maintainability.
                            During my careear, I have built complex and scalable solutions for clients from small startups to large companies.
                            </p>
                        <p>I try to pay attention to every detail of systems I work to develop it with the best user experience, quality and security possible.</p>
                        <p>My native language is Portuguese, but I'm also an English speaker.</p>
                    </div>
                </div>
                <div className="description-summary order-lg-3">
                    <div className="summary row">
                        <div className="icon">
                            <Suitcase size="20" />
                        </div>
                        <div className="icon-info">
                            <h6>+5 Years</h6>
                            <p>Experience</p>
                        </div>
                    </div>
                    <div className="summary row">
                        <div className="icon">
                            <Layer size="20" />
                        </div>
                        <div className="icon-info">
                            <h6>+10 projects</h6>
                            <p>Delivered</p>
                        </div>
                    </div>
                    <div className="summary row">
                        <div className="icon">
                            <HappyHeartEyes size="20" />
                        </div>
                        <div className="icon-info">
                            <h6>Great feedbacks</h6>
                            <p>From clients</p>
                        </div>
                    </div>
                </div>

                <div className="icon-guy-programming order-lg-2">
                    <img src={GuyProgrammingImg} alt="Programming" />
                </div>

            </div>

            <div className="special-block">
                <div className="special-title">
                    <h2>My Services</h2>
                    <span>What I Actually Do</span>
                </div>
                <div className="row row-margin">
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="service-icon">
                            <Layout size="40" />
                        </div>
                        <h4>Front-end development</h4>
                        <p>Responsible for a website’s user-facing code and the architecture of its immersive user experiences.
                        Everything that you see when you’re navigating around the Internet, from fonts and colors to dropdown menus and sliders, is part of a Front-end developer's job.
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <div className="service-icon">
                            <CodeAlt size="40" />
                        </div>
                        <h4>Back-end development</h4>
                        <p>Handle the ‘behind-the-scenes’ functionality of front-end applications. It connects an interface to a database, manages user 
                            connections, and powers the web application itself. Back-end development works with the front end to deliver the final product.</p>
                    </div>                    
                </div>
            </div>

            <button className="btn btn-light btn-lg call-to-action-resume" onClick={() => navigateToResume()}><FileEarmarkTextFill size="15" /> Checkout my Resume</button>
        </div>
    )
}
