import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

import axios from 'axios';
import "./Home.css"


const Home = () => {
    const navigate = useNavigate();
    const fetchUser = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("https://login-backend-nvfv.onrender.com/api/home", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status !== 201) {
                navigate("/login");
            }

        } catch (error) {
            console.error("Error fetching user data", error);
        }
    }
    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <div className="home-container">
            <div className="home-content">
                <div className="home-header">
                    <h1>Welcome to Saikumar Tech Platform</h1>
                    <p> Your Security is Our First Priority , Thanks for Choosing Us.</p>
                    <div className="home-actions">
                        <Link to="/login" className="btn btn-primary">Login</Link>
                        <Link to="/register" className="btn btn-secondary">Register</Link>
                    </div>
                </div>
                <div className="home-features">
                    <div className="feature-card">
                        <div className="feature-icon">🔒</div>
                        <h3>Secure</h3>
                        <p>Your data is protected with industry-standard encryption</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Fast</h3>
                        <p>Quick and seamless authentication experience</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">👥</div>
                        <h3>User-Friendly</h3>
                        <p>Simple and intuitive interface for all users</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;