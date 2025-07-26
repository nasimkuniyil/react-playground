import { useState } from "react"

export default function ChangeColor(){

    const [val, setVal] = useState(false);

    function handleClick(){
        setVal(!val);
    }

    return (
        <div className="wrapper">
            <div>
                <h1>Change color</h1>
            </div>
            <div className="parent-col">
                <div className={`${val ? "bg-blue-500" : "bg-red-500"} h-[50px] w-[50px]`}></div>
                <div className={`${val ? "bg-red-500" : "bg-blue-500"} h-[50px] w-[50px]`}></div>
            </div>
            <div>
                <button className="bg-gray-200 p-2 rounded-xl" onClick={handleClick}>Change</button>
            </div>
        </div>
    )
}