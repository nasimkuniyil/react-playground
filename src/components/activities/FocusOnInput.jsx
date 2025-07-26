import { useRef } from "react"

export default function FocusOnInput(){

    const inputRef = useRef(null);

    return (
        <div className="wrapper">
            <div className="parent-col">
                <input type="text"  ref={inputRef} />
                <input type="text"  ref={inputRef} />
            </div>
            <div>
                <button onClick={()=>{inputRef.current.focus()}}>Focus on input</button>
            </div>
        </div>
    )
}