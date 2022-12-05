import {useState, useEffect} from "react";
import axios from "axios";
import OrderCard from "../components/OrderCard";
const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    // useEffect(() => {
    //     axios
    //       .get("https://gorest.co.in/public/v2/users/1/posts") //###EXAMPLE
    //       .then((response) => {
    //         setOrders(response.data);
    //         console.log(orders)
    //       });
    // }, []);

    return(
        // dresses.map((dress) => ( <div className="flex flex-col">
            <div className="flex flex-col mt-10 mb-10">
                <h1 className="self-center font-winter text-5xl">My Orders</h1>
            <div className="flex flex-col self-center p-10 w-full">

                <OrderCard order={"1"}></OrderCard>
                <OrderCard order={"1"}></OrderCard>
                <OrderCard order={"1"}></OrderCard>
                <OrderCard order={"1"}></OrderCard>
                <OrderCard order={"1"}></OrderCard>
                <OrderCard order={"1"}></OrderCard>
                <OrderCard order={"1"}></OrderCard>
                <OrderCard order={"1"}></OrderCard>
                <OrderCard order={"1"}></OrderCard>
                <OrderCard order={"1"}></OrderCard>

            </div>

        </div>
        // );} </>
    );
};
export default MyOrders;
