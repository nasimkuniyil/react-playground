import { useState } from "react";

export default function DisplayObj(){
      const obj = {
        name: " nasim",
        mob:987654321,
        place : "Kannur"
      }

      const [{name, mob, place}, setState] = useState(obj);

    return (
        <div className="wrapper">
            <div>
                <h1>Display Obj</h1>
            </div>
            <div>
                <p>{name}</p>
                <p>{mob}</p>
                <p>{place}</p>
            </div>
        </div>
    )
}