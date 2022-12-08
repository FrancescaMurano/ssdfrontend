import {useContext, useState} from "react";
import {price_from_cents_to_euro} from "../utils/calculate_price"
import {shuffleImage} from "../utils/shuffleImage"
import DressContext from "../context/DressContext";
import LoanRegisterCard from "./LoanRegisterCard";
import { BsFillCartPlusFill } from 'react-icons/bs';
const DressCard = ({dress}) => {
    const {dress_loan} = useContext(DressContext);
    const [showForm, setShowForm] = useState(false);
    const [dress_id, setDressID] = useState("");

    return (
        <> {
            showForm ? (
                <div className=" drop-shadow-2xl bg-white border border-black-800 m-auto z-index object-contain bg-white rounded-3xl mx-auto sm:w-3/4 md:w-2/4 fixed inset-0 flex items-center fit-content p-8 ">
                    <LoanRegisterCard dress={dress} close={setShowForm}></LoanRegisterCard>
                </div>

            ) : (
                <></>
            )
        }
            <div className="flex flex-col p-4 w-45 max-h-96 h-80 bg-white drop-shadow hover:drop-shadow-lg hover:opacity-70 rounded-md">
                <img src={
                        shuffleImage()
                    }
                    className="h-36 w-15 self-center object-cover rounded-tl-md rounded-tr-md"/>
                <h1 className="font-semibold self-center">
                    {
                    dress.brandType
                }</h1>
                <h3>Material: {
                    dress.materialType
                }</h3>
                <h3>Color: {
                    dress.colorType
                }</h3>
                <h3>Size: {
                    dress.size
                }</h3>
                <div className="flex flex-row justify-between">
                    <p className="text-sm mr-3 text-center self-center">	&#36;{
                        price_from_cents_to_euro(dress.priceInCents)
                    }/day</p>

                            <BsFillCartPlusFill  className="bg-red-800 h-8 w-8 p-2 rounded-2xl m-2" color="white"  onClick={
                            () => setShowForm(!showForm)
                          }/>
                </div>
                {} </div>
        </>

    );
}
export default DressCard;
