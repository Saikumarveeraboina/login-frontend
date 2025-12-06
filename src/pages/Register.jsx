import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";

import axios from "axios";
import "./Register.css";


const Register = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: ""
    });
    const navigate =  useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form data", values);
        try {
            const response = await axios.post("http://localhost:3000/api/register", values);
            if (response.status === 201) {
                navigate("/login");
                
            }
            
        }
        catch (error) {
            console.error("There was an error registering!", error);
        }
    }
    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    return (
        <div className="register-container">
            <div className="register-wrapper">
                <div className="register-header">
                    <h2>Create Account</h2>
                    <p>Join our community today</p>
                </div>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Enter your username"
                            required 
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Enter your email"
                            required 
                             onChange={handleChange}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Enter your password"
                            required 
                             onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="register-btn">Register</button>
                </form>
                <div className="register-footer">
                    Already have an account? <Link to="/login">Login here</Link>
                </div>
            </div>
        </div>
    )
}

export default Register;