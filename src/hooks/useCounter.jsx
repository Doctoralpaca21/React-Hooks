import  { useState } from 'react'

export const useCounter = (initialState = 10) => {

    const [state, setState] = useState(initialState);

    const increment = (jump = 1) => {
        setState(state+jump)
    }

    const decrement = (jump = 1) => {
        setState(state-jump)
    }

    const reset = () => {
        setState(initialState);
    }

    // console.log("state hook" + state)
    return {
        state,
        increment,
        decrement,
        reset
    }
}
