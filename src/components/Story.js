import React from 'react'
import "./Story.css";
import StoryFeed from './StoryFeed';
import {storyData} from "../data/dummydata";
import { useSelector } from 'react-redux';
import { selectDarkMode } from '../data/redux/userSlice';


function Story() {

    const darkMode = useSelector(selectDarkMode);
    return (
        <div className={darkMode ? "storyOn" : "storyOff"}>
            <div className="story__container">
                {storyData.map(({id, name, avatarSrc})=>(
                    <StoryFeed
                    key={id}
                    name={name}
                    avatarSrc={avatarSrc}
                    />
                ))}
            </div>
        </div>
    )
}

export default Story
