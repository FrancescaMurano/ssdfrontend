import {shuffleImage} from "../utils/shuffleImage"
import OrderDataInput from "./OrderDataInput";
const OrderCard = (order) => {
    console.log(order["order"].terminated)

    return (

        <>
            <div className="flex flex-col max-w-lg p-5 m-5 w-full bg-white drop-shadow  rounded-md ">
                <img src={shuffleImage()}
                    className="h-36 w-15 self-center object-cover rounded-tl-md rounded-tr-md"/>
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
        </>

    );
}
export default OrderCard;
