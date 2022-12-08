import axios from "axios";
import {createContext, useMemo, useState} from "react";
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        
        if (localStorage.getItem("tokens")) {
            let tokens = JSON.parse(localStorage.getItem("tokens"));
            return jwt_decode(tokens.access);
        }

        return null;
    });


    const [role, setRole] = useState();
 
    const navigate = useNavigate();

    const login = async (payload) => {
        const url = 'https://ssd.pingflood.tk/api/v1/login/'
        console.log(payload)
        const apiResponse = await axios.post(url, payload).then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                localStorage.setItem("tokens", JSON.stringify(response.data));

                setUser(jwt_decode(response.data.access));
                setRole(jwt_decode(response.data.access).groups[0]);
              
            } 
        }).catch((error) => {
            console.log(error)
            if(error.code === "ERR_BAD_REQUEST"){
                console.log("credenziali errate")
            }
        })
        navigate("/");

    };
    const logout = async () => { // invoke the logout API call, for our NestJS API no logout API

        localStorage.removeItem("tokens");
        setUser(null);
        setRole(null)
        console.log("local",localStorage.getItem("tokens"))
        console.log("user",user)

        navigate("/");
    };


    return (<AuthContext.Provider value={
        {user,role,login, logout}
    }> {children} </AuthContext.Provider>);
};


export default AuthContext;
