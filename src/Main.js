import React from "react"
import MapIcon from "./map-icon.png"
export default function Main(props){
    return(
        <div className="main-section">
            <img className="main-image" src={props.img} alt={props.alt}></img>
            <div className="info-section">
                <div className="location">
                <img className="map-icon" src={MapIcon} alt="Map icon"></img>
                    <span className="country">{props.country}</span>
                    <a className="view" href="google.com">View on Google Maps</a>
                </div>
                <h1>{props.place}</h1>
                <span>{props.date}</span>
                <p>{props.info}</p>
            </div>
        </div>
    )
}