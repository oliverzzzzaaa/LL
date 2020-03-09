import React from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
// import { Route, Redirect, withRouter } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
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
        <hgroup className="welcome-header">
            <Link to="/feed" className="header-button-home">Home</Link>
            <Link to="/connections" className="header-button-connections">My Network</Link>
            <button className="header-button-jobs" onClick={logout}>Jobs</button>
            <button className="header-button-messaging" onClick={logout}>Messaging</button>
            <button className="header-button-logout" onClick={logout}>Log Out</button>
        </hgroup>
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