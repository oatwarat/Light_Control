import React, { useState } from 'react'
import '../styles/AddRoom.css'
import Button from './Button'

const AddRoom = () => {
    const [room, setRoom] = useState("")

    return (
        <div className='add-room'>
            <Button name='Add Room' func='add-room' />
        </div>
    )
}

export default AddRoom