import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter';
import './useEffect.css';
export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { author, quote } = !!data && data[0];
    const [boxSize, setBoxSize] = useState({})
    const pTag = useRef()
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect() )
      
    }, [quote])
    // console.log(author, quote)
    return (
        <>
            <h1>Layout Effect</h1>
            <hr />


            <blockquote className='blockquote'>
                <p ref={pTag}> {quote}</p>
                <footer>{author}</footer>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button onClick={increment}>
                Next Quote
            </button>

        </>
    )
}
