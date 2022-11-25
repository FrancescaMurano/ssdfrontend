import React, { Component } from "react";
import { Link } from "react-router-dom";
import "react-dropdown/style.css";
import logo from "../assets/dressy_logo.png";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="bg-amber-100/60 border-gray-200 px-2 sm:px-4 py-2.5 ">
        <div className="flex flex-row grow ">
          <Link className="flex flex-row grow  " to="/">
            <img className="h-14 mr-4" src={logo} />
            <h1 className="self-center font-sans text-5xl mt-2">Dressy</h1>
          </Link>
          <Link
            className="self-center bg-red-800 hover:bg-white-700/30 hover:text-white  
        text-white font-bold py-2 px-4 rounded"
            to="/login"
          >
            <button>Login</button>
          </Link>
        </div>
      </nav>
    );
  }
}
