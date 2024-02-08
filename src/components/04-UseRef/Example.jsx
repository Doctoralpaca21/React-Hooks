import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const ExampleRef = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show)
    }
    return (
        <div>
            <h1>Real Example useRef</h1>
            <hr />

            {show && < MultipleCustomHooks />}

            <button
                className='btn'
                onClick={handleShow}
            >
                Show/Hide
            </button>
        </div>
    )
}
