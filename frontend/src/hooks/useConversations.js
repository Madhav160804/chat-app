import axios from 'axios'
import { useEffect, useState } from 'react';

const useConversation = () => {

    const [ users, setUsers ] = useState([])
    useEffect(() => {
        axios.get('/api/users')
        .then( (res) => {
            setUsers(res.data.filteredUsers)
        });
    },[]);
    return { users };
}

export default useConversation;