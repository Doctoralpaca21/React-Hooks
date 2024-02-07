import React, { useEffect, useState } from 'react'
import { Message } from './message';

export const SimpleForm = () => {

    const [formstate, setFormstate] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formstate;

    useEffect(() =>{
        console.log("xd")
    }, [])

    const handleInputChange = ({target}) => {
        setFormstate({
            ...formstate,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>Use Effect</h1>
            <hr />

            <div>
                <input 
                    type="text" 
                    name='name'
                    className='form-control'
                    placeholder='Your name'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                    />
            </div>

            <div>
                <input 
                    type="text" 
                    name='email'
                    className='form-control'
                    placeholder='Your email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                    />
            </div>

            {name === '123' && <Message/> }
        </>
    )
}
