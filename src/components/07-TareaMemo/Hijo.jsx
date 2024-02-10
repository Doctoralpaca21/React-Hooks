import React from "react"


export const Son = React.memo(({ number, increase }) => {
    console.log("xd?")
    return (
        <div className="flex flex-row ">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" onClick={() => increase(number)}>
                {number}
            </button>
        </div>
    )
})
