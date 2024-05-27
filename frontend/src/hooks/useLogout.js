import { useState } from "react"
import { toast } from 'react-hot-toast'
import { useAuthContext } from "../context/AuthContext";

const useLogout = () => {
    const [loading,setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        
        setLoading(true);
        try {
            const res = await fetch('/api/auth/logout',{
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({})
            })

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            } 

            // localstorage
            localStorage.removeItem('chat-user');
            // context
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
            toast.success('Logged out successfully');
        }
    }
    return {loading,logout};
}

export default useLogout;