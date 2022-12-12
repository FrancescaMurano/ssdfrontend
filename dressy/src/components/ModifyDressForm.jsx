import React, {useContext, useState} from "react";
import {useEffect} from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import DressContext from "../context/DressContext";
import jwtInterceptor from "./jwtInterceptor";
const ModifyDressForm = ({id_dress,close_modal}) => {
    const {modify_dress} = useContext(DressContext);
    const [dress, setDress] = useState({})

    function getInputData(inputs) {
        let values = []
        for (let index = 0; index < inputs.length; ++ index) {
            values.push(inputs[index].value)
        }
        return values;

    }

    useEffect(() => {
        const url = "https://ssd.pingflood.tk/api/v1/dress/" + id_dress
        jwtInterceptor.get(url).then((response) => {
            console.log(response.data)
            setDress(response.data);
        }).catch((error) => console.log(error));
    }, []);

    return (
        <>
            <form className="w-full flex flex-col max-w-lg self-center pt-10">
                <div className="flex justify-end ">
                <button className="self-end bg-red-800/30 m-2 p-1 rounded" onClick={()=>close_modal()}>Close</button>
                </div>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Brand Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white " id="grid-first-name" type="text"
                    defaultValue={
                        dress.brandType
                    }
                    placeholder="Insert brand name..."
                    contentEditable={true}/>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Price in cents
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Insert dress price in cents..."
                    defaultValue={
                        dress.priceInCents
                    }/>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Colour
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Insert dress colour.."
                    defaultValue={
                        dress.colorType
                    }/>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Material type
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Insert dress material.."
                    defaultValue={
                        dress.materialType
                    }/>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Size
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Insert dress size.."
                    defaultValue={
                        dress.size
                    }/>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Description
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Insert dress description.."
                    defaultValue={
                        dress.description
                    }/>
            </form>
            <button className="bg-red-800/80 hover:bg-red-800/70 w-full m-2 p-2 text-white"
                onClick={
                    () => modify_dress(getInputData(document.getElementsByTagName("input")), dress.id)
            }>MODIFY DRESS</button>
        </>
    );
};
export default ModifyDressForm;
