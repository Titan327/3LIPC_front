import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RecentGrades from "./view/RecentGrades";
import Header from "./componant/Header";
import Sidebar from "./componant/Sidebar";
import AllCourses from "./view/AllCourses";
import Upload from "./view/Upload";
import Login from "./view/Login";
import Register from "./view/Register";

function App() {
    return (

        <div className="container-fluid">
            <div className="row">
                <div>
                    <Sidebar />
                </div>
                <div style={{marginLeft:"5vw"}}>
                    <Header />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<RecentGrades/>} />
                            <Route path="/courses" element={<AllCourses/>} />
                            <Route path="/exercise/:exerciseId" element={<Upload/>} />
                            <Route path="/login" element={<Login/>} />
                            <Route path="/register" element={<Register/>} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </div>

    );
}

export default App