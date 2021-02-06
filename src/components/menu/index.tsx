import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as MenuAction from '../../store/actions/menu';
import ProfileImg from '../../assets/images/profile.jpg';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function Menu() {
    const menuOpen = useSelector((state: any) => state.menu.menuOpen);
    const dispatch = useDispatch();

    function closeMenu() {
        toggleMenu();
    }

    function toggleMenu() {
        return dispatch(MenuAction.toggleMenu());
    }

    return (
        <div className={"navbar " + (menuOpen ? 'open' : '')}>
            <button className="icon-menu text-white hide-screen-lg" onClick={() => closeMenu()}>
                <CloseOutline size="40" />
            </button>

            <div className="profile">
                <div className="profile-image-container">
                    <Link onClick={() => closeMenu()} to='/'><img src={ProfileImg} className="profile-image" alt="Profile" /></Link>
                </div>
                <h3 className="title-name">Felipe Chan</h3>
                <p className="subtitle">Full stack Software Engineer</p>
            </div>

            <div className="site-nav">
                <ul className="header-main-menu">
                    <li><Link onClick={() => closeMenu()} to='/'>Home</Link></li>
                    <li><Link onClick={() => closeMenu()} to="/about">About Me</Link></li>
                    <li><Link onClick={() => closeMenu()} to="/resume">Resume</Link></li>
                    <li><Link onClick={() => closeMenu()} to="/">Portfolio</Link></li>
                    <li><Link onClick={() => closeMenu()} to="/">Contact</Link></li>
                </ul>
            </div>

            <div className="copyrights">
                <span>© 2020 All rights reserved.</span>
            </div>
        </div>
    )
}
// export default connect((state: any) => ({ menuOpen: state.menu.menuOpen }))(Menu);

