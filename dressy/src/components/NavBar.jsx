import React, {useContext} from "react";
import {Link} from "react-router-dom";
import "react-dropdown/style.css";
import logo from "../assets/dressy_logo.png";
import AuthContext from "../context/AuthContext";
import {RxExit} from 'react-icons/rx';

const NavBar = () => {
    const {user, logout} = useContext(AuthContext);


    return (
        <nav className="bg-amber-100/60 border-gray-200 px-2 sm:px-4 py-2.5 ">
            <div className="flex flex-row grow ">
                <Link className="flex flex-row grow  " to="/">
                    <img alt="" className="h-14 mr-4"
                        src={logo}/>
                    <h1 className="self-center font-winter text-5xl mt-2">Dressy</h1>
                </Link>
                {
                user ? (
                    <>
                        <Link className="self-center bg-red-800 hover:bg-gray-800/80 hover:text-white
                                    text-white font-bold py-2 px-4 m-2 rounded" to="/orders">
                            <button>Orders</button>
                        </Link>

                        {/* <button className="self-center bg-blue-800/80 hover:bg-white-700/30 hover:text-white  
          text-white font-bold py-2 px-4 rounded" onClick={logout}>Logout</button> */}
                        <RxExit className="cursor-pointer self-center bg-red-600/80 h-10 w-10 p-2
                                          text-white font-bold rounded hover:bg-gray-800/80"
                            onClick={logout}></RxExit>
                    </>
                ) : (
                    <Link className="self-center bg-red-800 hover:bg-white-700/30 hover:text-white
              text-white font-bold py-2 px-4 rounded" to="/login">
                        <button>Login</button>
                    </Link>
                )
            } </div>
        </nav>
    );
};
export default NavBar;
