import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import UserLogin from '../components/UserLogin'
import '../styles/Home.css'

const Home = ({user}) => {
    useEffect(() => {
        console.log(user)
    }, [user])
    return (

        <div className='container'>
            <div className='welcome'>
                <h1>Welcome Home,</h1>
                <h2>{user}</h2>
            </div>

            <div className='card-sample'>
                <div className='bedroom'></div>
                <div className='kitchen'></div>
                <div className='livingroom'></div>
                <div className='bathroom'></div>
            </div>

        </div>
    )

}

export default Home