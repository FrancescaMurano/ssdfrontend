import React, {Component} from 'react'
import user_icon from "../assets/icons/user_icon.png"
import pass_icon from "../assets/icons/pass_icon.png"
import {Link} from 'react-router-dom'

export default class Login extends Component {

    render() {
        return (
            <section className="flex flex-col min-h-screen justify-center items-center" id="login-form">
                <h1 className='font-sans text-6xl pb-5'>Login</h1>
                <div className='bg-black p-16 bg-sky-900/50'>
                    <div className="flex flex-row m-6 items-center" id='username'>
                        <img src={user_icon}
                            className="mr-5 h-5 justify-center"/>
                        <input className="border-4 border-black-500/50" type="text"/>
                    </div>
                    <div className="flex flex-row m-6 items-center" id='password'>
                        <img src={pass_icon}
                            className="mr-5 h-5 "/>
                        <input className="border-4 border-black-500/50" type="text"/>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className='m-6 items-center self-center bg-red-700 hover:bg-gray-700/30 hover:text-white
                                                                text-white font-bold w-full py-2 rounded'>Login</button>
                    </div>
                </div>
            </section>
        )
    }
}
