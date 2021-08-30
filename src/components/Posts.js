import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../firebase';
import Post from './Post';
import "./Posts.css";
import {selectPost, setPosts} from "../data/redux/postSlice";
import { useState } from 'react';
import { selectDarkMode } from '../data/redux/userSlice';

function Posts() {
    const post = useSelector(selectPost);
    const dispatch = useDispatch();
    const darkMode = useSelector(selectDarkMode);

    useEffect(()=>{
        {db.collection("posts").orderBy("timestamp", "desc")
                .onSnapshot(snapshot=>{
                    dispatch(setPosts(snapshot.docs.map(doc=>({
                        id: doc.id,
                        data: doc.data()
                    }))))
                })
                }
                console.log(post);
    },[])


    return (
        <div className={darkMode ?"postsOn" : "postsOff"}>
               {post.map(({id, data:{displayName, caption, imgSrc, avatarSrc}})=>(
                   <Post
                   key={id}
                   avatarSrc={avatarSrc}
                   name={displayName}
                   caption={caption}
                   imgSrc={imgSrc}
                   />
               ))} 
        </div>
    )
}

export default Posts
