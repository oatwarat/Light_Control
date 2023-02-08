import React from 'react'
import '../styles/Button.css'

const Button = ({name, func}) => {
    return (
        <button className='button' id={func}>
            {name} 
        </button>
    )
}

export default Button