import { useState } from "react";

const InputDay = () => {
    const [value, setValue] = useState(1);
  
    const changeValue = (mode) => {
      if( mode === 'plus'){
        if( value < 30) // limite?
          setValue(value+1);
      }else{
        if(value >1)
          setValue(value-1);
      }
    };
  
  
    return (
      <div className="flex flex-row">
        <button className="bg-white h-6 w-6 rounded-xl m-2" onClick={()=>changeValue("minus")}><h1 className="self-center text-white">-</h1></button>
        <input className="w-10 h-6 self-center border rounded-xl text-center" disabled
          type="text"
          defaultValue={1}
          value={value}
        />
        <button className="bg-white h-6 w-6 rounded-xl m-2" onClick={()=>changeValue("plus")}><h1 className="self-center text-white">+</h1></button>

      </div>
    );
  };
  
  export default InputDay;