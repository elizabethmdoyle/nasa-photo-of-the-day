import React from 'react'
import Pics from '../Photos/Photos.css'
const Photos = (props) => {


    return (
        <div className="nasa-photo-wrapper">
            <h1>NASA Photo of the Day</h1>
            <img src={props.photo.hdurl} alt={props.photo.title}/>
            <h1>{props.photo.title}</h1>
            <p>{props.photo.date}</p>
            <p>{props.photo.explanation}</p>
            <p>{props.photo.copyright}</p>
        </div>
    )
}

export default Photos

