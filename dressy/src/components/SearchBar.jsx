import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div className='flex flex-direction row m-7 mt-0'>
        <input className="border-solid border-2 rounded p-5 h-10 w-full border-black" type="text" placeholder="Search your dress..." ></input>
        <button className='ml-5 h-full mr-5 p-2 rounded bg-red-800 text-white self-center text-center align-center hover:bg-black hover:text-white'>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
      </div>
    )
  }
}
