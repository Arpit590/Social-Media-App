import React, { useState } from 'react'
import "./Header.css";
import { Avatar, Button, IconButton, makeStyles, Modal } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import Upload from './Upload';
import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, selectUser, setDarkMode } from '../data/redux/userSlice';
import { auth } from '../firebase';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  


function Header() {

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const user = useSelector(selectUser);
    const darkMode = useSelector(selectDarkMode)
    const dispatch = useDispatch();


    const signOut=()=>{
        auth.signOut();
        console.log("out")
    }

    const DarkModeHandler=()=>{
        dispatch(setDarkMode(!darkMode))
    }

    return (
        <div className={darkMode ? "headerOn" :"headerOff"}>
            <div className="header__left">
                <img src="./assets/LogoImage.png" alt="Logo"/>
                <div className="header__leftSearch">
                    <Search/>
                    <input type="text"
                    placeholder="Search"
                    />
                </div>
            </div>
            <div className="header__right">
            <div className={darkMode ? "header__rightIconOn":"header__rightIconOff"}>
                <div className="header__rightdarkMode" onClick={DarkModeHandler}>
                    <IconButton>
                        <Brightness4RoundedIcon className={darkMode ? "header__rightBrightOn":"header__rightBrightOff"}/>
                    </IconButton>
                    <p className={darkMode ? "header__rightParaOn" : "header__rightParaOff"}>Dark Mode</p>
                </div>
                <div className="header__rightAvatarMode">
                    <IconButton>
                    <Avatar
                    className="header__rightAvatar"
                    src={user.imgSrc}
                    alt="Avatar"
                    />
                    </IconButton>
                    <p className={darkMode?"header__rightAvatarModeOn" : "header__rightAvatarModeOff"}>Hello, {user.username}!</p>
                </div>
            </div>
            <Button className={darkMode ? "header__rightButtonPostOn" :"header__rightButtonPostOff"} onClick={()=>setOpen(true)}>
                Post
            </Button>
                <Button className={darkMode ? "header__rightButtonOn": "header__rightButtonOff"}
                onClick={signOut}
                >Sign Out</Button>
            </div>
            <Modal
                open={open}
                onClose={()=>setOpen(false)}>
                {<div style={modalStyle} className={classes.paper}>
                    <Upload onClose={()=>setOpen(false)}/>
                </div>
                }
           </Modal>
        </div>
    )
}

export default Header
