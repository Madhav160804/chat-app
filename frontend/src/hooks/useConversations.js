import axios from 'axios'
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useConversation = (query) => {
    const [loading, setLoading] = useState(false);
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        const getConversations = async() => {
            setLoading(true);
            try {
                const res = await axios.get('/api/users');
                if(res.data.error) {
                    throw new Error(res.data.error)
                }
                const allUsers = res.data.filteredUsers;
                const filteredUsers = allUsers.filter(user =>
                    user.fullName.toLowerCase().includes(query.toLowerCase())
                )
                setUsers(filteredUsers)
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false); 
            }
        
        }
        
        getConversations();
    },[query] );
    return { loading,users };
    // users are the users of the conversations
}

export default useConversation;