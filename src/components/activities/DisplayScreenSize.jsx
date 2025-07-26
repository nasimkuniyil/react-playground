import { useEffect, useState } from "react"

export default function DisplayScreenSize(){

    //show display width when resizing the screen
    //window.innerWidth();

    const [width, setWidth] = useState(window.innerWidth);

    
    useEffect(()=>{
        // setWidth(window.innerWidth);
        window.addEventListener('resize', ()=>setWidth(window.innerWidth));

        return ()=>{
            window.removeEventListener('resize',()=>console.log("cleared"));
        }
    },[width])
 
    return (
        <div className="wrapper">
            <div>
                <h1>Display Screen Size</h1>
            </div>
            <div>
                <p>{width}</p>
            </div>
        </div>
    )
}