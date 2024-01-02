// import React from 'react'
import { useState } from 'react';
import './SearchBar.css'


const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log('I am Awake');
    onSubmit(term);
  }

  const handleChange = (event) => {
    // console.log(event.target.value);
    setTerm(event.target.value)
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div >
  )
}

export default SearchBar