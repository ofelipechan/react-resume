import React from 'react'
import ProfileImg from '../../assets/images/profile.jpg';
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import { useDispatch } from 'react-redux';
import * as MenuActions from '../../store/actions/menu';
import './styles.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    const dispatch = useDispatch();

    function toggleMenu() {
        dispatch(MenuActions.toggleMenu());
    }

    return (
        <header>
            <div className="header-profile-image-container">
                <Link to="/">
                    <img src={ProfileImg} className="header-profile-image" alt="Profile" />
                </Link>
            </div>
            <button className="icon-menu" onClick={() => toggleMenu()}>
                <Menu size="40" />
            </button>
        </header>
    )
}

// const mapSateToProps = (state: any) => ({ menuOpen: state.menu.menuOpen });
// const mapDispatchToProps = (dispatch: any) =>  bindActionCreators(MenuActions, dispatch);

// export default connect(mapSateToProps, mapDispatchToProps)(Header);