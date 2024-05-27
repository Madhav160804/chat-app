import React from 'react'
import { FaSearch } from "react-icons/fa";


const SearchInput = ({setQuery}) => {

    const handleSearchQuery = (e) => {
        setQuery(e.target.value);
    }

    return <div className='flex items-center gap-2'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full' onChange={handleSearchQuery}/> 
        <button type='submit' className='btn btn-circle bg-sky-500 text-white' >
        <FaSearch className='outline-none'/>
        </button>
    </div>
}

export default SearchInput
