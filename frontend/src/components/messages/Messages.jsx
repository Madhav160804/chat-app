import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import { useSocketContext } from '../../context/SocketContext'

const Messages = ({selectedUser,messages,setMessages}) => {
  const { loading } = useGetMessages(selectedUser,setMessages);
  const { newMessage } = useSocketContext();
  const lastMessageRef = useRef(null);

  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

  useEffect(() => {
    if (newMessage?.senderId === selectedUser.userId) {
      setMessages(prev => [...prev, newMessage]);
    }
  }, [newMessage]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
        {!loading && messages.length>0 && 
         messages.map( 
          (message) => {
            return <Message 
            key={message._id} 
            message={message}
            selectedUser={selectedUser}
            />
          })}
          {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
          {!loading && messages.length === 0 && (
            <p className='text-center'>Send a message to start the conversation</p>
          )}
        <div ref={lastMessageRef}/>
    </div>
  )
}

export default Messages
