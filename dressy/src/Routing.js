import React, {useContext} from "react";
import {Route, Routes, Navigate} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import MyOrders from "./pages/MyOrders";
import AuthContext from "./context/AuthContext";
import AdminHome from "./pages/AdminHome";

const Routing = () => {
    const {user, role} = useContext(AuthContext);

    return (
        <Routes>
            <Route path="/"
                element={
                    !user ? (
                        <Login/>) : ((role === 'commessi' ? (
                        <AdminHome/>) : (
                        <Home/>)))
                }/>

            <Route path="/login"
                element={
                    !user ? (
                        <Login/>) : ((role === 'commessi' ? (
                        <AdminHome/>) : (
                        <Home/>)))
                }/>
            <Route path="/orders"
                element={
                    user ? (
                        <MyOrders/>) : (
                        <Login/>)
                }/>

            <Route path="/admin"
                element={
                    user ? (
                        <AdminHome/>) : (
                        <Login/>)
                }/>
            <Route path="*"
                element={
                    <Navigate
                to="/"
                replace/>
                }/>
        </Routes>
    );
};

export default Routing;
