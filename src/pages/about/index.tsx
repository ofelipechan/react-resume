import React, { Component } from 'react';
import { Map } from '@styled-icons/boxicons-regular/Map';
import './styles.scss';

export default class About extends Component {
    render() {
        return (
            <div className="background-dark">
                <div className="title-section">
                    <h1 className="title-page">About me</h1>
                </div>
                <div className="about-section-description">
                    <h2>Felipe Chan</h2>
                    <p><Map size="15" /> Sao Paulo, Brazil</p>
                    <div className="about-description">
                        <p>Software Engineer with more than 4 years of experience developing tech solutions.</p>
                        <p>I have worked in many digital projects always trying to follow coding best practices to build systems with more integrity, best performance and good maintainability. I try to pay attention to every detail of systems I work to develop it with the best quality and user experience possible.</p>
                        <p>Currently I'm working as a Fullstack Software Engineer at a startup in Brazil called Férias & Co., which is a company from the travel industry.</p>
                        <p>My native language is Portuguese, but I'm also an English speaker.</p>
                    </div>
                </div>
            </div>
        )
    }
}
