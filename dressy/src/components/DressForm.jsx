import React, { useContext } from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import DressContext from "../context/DressContext";
const DressForm = ({ functions }) => {
  const {add_new_dress} = useContext(DressContext);
  
  
  function getInputData(inputs){
    let values = []
  for (let index = 0; index < inputs.length; ++index){
      values.push(inputs[index].value)}
    return values;
  
}  
  return (
<>
    <form class="w-full flex flex-col max-w-lg self-center pt-10">
      <div className="bg-red-800/80 text-white p-1 rounded self-end">
      <CloseButton variant="white" />
      <button 
        className="self-end"
      
      onClick={() => functions.setShowForm(false)}>Close</button>

      </div>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
          >
          Brand Name
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
          id="grid-first-name"
          type="text"
          placeholder="Insert brand name..."
          />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
          >
          Price in cents
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Insert dress price in cents..."
          />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
          >
          Colour
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Insert dress colour.."
          />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
          >
          Material type
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Insert dress material.."
          />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
          >
          Size
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Insert dress size.."
          />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
          >
          Description
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Insert dress description.."
          />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      
      
      
      </form>
      <button className="bg-red-800/80 w-40 p-2 self-center hover:bg-red-800/70 w-full m-2 text-white rounded" onClick={()=>add_new_dress(getInputData(document.getElementsByTagName("input")))}>ADD NEW DRESS</button>
</>
  );
};
export default DressForm;
