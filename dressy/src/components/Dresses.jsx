import {useState, useEffect} from "react";
import jwtInterceptor from "./jwtInterceptor";
import DressCard from "./DressCard";
const Dresses = () => {
    const [dresses, setDresses] = useState([]);


    useEffect(() => {
        jwtInterceptor.get('https://ssd.pingflood.tk/api/v1/dress/').then((response) => {
            console.log(response)
            setDresses(response.data);
        }).catch((error) => console.log(error));
    }, []);


    return (
        <>
            <div className="grid grid-cols-2 place-items-center  md:items-center md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 ">
                {
                dresses.map((el) => {
                    if (!el.deleted) {
                        return <DressCard dress={el}></DressCard>
                }
            })
            } </div>

        </>
    );
};
export default Dresses;
