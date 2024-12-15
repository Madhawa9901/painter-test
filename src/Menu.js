import React from "react"
import './App.css'

const Menu = ({setLineColor, setLineWidth, setLineOpasity}) => {
    return(
        <div className="Menu">
            <label>Brush Color</label>
            <input
                type="color"
                onChange={((e) => {setLineColor(e.target.value)})}
            />
            <label>Brush width</label>
            <input
                type="range"
                min="3"
                max="20"
                onChange={((e) => {setLineWidth(e.target.value)})}
            />
            <label>Brush Opacity</label>
            <input
                type="range"
                min="1"
                max="100"
                onChange={((e) => {setLineOpasity(e.target.value / 100)})}
            />
        </div>
    )
}
export default Menu;