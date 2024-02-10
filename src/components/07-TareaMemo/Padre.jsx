import React, { useCallback } from 'react'
import { useState } from 'react';
import { Son } from './Hijo';

export const Padre = () => {

    const numbers = [2, 4, 6, 8, 10];
    const [value, setValue] = useState(0);

    // const increase = (num) => {
    //     setValue(value + num)
    // }

    const increase = useCallback((jump)=>{
        setValue(value => value + jump)
    },[setValue])

    return (
        <div>
            <h1 className="text-xls font-bold underline">Padre</h1>
            <p>Total: {value}</p>
            <hr />

            {
                numbers.map(n => (
                    <Son
                        key={n}
                        number={n}
                        increase={increase}
                    />
                ))
            }

           
        </div>
    )
}
