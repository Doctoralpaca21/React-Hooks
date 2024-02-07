import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
      console.log('Component renderer')
    
      return () => {
        console.log('Component clear')
      }
    }, [])
    

    return (
        <>
            <h2>Piero lujan Carrion</h2>
        </>
    )
}
