import React, { useContext, useState } from "react";
import { useEffect } from "react";
import DressContext from "../context/DressContext";
import jwtInterceptor from "./jwtInterceptor";
const ModifyOrderForm = ({id_loan,close_modal }) => {
  const {edit_loan} = useContext(DressContext); 
  const [loan,setLoan] = useState({})
  function getInputData(inputs){
    let values = []
  for (let index = 0; index < inputs.length; ++index){
      values.push(inputs[index].value)}

    return values;
  
}   

useEffect(() => {
    const url = "https://ssd.pingflood.tk/api/v1/loan/"+id_loan
    jwtInterceptor.get(url).then((response) => {
        console.log(response.data)
        setLoan(response.data);
    }).catch((error) => console.log(error));
}, []);

  return (
    <div className="flex flex-col m-auto z-index w-full">
    <form className="flex flex-col w-full max-w-lg self-center pt-10" >
      <div className="flex justify-end">
      <button onClick={()=>{close_modal()}}>Close</button>
      </div>
      
        
        <input name="input"

          className="hidden appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
          id="grid-first-name"
          type="text"
          defaultValue={loan.id}
          contentEditable={true}
          />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
          >
          Start Date
        </label>
        <input disabled name="input"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          defaultValue={loan.startDate}

          />
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
          >
          End Date:
        </label>
        <input name="input"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          defaultValue={loan.endDate}

          />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
          >
          Dress ID:
        </label>
        <input name="input"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          defaultValue={loan.dress}

          />
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
          >
          Loaner
        </label>
        <input name="input"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          defaultValue={loan.loaner}

          />
      
        <input name="input"
          className=" hidden appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          defaultValue={loan.totalPrice}

          />
         
        <input name="input"
          class=" hidden appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          defaultValue={loan.loanDurationDays}

          />
          
          
      </form>
      <button className="bg-red-800/80 hover:bg-red-800/70 w-full m-2 p-2 text-white" 
      onClick={()=>edit_loan(getInputData(document.getElementsByName("input")),loan.id
      
      )}
      >MODIFY LOAN</button>
</div>
  );
};
export default ModifyOrderForm;
