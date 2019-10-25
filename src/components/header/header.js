import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";
import './header.css';

const Header = (props) => (
    <header>
        <div className="name">
            <NavLink to="/" className="main_link" activeClassName="active">radio<img src={logo} className="logo" alt="" /></NavLink>
        </div>
        <div className="search_bar">
            <form className="searchb_form">
                <input className="searchb" type="text" autofocus placeholder="Believe" />
            </form>
        </div>
        <div className="what">
            <NavLink to="/what-is-it" className="logo_what" activeClassName="active"><div className="cover">?</div></NavLink>
        </div>
    </header>
);

export default Header;