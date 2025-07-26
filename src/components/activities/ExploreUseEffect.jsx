import { useEffect, useState } from "react"

export default function ExploreUseEffect(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log("component mounted")
        return ()=>{
            console.log('this component cleaned')
        }
    },[count])
    return (
        <div className="wrapper">
            <div>
                <h1>Explore useEffect</h1>
            </div>
            <div>
                <h1>{count}</h1>
            </div>
        </div>
    )
}