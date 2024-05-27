import { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
// import { useAuthContext } from '../context/AuthContext';

const useGetMessages = () => {
    const [loading,setLoading] = useState(false);
    // const { authUser } = useAuthContext();


    const getMessages = async (selectedUser) => {

        try {
            setLoading(true);
            const url = '/api/messages/get/'+selectedUser.userId;

            const res = await axios.post(url);
            if(res.data.error) {
                throw new Error(res.data.error);
            }
            
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return {loading,getMessages};
}

export default useGetMessages
