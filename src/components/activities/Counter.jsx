import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);

    function countIncrement(){
        setCount(count+1);
    }

    function countReset(){
        setCount(0);
    }

    function countDecrement(){
        setCount(count-1);
    }


    return (
        <div className="wrapper">
            <div>
                <h1>Counter</h1>
            </div>
            <div>
                <h1 className="text-2xl">{count}</h1>
            </div>
            <div className="parent-col">
                <button onClick={countDecrement}>-</button>
                <button onClick={countReset}>Reset</button>
                <button onClick={countIncrement}>+</button>
            </div>
        </div>
    )
}