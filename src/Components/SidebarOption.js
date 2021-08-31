import React from 'react';
import "./SidebarOption.css";
import db from "../database/firebase"
import { useHistory } from 'react-router'; 
const SidebarOption = ({Icon, title, id, addChannelOption}) => {
const history = useHistory(); 
  

    const selectChannel =()=>{
        if(id){
            history.push(`/room/${id}`);
        }
        else{
            history.push(title);
        }
    };

    const addChannel = () =>{
        const channelName = prompt("please enter channel name ");
        if(channelName){
            db.collection("rooms").add({
                name : channelName,
            })
        }

    }    
    return (
        <React.Fragment>
            <div className="sidebarOption" onClick={addChannelOption?addChannel:selectChannel}>
                {Icon && <Icon className="sidebarOption_icon"/>}
                {Icon?
                    (<h3>{title}</h3>
                        ):(
                            <h3 className="sidebarOption_channel">#<span className="sidebarOption_hash">{title}</span></h3>
                            )}
            </div>
        </React.Fragment>
    )
}

export default SidebarOption
