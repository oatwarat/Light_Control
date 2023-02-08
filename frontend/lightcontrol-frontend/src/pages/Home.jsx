import React, { useEffect, useState } from 'react'
import AddRoom from '../components/AddRoom'
import Button from '../components/Button'
import '../styles/Home.css'

const Home = () => {

    return (
        
        <div className='container'>
            <div>
            <Button name='Login' func='login' />
            </div>
            <div className='welcome'>
                <h1>Welcome Home,</h1>
                <h2>User's name</h2>
            </div>

            <div className='card-sample'>
                <div className='bedroom'></div>
                <div className='kitchen'></div>
                <div className='livingroom'></div>
                <AddRoom />
            </div>

        </div>
    )

}

export default Home