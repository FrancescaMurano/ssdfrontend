import React from 'react'

const OrderDataInput = ({input_value, title}) => {
    return (
        <div className="flex flex-col">
            <h1 className='font-semibold text-gray-600/80'>
                {title}</h1>
            {
            title.toString() === 'Terminated: ' ? (
                <>
                 {
                    input_value === true ? (
                        <input disabled className="p-2 border-2 border-black-800 hover:border-red-800 h-8 mb-2 bg-green-800/40"
                        value={input_value}></input>
                    ) : (
                        <input disabled className="p-2 border-2 border-black-800 hover:border-red-800 h-8 mb-2 bg-red-800/40"
                        value={input_value}></input>
                    )
                } </>


            ) : (
                <input disabled className="p-2 border-2 border-black-800 hover:border-red-800 h-8 mb-2"
                value={input_value}></input>
            )
        } </div>
    )
}

export default OrderDataInput;