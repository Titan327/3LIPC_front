import React, { useState } from 'react';
import Courses from "../request/courses";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMess, setErrMess] = useState("");
    let navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password,
        };

        const result = await Courses.Login(userData);

        if (result) {
            setErrMess("");
            localStorage.setItem('token', result.data.message);
            navigate("/");
        } else {
            setErrMess("Erreur lors de la création du compte");
        }


    };

    return (
        <div className="d-flex align-items-center" style={{width: "90vw"}}>
            <div className="row" style={{margin: "10px",width: "90vw"}}>
                <div className="container mt-5">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {errMess && <div className="alert alert-danger">{errMess}</div>}
                        <button type="submit" className="btn btn-primary btn-block">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
