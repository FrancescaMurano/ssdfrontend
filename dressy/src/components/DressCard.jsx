import {useContext, useState} from "react";
import {price_from_cents_to_euro} from "../utils/calculate_price"
import {shuffleImage} from "../utils/shuffleImage"
import DressContext from "../context/DressContext";
import LoanRegisterCard from "./LoanRegisterCard";
import {BsFillCartPlusFill} from 'react-icons/bs';
import {TiDelete} from 'react-icons/ti';
import {RiEditBoxFill} from 'react-icons/ri';
import {v4 as uuidv4} from 'uuid';


import AuthContext from "../context/AuthContext";
import ModifyDressForm from "./ModifyDressForm";
const DressCard = ({dress}) => {
    const {remove_dress} = useContext(DressContext);
    const {role} = useContext(AuthContext);

    const [showForm, setShowForm] = useState(false);
    const [modify_form, setModifyForm] = useState(false);
    function close_modal() {
        setModifyForm(false)
    }
    return (
        <> {
            modify_form & role === 'commessi' ? <div className="drop-shadow-2xl bg-white border border-black-800 w-80 m-10 z-index object-contain bg-white rounded-3xl mx-auto fixed inset-0 fit-content p-8 ">

                <ModifyDressForm key={
                        uuidv4()
                    }
                    id_dress={
                        dress.id
                    }
                    close_modal={close_modal}></ModifyDressForm>
            </div> : null
        }
            {
            showForm ? (
                <div className=" drop-shadow-2xl bg-white border border-black-800 m-auto z-index object-contain bg-white rounded-3xl mx-auto sm:w-3/4 md:w-2/4 fixed inset-0 flex items-center fit-content">
                    <LoanRegisterCard key={
                            uuidv4()
                        }
                        dress={dress}
                        close={setShowForm}></LoanRegisterCard>
                </div>

            ) : (
                <></>
            )
        }
            <div className="flex flex-col p-2 min-w-full   min-h-full  md:w-48 bg-white drop-shadow rounded-md">

                {
                role === 'commessi' ? (


                    <div key={
                            uuidv4()
                        }
                        className="flex justify-between">
                        <RiEditBoxFill color="black"
                            size={25}
                            onClick={
                                () => setModifyForm(true)
                        }></RiEditBoxFill>
                        {
                        dress.deleted ? (

                            <div className="opacity-40 flex p-1 border border-1 border-red/40 rounded bg-red-800/20">

                                <h1>
                                    SOLD OUT
                                </h1>
                                <TiDelete color="red"
                                    size={25}></TiDelete>
                            </div>


                        ) : (
                            <div className="flex p-1 border border-1 border-red/40 rounded bg-red-800/20 cursor-pointer"
                                onClick={
                                    () => remove_dress(dress.id)
                            }>

                                <h1>
                                    SOLD OUT
                                </h1>
                                <TiDelete color="red"
                                    size={25}></TiDelete>
                            </div>
                        )
                    } </div>
                ) : (null)
            }

                <img alt=""
                    src={
                        shuffleImage()
                    }
                    className="h-36 w-15 self-center object-cover rounded-tl-md rounded-tr-md"/>
                <h1 className=" p-2 font-medium self-center">
                    {
                    dress.brandType
                }</h1>
                <div className="grid pl-2 border grid-cols-2">
                    <h3 className="font-medium">Material:
                    </h3>
                    <h3> {
                        dress.materialType
                    }</h3>
                </div>
                <div className="grid pl-2 border grid-cols-2">
                    <h3 className="font-medium">Color:
                    </h3>
                    <h3> {
                        dress.colorType
                    }</h3>
                </div>
                <div className="grid pl-2 border grid-cols-2">
                    <h3 className="font-medium">Size:
                    </h3>
                    <h3> {
                        dress.size
                    }</h3>
                </div>

                <div className="grid grid-cols-2 bg-gray-800/20 p-2 h-full w-full">
                    <h3 className="font-medium">Description:
                    </h3>
                    <h3 className="break-words">
                        {
                        dress.description
                    }</h3>
                </div>
                {
                role === 'commessi' ? (
                    <> {
                        dress.deleted ? (
                            <div className="grid pl-2 pt-1 pb-1  grid-cols-2 bg-green-800/40 ">
                                <h3 className="font-medium">Deleted:
                                </h3>
                                <h3> {
                                    dress.deleted.toString()
                                }</h3>
                            </div>

                        ) : (

                            <div className="grid pl-2 pt-1 pb-1  grid-cols-2 bg-red-800/40 ">
                                <h3 className="font-medium">Deleted:
                                </h3>
                                <h3> {
                                    dress.deleted.toString()
                                }</h3>
                            </div>
                        )
                    } </>
                ) : (null)
            }

                <div className="flex flex-row justify-end">
                    <p className="text-sm font-medium mr-3 text-center self-center">
                        &#36;{
                        price_from_cents_to_euro(dress.priceInCents)
                    }/day</p>
                {
                    !dress.deleted ? (
                        <BsFillCartPlusFill className="bg-red-800 h-8 w-8 p-2 rounded-2xl m-2" color="white"
                        onClick={
                            () => setShowForm(!showForm)
                        }/>
                    ):(  <BsFillCartPlusFill className="opacity-20 bg-red-800 h-8 w-8 p-2 rounded-2xl m-2 cursor-auto" color="white"
                   />)
                }
                   
                </div>
                {} </div>
        </>

    );
}
export default DressCard;
