import React from 'react'
import "./Message.css"
const Message = ({message,timestamp,user,userImage}) => {
    return (
        <React.Fragment>
            <div className="message">
                <img src={userImage} alt="userImage"/>
                <div className="message_info">
                    <h3 className="user_name">{user} <span className="message_timestamp"> {new Date(timestamp?.toDate()).toUTCString()}</span></h3>
                    <p>{message}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Message;
