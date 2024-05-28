import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";
import { toast } from "react-hot-toast";

const MessageInput = ({selectedUser,setMessages}) => {

  const { loading,sendMessage } = useSendMessage(selectedUser);
  const [input,setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await sendMessage(input,setMessages);
      setInput('');
    } catch (error) {
      toast.error(error.message);
    }
  };
  return <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input type="text" 
                className='border text-sm rounded-lg block w-full p-2.5'
                placeholder='Send a message'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3' disabled={loading}>
                    {loading ? <span className='loading loading-spinner'></span> : <BsSend />}
                </button>
            </div>
  </form>
}

export default MessageInput
