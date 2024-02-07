import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const{counter, increment} = useCounter(1);
    const { loading, data } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const {author, quote} = !!data && data[0];

    // console.log(author, quote)
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading ?
                    (
                        <div>
                            Loading ...
                        </div>
                    )
                    :
                    (
                        <blockquote>
                            <p>{quote}</p>
                            <footer>{author}</footer>
                        </blockquote>
                    )
            }

            <button onClick={increment}>
                Next Quote
            </button>

        </>
    )
}
