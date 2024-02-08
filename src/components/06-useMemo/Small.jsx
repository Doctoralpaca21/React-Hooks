import React from 'react'

export const Small = React.memo(({ value }) => {
    console.log("xd?")
    return (
        <small>
            {value}
        </small>
    )
});

// export const SmallMemo = React.memo(Small)


