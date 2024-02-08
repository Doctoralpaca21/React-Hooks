import { useMemo, useState } from "react"
import { useCounter } from "../../hooks/useCounter"


export const MemoHook = () => {

    const {counter, increment} = useCounter(10)
    const [show, setShow] = useState(true)

    const processHeavy = (iterations) => {
       
        for (let index = 0; index < iterations; index++) {
            // const element = [index];
             console.log("pepepe")
        }
    }

    const memoProcessHeavy = useMemo(() => processHeavy(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <hr />

            <p>{memoProcessHeavy}</p>
            <h2>Counter: <small>{counter}</small>  </h2>
            <button
                onClick={increment}
            >
                +1
            </button>

            <button onClick={() => {setShow(!show)}}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
