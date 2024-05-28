import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import useGetMessages from './useGetMessages';
// import { useAuthContext } from '../context/AuthContext';

const useSendMessage = (selectedUser) => {

    const [loading,setLoading] = useState(false);
    // const { authUser } = useAuthContext();
    const sendMessage = async (message,setMessages) =>{
        const url = '/api/messages/send/' + selectedUser.userId;
        
        setLoading(true);
        try {
            const res = await axios.post(url, {
                message,
            }, { 
                'Content-Type': 'application/json',
            });
            setMessages(prev=>[...prev,res.data]);
            // console.log(res.data)


        } catch (error) {
            // toast.error(error.message);
            toast.error('Could not send message!');
        } finally {
            setLoading(false);
        }

    }

    return {loading,sendMessage};
}

export default useSendMessage
