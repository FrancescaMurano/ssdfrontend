import {useState, useEffect} from "react";
import jwtInterceptor from "./jwtInterceptor";
import OrderCard from "./OrderCard";
const Orders = () => {
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        jwtInterceptor.get('https://ssd.pingflood.tk/api/v1/loan').then((response) => {
            setOrders(response.data);
        }).catch((error) => console.log(error));
    }, []);


    return (
        <>
            <div className="flex flex-col place-items-center  md:items-center md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 h-screen">
                {
                orders.map((el) => {
                        return <OrderCard order={el}></OrderCard>
            })
            } </div>

        </>
    );
};
export default Orders;
