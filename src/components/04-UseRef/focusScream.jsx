import { useRef } from 'react'

export const FocusScream = () => {

    const inputRef = useRef();
    
    const handleClick = () => {
        inputRef.current.select()
    }

    return (
        <div>
            <h1>Focus Scream</h1>
            <hr />

            <input
                type="text"
                placeholder='Your name'
                ref={inputRef}
            />

            <button
                onClick={handleClick}
            >

                Focus

            </button>
        </div>
    )
}
