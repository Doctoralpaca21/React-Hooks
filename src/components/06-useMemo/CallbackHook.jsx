import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment  = () => {
    //     setCounter( counter + 1)
    // }

    const increment = useCallback((jump) => {
        setCounter( c => c + jump )
    },[setCounter]);

    useEffect(()=>{

    },[setCounter])

    return (
        <div>
            <h1>UseCallback Hook {counter} </h1>
            <hr />
            
            <ShowIncrement increment={increment} />
        </div>
    )
}
