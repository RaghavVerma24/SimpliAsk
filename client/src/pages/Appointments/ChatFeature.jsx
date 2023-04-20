import React, { useState } from 'react'

const ChatFeature = () => {
    function submit(){
        console.log(text)
        setText("")
    }
    
    let [text, setText] = useState("")
    return (
        <div className='relative bg-[#191b3c] text-white rounded-lg mt-5 h-[50vh]'>
            {/* <form> */}
                <div className="absolute bottom-0 flex w-full">
                    <input type="text" value={text} required onChange={(e) => {setText(e.target.value);}} className="ml-3 w-full bg-[#6c63ff] rounded-full p-2 my-5" />
                    <button className='mx-3 bg-black h-full p-3 rounded-lg my-auto' onClick={submit}>Send</button>
                </div>
            {/* </form> */}
        </div>
    )
}

export default ChatFeature