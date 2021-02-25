import React from 'react';
import './styles.scss';
import { InfoCircle } from '@styled-icons/boxicons-solid/InfoCircle';
import { CloudDownload } from '@styled-icons/boxicons-solid/CloudDownload';
import { WorkHistoryMock } from './work-history-mock';
import { EducationMock } from './education-mock';

export default function Resume() {

    function renderTimeline() {
        const list = WorkHistoryMock;
        return list.map((work, index) => (
            <div className={`box ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                <span className="period">{work.period}</span>
                <div className="content">
                    <h5>{work.title} at <a href={work.compannyWebsite} rel="noreferrer" target="_blank">{work.companyName}</a></h5>
                    {work.description ? <p>{work.description}</p> : null} 
                    {work.technologies ? <p><b>Technologies I used:</b> {work.technologies}</p> : null}                
                </div>
            </div>
        ));
    }

    function renderEducation() {
        const list = EducationMock;
        return list.map((education, index) => (
            <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="education-box">
                    <img src={education.image} alt={education.alt} />
                    <h5 className="title">{education.title}</h5>
                    <p className="subtitle">{education.subtitle}</p>
                </div>
            </div>
        ));
    }

    return (
        <div className="container background-dark">
            <div className="title-section">
                <h1 className="title-page">Resume</h1>
            </div>

            <div className="section-head">
                <h2><span>My professional</span>
                    Work History
                </h2>
                <a className="btn btn-primary btn-download" href="/" rel="noreferrer" target="_blank">
                    <CloudDownload className="icon" size="20" />
                    Download PDF Resume
                </a>
            </div>

            <div className="timeline">
                {renderTimeline()}
            </div>


            <div className="special-block">
                <div className="section-head">
                    <h3><span>My professional</span>
                    Work Skills</h3>
                </div>
                <div>
                    <h4>Advanced Skills</h4>
                    <p className="margin-bottom-30">HTML, CSS, SCSS, Javascript, Typescript, Angular 8, Node.js, Express.js.</p>
                    <h4>Intermediate Skills</h4>
                    <p className="margin-bottom-30">GraphQL, React.js, MongoDB, SQL Server, Unit Testing, Mocha.js, Chai.js, AWS Lambda Functions, Serverless Framework, Git Flow.</p>
                    <h4>Basic Skills</h4>
                    <p className="margin-bottom-30">Redux, Next.js, Docker, .NET Core,</p>
                </div>
                <div className="alert alert-info">
                    <span><InfoCircle className="icon" size="20" /><b>Fun fact:</b> This website was made by me using React.js.</span>
                </div>
            </div>

            <div className="section-head">
                <h3><span>My Educational</span>
                    Background History</h3>
            </div>

            <div className="row row-margin education-section">
                {renderEducation()}
            </div>
        </div>
    )
}
