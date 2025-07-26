import { useState } from "react"
import ChildComponent from "./ChildComponent";

export default function DataToParent(){

    const [value, setValue] = useState("");

    function pastToParent(data){
        setValue(data);
    }

    return (
        <div className="wrapper">
            <div>
                <h1>Data sent to Parent</h1>
            </div>
            <div>
                <ChildComponent func={pastToParent}/>
                <p>{value}</p>
            </div>
        </div>
    )
}