import React, { Component } from 'react';
import { Map } from '@styled-icons/boxicons-regular/Map';
import GuyProgrammingImg from '../../assets/images/guy-programming.png';
import { Suitcase } from '@styled-icons/entypo/Suitcase';
import { Layer } from '@styled-icons/boxicons-regular/Layer';
import { HappyHeartEyes } from '@styled-icons/boxicons-regular/HappyHeartEyes';
import { CodeAlt } from '@styled-icons/boxicons-regular/CodeAlt';
import { Layout } from '@styled-icons/boxicons-regular/Layout';
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare';
import './styles.scss';

export default class About extends Component {
    render() {
        return (
            <div className="container background-dark">
                <div className="title-section">
                    <h1 className="title-page">About me</h1>
                </div>
                <div className="about-description-container row order-lg-1">
                    <div className="about-description-section">
                        <h2>Felipe S. Chan</h2>
                        <p><a href="https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/@-23.6821604,-46.8754836,10z/data=!3m1!4b1!4m5!3m4!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5505199!4d-46.6333094" rel="noreferrer" target="_blank"><Map size="15" /> Sao Paulo, Brazil</a></p>
                        <div className="about-description">
                            <p>A Software Engineer with more than 4 years of experience developing tech solutions.<br />
                                I have worked in many digital projects always trying to follow coding best practices to build systems with more integrity, best performance and good maintainability. I try to pay attention to every detail of systems I work to develop it with the best quality and user experience possible.</p>
                            <p>During my careear, I have built complex solutions for clients from small startups to large companies.</p>
                            <p>Currently I'm working as a Fullstack Software Engineer at a startup in Brazil called Férias & Co., which is a company from the travel industry.</p>
                            <p>My native language is Portuguese, but I'm also an English speaker.</p>
                        </div>
                    </div>
                    <div className="description-summary order-lg-3">
                        <div className="summary row">
                            <div className="icon">
                                <Suitcase size="20" />
                            </div>
                            <div className="icon-info">
                                <h6>+4 Years Job</h6>
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

                <div className="about-special-block">
                    <div className="special-title">
                        <h2>My Services</h2>
                        <span>What Actually I Do</span>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="service-icon">
                                <Layout size="40" />
                            </div>
                            <h4>Front-end development</h4>
                            <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa,
                            sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.</p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="service-icon">
                                <CodeAlt size="40" />
                            </div>
                            <h4>Back-end development</h4>
                            <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa,
                            sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.</p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="service-icon">
                                <FacebookSquare size="40" />
                            </div>
                            <h4>Social Media Marketing</h4>
                            <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa,
                            sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
