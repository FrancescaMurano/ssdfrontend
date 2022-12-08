import React, {Component, useContext} from 'react'
import Dresses from '../components/Dresses'
import DressContext from '../context/DressContext'


const Home = () => {
    const {dress_loan} = useContext(DressContext);

        return (
            <div className='flex flex-col h-100'>
                <Dresses></Dresses>
            </div>
        )
    }
export default Home;
