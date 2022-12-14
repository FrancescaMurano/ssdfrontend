import {shuffleImage} from "../utils/shuffleImage"
import OrderDataInput from "./OrderDataInput";
import {TiDelete} from 'react-icons/ti';
import {RiEditBoxFill} from 'react-icons/ri';
import {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import DressContext from "../context/DressContext";
import ModifyOrderForm from "./ModifyOrderForm";
const OrderCard = (order) => {
    const {role} = useContext(AuthContext);
    const {remove_loan} = useContext(DressContext);
    const [showForm, setShowForm] = useState(false);
    
    function close_modal(){
        setShowForm(false)
    }


return (
<div className="border z-index-1 rounded-2xl p-4 m-3 shadow">
        {
        role === 'commessi' & showForm ? (
            <div className=" drop-shadow-2xl bg-white border border-black-800 w-80 m-10 z-index object-contain bg-white rounded-3xl mx-auto fixed inset-0 fit-content p-8 ">
            <ModifyOrderForm id_loan={order.order.id} close_modal={close_modal}
            
            ></ModifyOrderForm> 
                </div>
            ) : (
                    <div className="flex flex-col justify-between">
                            {
                            !order.order.terminated  & role === "commessi" ? (
                                <>
                                <div className=" flex flex-row w-full justify-between rounded"  >
                                   <div className="p-2">
                                     <RiEditBoxFill color="black"
                                        size={25}
                                        onClick={
                                            () => setShowForm(true)
                                    }></RiEditBoxFill></div>
                                    <div className="p-2 flex cursor-pointer bg-green-800/10 rounded" onClick={
                                        () => remove_loan(order.order.id)
                                }>

                                    <TiDelete color="red"
                                        size={25}
                                        >

                                        </TiDelete>
                                        <h1>TERMINATE</h1>
                                            </div>
                                    </div>
                                </>
                            ) : (null)
                        } </div>
            )
                    }
                        
        <div className="flex flex-row p-4 m-10 rounded-2xl
        flex flex-row max-w-lg p-6 m-5 min-w-full rounded-2xl justify-between self-center">
            <div className="h-full">

                <h1 className="font-semibold text-red-800">ORDER ID: {
                    order["order"].id
                }</h1>

                <OrderDataInput input_value={
                        order["order"].dress
                    }
                    title={"Dress ID: "}></OrderDataInput>

                <OrderDataInput input_value={
                        order["order"].startDate
                    }
                    title={"Start Date: "}></OrderDataInput>
                <OrderDataInput input_value={
                        order["order"].endDate
                    }
                    title={"End Date: "}></OrderDataInput>
                <OrderDataInput input_value={
                        order["order"].loanDurationDays
                    }
                    title={"Days: "}></OrderDataInput>
                <OrderDataInput input_value={
                        order["order"].totalPrice
                    }
                    title={"Total price: \u0024"}></OrderDataInput>
                <OrderDataInput input_value={
                        order["order"].terminated
                    }
                    title={"Terminated: "}></OrderDataInput>
            </div>
            <div className="self-center p-2">
                <img alt=""
                    src={
                        shuffleImage()
                    }
                    className="h-52  w-15 self-center object-cover rounded-tl-md rounded-tr-md"/>
            </div>
        </div>
    </div>

);}
export default OrderCard;
