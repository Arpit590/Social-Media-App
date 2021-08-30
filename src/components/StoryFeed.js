import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectDarkMode } from '../data/redux/userSlice'
import "./StoryFeed.css"


function StoryFeed({name, avatarSrc}) {

    const darkMode = useSelector(selectDarkMode)
    return (
        <div className="storyFeed">
            <Avatar
            className="storyFeed__avatar"
            src={avatarSrc}
            alt="Avatar"
            />
            <h3 className={darkMode ? "storyFeedHeadingOn": "storyFeedHeadingOff"}>{name}</h3>
        </div>
    )
}

export default StoryFeed
