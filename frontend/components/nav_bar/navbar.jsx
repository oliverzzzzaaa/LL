import React from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
// import { Route, Redirect, withRouter } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <div>
                <Link to="/" className="header-link">
                    <div className="header-logo"></div>
                </Link>
            </div>
            <br/>
            <button className="navbar-signup-button">
                <Link to="/signup">Join now</Link>
            </button>
            &nbsp; &nbsp;
            <button className="navbar-login-button">
                <Link to="/login">Sign in</Link>
            </button>
        </nav>
    );

    const welcomePage = () => (
        <div className="welcome-navbar">
            <Link to="/feed" className="header-link">
                <div className="list-logo"></div>
            </Link>
        
            <hgroup className="welcome-header">
                <button className="header-button-home"><Link to="/feed" >Home</Link></button>
                <button className="header-button-connections"><Link to="/connections" >My Network</Link></button>
                <button className="header-button-jobs" onClick={logout}>Jobs</button>
                <button className="header-button-messaging" onClick={logout}>Messaging</button>
                <button className="header-button-logout" onClick={logout}>Log Out</button>
            </hgroup>
        </div>
    );


    if (currentUser) {
        return (
            <div className="welcome-page">
                    {welcomePage()}
            </div>
        )
    } else {
        return (
            <div>
                <header className="page-header">
                    {sessionLinks()}
                </header>

            </div>
        )
    }
};


export default Navbar;