import React from 'react';
import { connect } from 'react-redux';
import ProfileImg from '../../assets/images/profile.jpg';
import './styles.scss';

const Menu = ({ menuOpen }: any) => {
    return (
        <div className={"navbar " + (menuOpen ? 'open' : '')}>
            <div className="profile">
                <div className="profile-image-container">
                    <img src={ProfileImg} className="profile-image" alt="Profile" />
                </div>
                <h3 className="title-name">Felipe Chan</h3>
                <p className="subtitle">Fullstack developer</p>
            </div>

            <div className="site-nav">
                <ul className="header-main-menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Me</a></li>
                    <li><a href="/">Resume</a></li>
                    <li><a href="/">Portfolio</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>

            <div className="copyrights">
                <span>© 2020 All rights reserved.</span>
            </div>
        </div>
    )
}

export default connect((state: any) => ({ menuOpen: state.menu.menuOpen }))(Menu);

