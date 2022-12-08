import ReactDOM from 'react-dom/client';
import './index.css';
import React from "react"
import {BrowserRouter} from "react-router-dom"
import {App} from './App';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { AuthContextProvider } from './context/AuthContext';
import { DressContextProvider } from './context/DressContext';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render (
    <React.StrictMode>

        <BrowserRouter>
         <AuthContextProvider>
            <DressContextProvider>
            <NavBar/>
            <App/>
        <Footer/>
            </DressContextProvider>
         </AuthContextProvider>
        </BrowserRouter>
    </React.StrictMode>
)
