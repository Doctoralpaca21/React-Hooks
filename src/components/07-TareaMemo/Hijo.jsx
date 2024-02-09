import React from "react"


export const Son = React.memo(({ number, increase }) => {
    console.log("xd?")
    return (
        <div>
            <button onClick={() => increase(number)}>
                {number}
            </button>
        </div>
    )
})
