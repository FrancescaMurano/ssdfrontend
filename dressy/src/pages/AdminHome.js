import React, {Component, useState} from 'react'
import DressCard from '../components/DressCard'
import Dresses from '../components/Dresses'
import DressForm from '../components/DressForm'

const AdminHome = () => {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className='flex flex-col h-screen self-center'>
            {
            showForm ? (
                <DressForm functions={
                        [setShowForm]
                    }
                    />
            ) : (
                <>

                    <button onClick={
                        () => setShowForm(!showForm)
                    }>
                        Add</button>
                    <Dresses></Dresses>

                </>
            )
        } </div>
    )
}
export default AdminHome;
