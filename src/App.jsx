import {useState} from 'react'

import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppLayout from "./layout/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="edit-profile" element={<EditProfile/>}/>
                        <Route path="change-password" element={<ChangePassword/>}/>
                    </Route>
                    <Route path="/auth" element={<AuthLayout/>}>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>

                    </Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer/>
        </>
    )
}

export default App
