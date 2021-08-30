import { Button } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../data/redux/userSlice';
import { db, storage } from '../firebase';
import "./Upload.css";
import firebase from "firebase";

function Upload({onClose}) {
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
    const user = useSelector(selectUser);

    const handleChange=(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const upload=()=>{
        const uploadedTask = storage.ref(`posts/${image.name}`)
        .put(image);
        uploadedTask.on(
            "state_changed", 
            null,
            (error)=>{
                alert(error.message)
            },
            ()=>{
                storage
                .ref("posts")
                .child(image.name)
                .getDownloadURL()
                .then(url=>{
                    db.collection("posts").add({
                        displayName: user.username,
                        caption: caption,
                        imgSrc: url,
                        avatarSrc: user.imgSrc,
                        timestamp: firebase.firestore.FieldValue.serverTimestamp()
                    })
                })
            }
        )
        setCaption("");
        setImage(null);
        onClose();
    }
    return (
        <div className="upload">
            <img src="./assets/LogoImage.png" alt="Logo"/>
            <h1>Upload a post</h1>
            <input type="text"
            className="upload__input"
            value={caption}
            onChange={(e)=>setCaption(e.target.value)}
            placeholder="Enter a caption"
            />
            <input
            className="upload__file"
            type="file"
            onChange={handleChange}
            />
            <Button
            className="upload__button"
            onClick={upload}
            >
                Post
            </Button>
        </div>
    )
}

export default Upload
