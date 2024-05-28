import React, { useState } from 'react'

const Conversation = ({user,emoji,selectedUser,setSelectedUser}) => {

  const selected = (selectedUser.userId===user._id);
  const conversationClickHandler = () => {
    setSelectedUser({
        fullName: user.fullName,
        userId: user._id,
        profilePic: user.profilePic
    })
  }

  return <>
    <div className={`flex gap-2 items-center ${selected ? 'bg-blue-600' : 'hover:bg-sky-500'}  rounded p-2 py-1 cursor-pointer`} onClick={conversationClickHandler}>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src={user.profilePic} alt="user avatar" />
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>{user.fullName}</p>
                <span className='text-x1'>{emoji}</span>
            </div>
        </div>
    </div>
    <div className='divider my-0 py-0 h-1'/>
    </>
}

export default Conversation
