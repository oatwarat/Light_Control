import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import UserLogin from '../components/UserLogin'
import '../styles/Home.css'

const Home = ({name=null}) => {
    const user = name

    return (
        
        <div className='container'>
            <div>
                <Button name='Login' func='login' />
                {/* <UserLogin /> */}
            </div>
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