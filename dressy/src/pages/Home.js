import React, {Component} from 'react'
import DressCard from '../components/DressCard'
import Dresses from '../components/Dresses'
import FiltersButton from '../components/FiltersButton'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

export default class Home extends Component {
    render() {
        return (
            <div className='flex flex-col h-100'>
                <FiltersButton></FiltersButton>
                {/* <SearchBar></SearchBar> */}
                <Dresses></Dresses>
            </div>
        )
    }
}
