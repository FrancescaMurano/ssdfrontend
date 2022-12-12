import React, { useState} from 'react'
import Dresses from '../components/Dresses'
import DressForm from '../components/DressForm'
import {AiFillPlusCircle} from "react-icons/ai"
const AdminHome = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className='flex flex-col min-h-screen self-center'>


            {
            showForm ? (
                <DressForm functions={
                    [setShowForm]
                }/>
            ) : (
                <>

                        <div className=' flex justify-center p-2 bg-green-900/80 hover: bg-gray-900/80 self-center m-2 w-full text-center text-white hover:bg-green-800/40' onClick={
                            () => setShowForm(true)
                        }><AiFillPlusCircle className='self-center mr-4'/> Add new dress
                        </div>


                    <Dresses></Dresses>

                </>
            )
        } </div>
    )
}
export default AdminHome;
