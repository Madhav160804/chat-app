import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  const [selectedUser,setSelectedUser] = useState({
    userId: 'beef',
    fullName: '',
    profilePic: '',
  });
  
  return <div className='flex sm:h-[450px] md:h-[500px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <MessageContainer selectedUser={selectedUser} />
    </div>
}

export default Home
