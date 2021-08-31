import React from 'react'
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import "./header.css";
import { useStateValue } from '../Authentication/StateProvider';

const Header = () => {
    const [{user}] = useStateValue();
    return (
        <React.Fragment>
            <div className="header">
                <div className="header_left">
                {/*Avaters for logged in user and time icon  */}
                <Avatar className="header_avatar" 
                alt={user?.displayName} 
                src={user?.photoURL}/>
                <AccessTimeIcon/>
                </div>
                <div className="header_search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
{/*                <TextField id="standard-basic" label="Search" />
    */}                </div>
                <div className="header_right">
                    <HelpOutlineIcon/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header

