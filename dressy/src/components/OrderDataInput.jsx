import React from 'react'

const OrderDataInput = ({input_value,title}) => {
    return (
        <div className="flex flex-row justify-between">
            <h1 className='font-semibold text-gray-600/80 self-center'>{title}</h1>
            <input disabled className="p-2 border-2 border-black-800 hover:border-red-800 h-8 m-1"
                value={input_value}></input>
        </div>
    )
}

export default OrderDataInput
