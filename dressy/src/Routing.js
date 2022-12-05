import React, { useContext, useEffect } from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import MyOrders from "./pages/MyOrders";
import AuthContext from "./context/AuthContext";
import AdminHome from "./pages/AdminHome";

const Routing = () => {
    const {user} = useContext(AuthContext);
   
    return (
        <Routes>
            {console.log("IN ROUTE",user)}
            <Route path="/"
                element={
                    user ? (
                        <Home />
                      ) : (
                        <Login/>
                      )}/>
               
            <Route path="/login"
                element={
                    user ? (
                        <Navigate to={"/"} replace/>
                      ) : (
                        <Login />
                      )}/>
            <Route path="/orders"
              element={
                user ? (
                    <MyOrders/>
                  ) : (
                    <Login />
                  )}/>

            <Route path="/admin"
              element={
                user ? (
                    <AdminHome/>
                  ) : (
                    <Login />
                  )}/>

        </Routes>
    );
};

export default Routing;
