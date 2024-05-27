import Conversation from "./Conversation"
import useConversations from '../../hooks/useConversations'
import { getRandomEmoji } from "../../../utils/emoji";

  const Conversations =  ({query,selectedUser,setSelectedUser}) => {

  const { loading, users } = useConversations(query);

  return <div className='py-2 flex flex-col overflow-auto'>
        {loading ? <span className='loading loading-spinner'></span> : null}
        {users.map( 
          (user) => {
            return <Conversation 
            key={user._id} 
            user={user}
            emoji={getRandomEmoji()}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            />
          })}
    </div>
}

export default Conversations
