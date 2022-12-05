import {useState, useEffect} from "react";
import jwtInterceptor from "./jwtInterceptor";
import axios from "axios";
import DressCard from "./DressCard";
const Dresses = () => {
    const [dresses, setDresses] = useState([]);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("tokens"))
        axios.get('https://ssd.pingflood.tk/api/v1/dress/', {
            headers: {
                Authorization: `Bearer ${
                    data.access
                }`
            }
        }).then((res) => {
            setDresses(res.data)
        }).catch((error) => {
            if (error.response.status === 401) {
                // const authData = JSON.parse(localStorage.getItem("tokens"));
                // const payload = {
                //     access_token: authData.access,
                //     refresh_token: authData.refresh
                // };

                // let apiResponse = axios.post(
                // "https://ssd.pingflood.tk/api/v1/login",
                // payload
                // );
                // localStorage.setItem("tokens",JSON.stringify(apiResponse.data))
            }
        })

    }, []);


    return (
        <>
            <div className="grid grid-cols-2 place-items-center  md:items-center md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                {
                dresses.map((el) => {
                    return <DressCard dress={el}></DressCard>
            })
            } </div>

        </>
    );
};
export default Dresses;
