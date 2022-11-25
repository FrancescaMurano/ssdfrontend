import React from "react";
import {Route, Routes} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";

const Routing = () => {
    return (
        <Routes>
            <Route path="/"
                element={<Home/>}/>
            <Route path="/login"
                element={<Login/>}/>
            <Route path="/allbooks"
                element={<Home/>}/>
            <Route path="/allbooks"
                element={<Home/>}/>

        </Routes>
    );
};

export default Routing;
