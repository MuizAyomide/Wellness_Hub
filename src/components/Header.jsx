import React from 'react';
import { Link } from 'react-router-dom';
// import './components.css';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/resources">Resources</Link>
                <Link to="/community">Community</Link>
                <Link to="/challenges">Challenges</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;