import {useState, useEffect} from "react";
import jwtInterceptor from "./jwtInterceptor";
import OrderCard from "./OrderCard";
import {v4 as uuidv4} from 'uuid';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    function ordered_by_terminated(orders) {
        let arr = [... orders];
        arr.sort(function (a, b) {
            return a.terminated > b.terminated;
        })
            setOrders(arr)

    }
    useEffect(() => {
        jwtInterceptor.get('https://ssd.pingflood.tk/api/v1/loan').then((response) => {
            setOrders(response.data);
            ordered_by_terminated(response.data)
        }).catch((error) => console.log(error));
    }, []);


    return (
        <>
            <div className="grid m-10 grid-cols-auto-fit place-items-center md:items-center md:grid-cols-1 lg:grid-cols-2  ">
                {
                orders.map((el) => {
                    return <OrderCard key={
                            uuidv4()
                        }
                        order={el}></OrderCard>
            })
            } </div>

        </>
    );
};
export default Orders;
