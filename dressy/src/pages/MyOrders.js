import { useNavigate } from "react-router-dom";
import { MdArrowBack } from 'react-icons/md';

import Orders from "../components/Orders";
const MyOrders = () => {
    let navigate = useNavigate()

    return(
            <div className="flex flex-col mt-10 mb-10">
                <MdArrowBack className="bg-red-600 w-10 h-10 text-white m-5 rounded-3xl hover:bg-gray-800" onClick={()=>navigate("/")}></MdArrowBack>
                <h1 className="self-center font-winter text-5xl">My Orders</h1>
            <div className="flex flex-col self-center p-10 w-full">
                <Orders/>

            </div>

        </div>
    );
};
export default MyOrders;
