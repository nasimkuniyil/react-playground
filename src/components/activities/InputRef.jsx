import { useRef } from "react";

export default function InputRef(){

    const inpRef = useRef(null);
    const outRef = useRef(null);

    function handleChange(){
        outRef.current.innerText = inpRef.current.value;    
    }

    return (
        <div className="wrapper">
            <div>
                <h1>Input Ref</h1>
            </div>
            <div>
                <input ref={inpRef} type="text" onChange={handleChange}/>
            </div>
            <div>
                <p ref={outRef}></p>
            </div>
        </div>
    )
}