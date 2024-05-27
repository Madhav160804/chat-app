import Conversation from "./Conversation"
import useConversations from '../../hooks/useConversations'

const Conversations =  () => {

  const { users } = useConversations();
  
  return <div className='py-2 flex flex-col overflow-auto'>
        {users.map( ({fullName,profilePic},index) => {return <Conversation key={index} 
        fullName={fullName} profilePic={profilePic} />})}
    </div>
}

export default Conversations
