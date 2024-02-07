import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithHook = () => {

    const{state, increment, decrement, reset} = useCounter(50);
    console.log(state)
    return (
        <>
            <h1>Counter with Hooks: { state }</h1>
            <hr />

            <button onClick={()=> increment(2)}>+2</button>
            <button onClick={reset}>Reset</button>
            <button onClick={()=> decrement(2)}>-2</button>
        </>
    )
}
