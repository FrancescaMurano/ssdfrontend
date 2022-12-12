import React, {Component, useContext} from 'react'
import Dresses from '../components/Dresses'
import {v4 as uuidv4} from 'uuid';


const Home = () => {

    return (
        <div key={
                uuidv4()
            }
            className='flex flex-col min-h-screen'>
            <Dresses></Dresses>
        </div>
    )
}
export default Home;
