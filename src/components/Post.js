import { Avatar, IconButton } from '@material-ui/core';
import React from 'react'
import "./Post.css";
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useSelector } from 'react-redux';
import {selectDarkMode} from "../data/redux/userSlice";

function Post({name, avatarSrc, imgSrc, caption}) {

    const darkMode = useSelector(selectDarkMode)
    return (
        <div className="post">
            <div className={darkMode? "post__containerOn" :"post__containerOff"}>
                <div className="post__header">
                    <Avatar
                    src={avatarSrc}
                    alt="Avatar"
                    />
                    <p className={darkMode? "post__headerParaOn" : "post__headerParaOff"}>{name}</p>
                </div>
                <div className="post__feed">
                    <img src={imgSrc} alt="PostImage"/>
                    <p className={darkMode ? "post__feedParaOn" : "post__feedParaOff"}><strong>{name}</strong>: {caption}</p>
                </div>
                <div className="post__icons">
                    <IconButton>
                        <FavoriteBorderRoundedIcon className={darkMode ? "post__likeOn" : "post__likeOff"}/>
                    </IconButton>
                    <IconButton>
                        <ChatBubbleRoundedIcon className={darkMode ? "post__commmentOn" : "post__commentOff"}/>
                    </IconButton>
                    <IconButton>
                        <ShareRoundedIcon  className={darkMode ? "post__sendOn" : "post__sendOff"}/>
                    </IconButton>
                    <IconButton>
                        <SendRoundedIcon  className={darkMode ? "post__shareOn" : "post__shareOff"}/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Post
