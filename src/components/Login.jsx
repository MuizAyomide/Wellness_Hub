import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use the useNavigate hook

    const handleLogin = (e) => {
        e.preventDefault();
        // Replace with actual login logic (e.g., API call)
        const userData = { name, email }; // Include name in user data
        login(userData); // Call login function

        // After successful login, navigate to home page
        navigate('/'); // Navigate to home page
    };

    return (
        <div className="login">
            <div className="left">
                <img src="Wellness-Hub image.png" alt="" />
            </div>
            <div className="right">
                <img className='logo' src="Wellness-Hub.png" alt="" />
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;