import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = ({selectedUser}) => {

  const { loading,sendMessage } = useSendMessage();

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = e.target[0].value;
    sendMessage(selectedUser,message);
  };
  return <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input type="text" 
                className='border text-sm rounded-lg block w-full p-2.5'
                placeholder='Send a message'
                />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3' disabled={loading}>
                    {loading ? <span className='loading loading-spinner'></span> : <BsSend />}
                </button>
            </div>
  </form>
}

export default MessageInput
