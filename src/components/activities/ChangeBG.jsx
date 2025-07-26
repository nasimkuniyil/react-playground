import { useState } from "react"

export default function ChangeBG(){

    const [color, setColor]= useState("white");

    const colors = ["Blue", "Yellow", "Orange", "Green", "Red", "Pink"];

    function handleClick(event){
        console.log(event.target);
        setColor(event.target.innerText.toLowerCase());
    }

    return(
        <div className="wrapper" style={{backgroundColor:color}}>
            <div>
                <h1>Change Background color</h1>
                <p>{color}</p>
            </div>
            <div onClick={handleClick} className="parent-col">
                {colors.map((clr, index)=>(<button key={index}>{clr}</button>))}
            </div>
        </div>
    )
}