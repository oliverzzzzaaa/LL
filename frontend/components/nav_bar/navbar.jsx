import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <button>
                <Link to="/login">Sign in</Link>
            </button>

            &nbsp; &nbsp;
            <button>
                <Link to="/signup">Join now</Link>
            </button>

        </nav>
    );
    const welcomePage = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? welcomePage() : sessionLinks();
};


export default Navbar;
