import React from 'react'
import Pics from '../Photos/Photos.css'
const Photos = (props) => {


    return (
        <div className="nasa-photo-wrapper">
            <img src={props.photo.hdurl} alt={props.photo.title}/>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <p>{props.photo.explanation}</p>
            <p>{props.photo.copyright}</p>
        </div>
    )
}

export default Photos

