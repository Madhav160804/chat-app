import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import formatDate from '../../../utils/dateFormat';

const Message = ({message,selectedUser}) => {
  const { authUser } = useAuthContext();
  const isSender = (message.senderId==authUser._id);
  const bgColor = isSender ? 'bg-blue-500' : '';
  const profilePic = isSender ? authUser.profilePic : selectedUser.profilePic ;
  return (
    <div className={`chat ${isSender ? 'chat-end':'chat-start'}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img src={profilePic} alt="Tailwind CSS Chat bubble component" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bgColor} `} >{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formatDate(message.createdAt)}</div>
    </div>
  )
}

export default Message
