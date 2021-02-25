import React from 'react';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { Github  } from '@styled-icons/boxicons-logos/Github';
import { MailWithCircle } from '@styled-icons/entypo-social/MailWithCircle';
import './styles.scss';

export default function Contact() {
    return (
        <div className="container background-dark">
            <div className="title-section">
                <h1 className="title-page">Contact</h1>
            </div>

            <div className="section-head">
                <h2><span>Know where</span>
                To find me</h2>
            </div>
            <div className="contact-icons">
                <p><LinkedinWithCircle className="icon" size="40" /><a href="https://www.linkedin.com/in/felipechan/" target="_blank" rel="noreferrer">Linkedin</a></p>
                <p><Github className="icon" size="40" /><a href="https://github.com/ofelipechan" target="_blank" rel="noreferrer">Github</a></p>
                <p><MailWithCircle className="icon" size="40" /><a href="mailto:contato.felipechan@gmail.com" target="_blank" rel="noreferrer">E-mail</a></p>
            </div>
        </div>
    )
}
