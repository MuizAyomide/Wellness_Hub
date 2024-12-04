import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Resources from './pages/Resources.jsx';
import Community from './pages/Community.jsx';
import Challenges from './pages/Challenges.jsx';
import Profile from './pages/Profile.jsx';
import Login from './components/Login.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { AuthProvider } from './context/AuthContext'; // Ensure this is imported
import Welcome from './pages/Welcome.jsx';
import './style/App.css'; // Ensure correct path

const App = () => {
    const [welcome, setWelcome] = useState(true);

    return (
        <AuthProvider>
            <Router>
                {welcome ? (
                    <Welcome setWelcome={setWelcome} />
                ) : (
                    <>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/resources" element={<Resources />} />
                            <Route path="/community" element={<Community />} />
                            <Route path="/challenges" element={<Challenges />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/login" element={<Login />} />
                        </Routes>
                        <Footer />
                    </>
                )}
            </Router>
        </AuthProvider>
    );
};

export default App;