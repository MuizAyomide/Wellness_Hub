import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import Home from './pages/Home.jsx';
import Resources from './pages/Resources.jsx';
import Community from './pages/Community.jsx';
import Challenges from './pages/Challenges.jsx';
import Profile from './pages/Profile.jsx';
import Login from './components/Login.jsx'; // Import Login component
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './Style/App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes> {/* Replace Switch with Routes */}
                <Route path="/" element={<Home />} /> {/* Use element prop */}
                <Route path="/resources" element={<Resources />} /> {/* Use element prop */}
                <Route path="/community" element={<Community />} /> {/* Use element prop */}
                <Route path="/challenges" element={<Challenges />} /> {/* Use element prop */}
                <Route path="/profile" element={<Profile />} /> {/* Use element prop */}
                <Route path="/login" element={<Login />} /> {/* Use element prop */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;