import React from 'react'
import ProfileImg from '../../assets/images/profile.jpg';
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as MenuActions from '../../store/actions/menu';
import './styles.scss';

const Header = ({ menuOpen, toggleMenu }: any) => {
    return (
        <header>
            <div className="header-profile-image-container">
                <img src={ProfileImg} className="header-profile-image" alt="Profile" />
            </div>
            <button className="icon-menu" onClick={() => toggleMenu()}>
                <Menu size="40" />
            </button>
        </header>
    )
}

const mapSateToProps = (state: any) => ({ menuOpen: state.menu.menuOpen });
const mapDispatchToProps = (dispatch: any) =>  bindActionCreators(MenuActions, dispatch);

export default connect(mapSateToProps, mapDispatchToProps)(Header);