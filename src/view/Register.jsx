import React, { useState } from 'react';
import Courses from "../request/courses";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firtname, setFirtname] = useState('');
    const [lastName, setLastName] = useState('');
    const [errMess, setErrMess] = useState("");
    let navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password,
            firstName: firtname,
            lastName: lastName
        };

        const result = await Courses.Register(userData);

        if (result) {
            setErrMess("");
            navigate("/login");
        } else {
            setErrMess("Erreur lors de la création du compte");
        }
    };

    return (
        <div className="d-flex align-items-center" style={{width: "90vw"}}>
            <div className="row" style={{margin: "10px",width: "90vw"}}>
                <div className="container mt-5">
                    <h2 className="text-center">Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <label htmlFor="firtname">First name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firtname"
                                placeholder="Enter first name"
                                value={firtname}
                                onChange={(e) => setFirtname(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Enter last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
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
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
