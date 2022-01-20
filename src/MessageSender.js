import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import "./MessageSender.css"
import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import db from "./fire"
import firebase from 'firebase/compat/app';
import { useStateValue } from './StateProvider'

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit=(e)=>{ 
        e.preventDefault();
    
        db.collection('posts').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imageUrl
        })

    setInput("");
    setImageUrl("");
    };
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="messageSender__input"
                    placeholder={`What's on your mind?`}
                    />
                    <input
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="image URL (Optional)"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
            <div className="messageSender__option">
                <VideocamIcon style={{color:"red"}}/>
                <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                <PhotoLibraryIcon style={{color:"green"}}/>
                <h3>Photp/Video</h3>
                </div>

                <div className="messageSender__option">
                <InsertEmoticonIcon style={{color:"orange"}}/>
                <h3>Feeling/Activity</h3>
                </div>
            </div>
            
        </div>
    )
}

export default MessageSender
