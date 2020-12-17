import React, { Component } from 'react';
import { Map } from '@styled-icons/boxicons-regular/Map';
import GuyProgrammingImg from '../../assets/images/guy-programming.png';
import { Suitcase } from '@styled-icons/entypo/Suitcase';
import { Layer } from '@styled-icons/boxicons-regular/Layer';
import { HappyHeartEyes } from '@styled-icons/boxicons-regular/HappyHeartEyes';
import { CodeAlt } from '@styled-icons/boxicons-regular/CodeAlt';
import './styles.scss';

export default class About extends Component {
    render() {
        return (
            <div className="container background-dark">
                <div className="title-section">
                    <h1 className="title-page">About me</h1>
                </div>
                <div className="about-description-container row-desktop">
                    <div className="about-description-section">
                        <h2>Felipe S. Chan</h2>
                        <p><Map size="15" /> Sao Paulo, Brazil</p>
                        <div className="about-description">
                            <p>A Software Engineer with more than 4 years of experience developing tech solutions.<br />
                                I have worked in many digital projects always trying to follow coding best practices to build systems with more integrity, best performance and good maintainability. I try to pay attention to every detail of systems I work to develop it with the best quality and user experience possible.</p>
                            <p>Currently I'm working as a Fullstack Software Engineer at a startup in Brazil called Férias & Co., which is a company from the travel industry.</p>
                            <p>My native language is Portuguese, but I'm also an English speaker.</p>
                        </div>
                        <div className="description-summary">
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
                    </div>
                    <div className="icon-guy-programming">
                        <img src={GuyProgrammingImg} alt="Programming" />
                    </div>
                </div>

                <div className="about-special-block">
                    <div className="special-title">
                        <span>What Actually I Do</span>
                        <h2>My Services</h2>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="service-icon">
                                <CodeAlt size="40" />
                            </div>
                            <h4>Web development</h4>
                            <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa,
                            sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
