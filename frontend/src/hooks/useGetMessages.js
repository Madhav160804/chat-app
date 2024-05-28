import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
// import { useAuthContext } from '../context/AuthContext';

const useGetMessages = (selectedUser,setMessages) => {
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const getMessages = async () => {
            try {
                setLoading(true);
                const url = '/api/messages/get/'+selectedUser.userId;
    
                const res = await axios.post(url);
                if(res.data.error) {
                    throw new Error(res.data.error);
                }     
                setMessages(res.data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        getMessages();

    },[selectedUser]);

    return {loading};
}

export default useGetMessages
