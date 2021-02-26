import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as MenuAction from '../../store/actions/menu';
import ProfileImg from '../../assets/images/profile.jpg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { HouseDoorFill } from '@styled-icons/bootstrap/HouseDoorFill';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { PersonFill } from '@styled-icons/bootstrap/PersonFill';
import { File } from '@styled-icons/boxicons-solid/File';
// import { Award } from '@styled-icons/fa-solid/Award';
// import { PaperPlane } from '@styled-icons/boxicons-solid/PaperPlane';
import { MagnifyingGlass } from '@styled-icons/entypo/MagnifyingGlass';
import './styles.scss';

export default function Menu() {
    const location = useLocation();
    const menuOpen = useSelector((state: any) => state.menu.menuOpen);
    const dispatch = useDispatch();
    const pages = [
        { name: 'Home', path: '/', icon: <HouseDoorFill size="20" /> },
        { name: 'About', path: '/about', icon: <PersonFill size="20" /> },
        { name: 'Resume', path: '/resume', icon: <File size="20" /> },
        // { name: 'Portfolio', path: '/portfolio', icon: <Award size="20" /> },
        { name: 'Find me', path: '/contact', icon: <MagnifyingGlass size="20" /> },
    ];

    function closeMenu() {
        toggleMenu();
    }

    function toggleMenu() {
        return dispatch(MenuAction.toggleMenu());
    }

    function onPageSelected() {
        window.scrollTo(0, 0);
        if (menuOpen) {
            closeMenu();
        }
    }

    function renderPagesList() {
        const currentPath = location.pathname;
        return pages.map((page, index) => (
            <li className={currentPath === page.path ? 'active-page' : ''} key={index}>
                <Link onClick={() => onPageSelected()} to={page.path}>
                    {page.name}
                    <div className="menu-icon">{page.icon}</div>
                </Link>
            </li>
        ));
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
                <p className="subtitle">Full Stack Software Engineer</p>
            </div>

            <div className="site-nav">
                <ul className="header-main-menu">
                    {renderPagesList()}
                </ul>
            </div>

            <div className="copyrights">
                <span>© 2020 All rights reserved.</span>
            </div>
        </div>
    )
}
// export default connect((state: any) => ({ menuOpen: state.menu.menuOpen }))(Menu);

