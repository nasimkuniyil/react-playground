import { useState } from "react";

export default function ChildComponent({func}){

    const [value, setValue] = useState("");

    return (
        <div>
            <div>
                <h1>This is child component</h1>
            </div>
            <div className="parent-col">
                <input type="text" onChange={(e)=>setValue(e.target.value)}/>
                <button onClick={()=>func(value)}>show it</button>
            </div>
        </div>
    )
}