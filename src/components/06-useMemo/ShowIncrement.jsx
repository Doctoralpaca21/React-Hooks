import React from 'react'

export const ShowIncrement = ({ increment }) => {
    return (
        <button onClick={() => {
            increment(5);
        }}>
            Increase
        </button>
    )
}
