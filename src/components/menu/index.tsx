import React, { Component } from 'react';
import ProfileImg from '../../assets/images/profile.jpg';
import './styles.scss';

export class Menu extends Component {
    render() {
        return (
            <header>
                <div className="profile">
                    <div className="profile-image-container">
                        <img src={ProfileImg} className="profile-image" alt="Profile" />
                    </div>
                    <h3 className="title-name">Felipe S. Chan</h3>
                    <p className="subtitle">Fullstack developer</p>
                </div>

                <div className="site-nav">
                    <ul className="header-main-menu">
                        <li><a>Home</a></li>
                        <li><a>About Me</a></li>
                        <li><a>Resume</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>

                <div className="copyrights">
                    <span>© 2020 All rights reserved.</span>
                </div>
            </header>
        )
    }
}

export default Menu
