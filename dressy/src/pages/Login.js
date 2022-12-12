import React, {useContext, useRef} from 'react'
import user_icon from "../assets/icons/user_icon.png"
import pass_icon from "../assets/icons/pass_icon.png"
import AuthContext from '../context/AuthContext'

const Login = () => {

    const userName = useRef("");
    const password = useRef("");
    const {login} = useContext(AuthContext);

    const loginSubmit = async () => {
        let payload = {
            username: userName.current.value,
            password: password.current.value
        }
        await login(payload)
    };

    
    return (
        <section className="flex flex-col min-h-screen justify-center items-center" id="login-form">
            <h1 className='font-winter text-6xl pb-5'>Login</h1>
            <div className='bg-black p-16 bg-sky-900/50'>
                <div className="flex flex-row m-6 items-center" id='username'>
                    <img alt="" src={user_icon}
                        className="mr-5 h-5 justify-center"/>
                    <input className="pl-1 border-4 border-black-500/50" type="text"
                        ref={userName}/>
                </div>
                <div className="flex flex-row m-6 items-center" id='password'>
                    <img alt="" src={pass_icon}
                        className="mr-5 h-5 "/>
                    <input className="pl-1 border-4 border-black-500/50" type="password"
                        ref={password}/>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='m-6 items-center text-white self-center bg-red-700 hover:bg-gray-700/30 hover:text-white
                                                                                            font-bold w-full py-2 rounded'
                        onClick={loginSubmit}>Login</button>
                </div>
            </div>
        </section>
    )
}
export default Login;
