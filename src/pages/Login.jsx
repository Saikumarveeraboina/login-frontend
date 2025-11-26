import React from "react";
import { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => { 
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const navigate =  useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form data", values);
        try {
            const response = await axios.post("https://login-backend-nvf.onrender.com/api/login", values);
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token);
                navigate("/");
            }
            
        }
        catch (error) {
            console.error("There was an error login!", error);
        }
    }
    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }


    return (        
        <div className="login-container">    
            <div className="login-wrapper">
                <div className="login-header">
                    <h2>Welcome Back</h2>
                    <p>Sign in to your account</p>
                </div>
                <form className="login-form" onSubmit={handleSubmit}>
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
                    <div className="forgot-password">
                        <a href="#forgot">Forgot password?</a>
                    </div>
                    <button type="submit" className="login-btn">Sign In</button>
                </form>
                <div className="login-footer">
                    Don't have an account? <Link to="/register">Register here</Link>
                </div>
            </div>
        </div>
    );    
}   
export default Login;