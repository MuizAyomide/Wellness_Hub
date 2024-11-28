import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = ({ setWelcome }) => {
    return (
        <div className='welcome'>
            <div className="left">
                <img src="Wellness-Hub image.png" alt="" />
            </div>
            <div className="right">
                <h3>Welcome to</h3>
                <img src="Wellness-Hub logo.png" alt="" />
                <div className="welcome_btn">
                    <Link to="/login">
                        <button className='log_in btn' onClick={() => setWelcome(false)}>Login</button>
                    </Link>
                </div>
            </div>   
        </div>
    );
}

export default Welcome;