import React, { useState } from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = ({selectedUser,setSelectedUser}) => {

  const [query, setQuery] = useState("");

  return <div className='border-r border-slate-500 p-4 flex flex-col'>
    <SearchInput setQuery={setQuery}/>
    <div className='divider px-3'></div>
      <Conversations query={query} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <LogoutButton />
    </div>
}

export default Sidebar
