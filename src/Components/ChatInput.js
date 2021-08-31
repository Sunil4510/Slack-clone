import { Button } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useStateValue } from '../Authentication/StateProvider'
import db from '../database/firebase'
import "./ChatInput.css"
import firebase from 'firebase'

const ChatInput = ({channelName,channelId}) => {
   
    const [input, setInput] = useState("");
    const [{user}] = useStateValue();
    const sendMessage = (e)=>{
        e.preventDefault();
        if(channelId){
            if(input){
            db.collection("rooms").doc(channelId).collection("messages").add({
                message:input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
            });
        }
    }
        setInput("");
    };
    return (
        <>
        <div className="chatInput">
            <form>
                <input value={input}
                onChange={(e)=>setInput(e.target.value)}
                 placeholder={`message   #${channelName?.toLowerCase()}`}/>
            
                <Button disabled={input.length<2} type="submit" onClick={sendMessage}>SEND</Button>
            </form>
        </div>
        </>
    )
}

export default ChatInput
