import axios from "axios";
import {createContext, useContext, useMemo, useState} from "react";
import jwt_decode from "jwt-decode";
import {useNavigate} from "react-router-dom";
import AuthContext from "./AuthContext";
import jwtInterceoptor from "../components/jwtInterceptor";

const DressContext = createContext();

export const DressContextProvider = ({children}) => {
    const {user} = useContext(AuthContext);

    const navigate = useNavigate();
   

    const dress_loan=(dress,start_date,end_date)=>{
        const url = 'https://ssd.pingflood.tk/api/v1/loan/'
        const payload = {
                "startDate": start_date,
                "endDate": end_date,
                "dress": dress.id,
                "loaner": user.user_id
        }
        const apiResponse = jwtInterceoptor.post(url, payload).then((response) => {
            if (response.status === 201) {
                alert("Dress Loaned successfully!")
            }
        }).catch((error) => {
            console.log(error)
            if(error.response.status === 400)
                alert(error.response.data.detail)
            
        })
        navigate("/");
       
    }

    return (<DressContext.Provider value={
        {dress_loan}
    }> {children} </DressContext.Provider>);
};


export default DressContext;
