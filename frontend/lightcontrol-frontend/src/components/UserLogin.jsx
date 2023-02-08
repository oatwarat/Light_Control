import React, { useState, useRef } from 'react'
import '../styles/UserLogin.css'
import Button from './Button'

const UserLogin = ({setName,setPp,setEmail}) => {

    const id_user = useRef()
    const ppp = useRef()
    const email = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(id_user.current.value)
        setName(id_user.current.value)
        // // const result = {
        // //     name: name,
        // //     pp: pp,
        // //     email:email
        // // }
        // // getName(name)
        // setName()
    }

    return (
        <div className="user-form-container" onSubmit={handleSubmit}>
            <form className="user-form" >
                {/* <NameFormField ref={id_user} /> */}
                <div className="form-1-field">
                    <label><h4> Name:</h4></label>
                    <input className="name-field" type="text" ref={id_user} />
                </div>
                <PPFormField  ref={ppp}/>
                <EmailFormField  ref={email}/>
                <Button name="LogIn" type="submit" id="login-ready"/>
            </form>
        </div>
    )
}

const NameFormField = ({ name, value, onChange }) => {
    return (
        <div className="form-1-field">
            <label>
                <h4> Name:</h4>
                
                {name}</label>
            <input className="name-field" type="text" value={value} onChange={onChange} />
        </div>
    )
}


const PPFormField = ({ pp, value, onChange }) => {
    return (
        <div className="form-2-field">
            <label>
                <h4>
                    Password:
                </h4>
                {pp}</label>
            <input className="pp-field" type="text" value={value} onChange={onChange} />
        </div>
    )
}

const EmailFormField = ({ email, value, onChange }) => {
    return (
        <div className="form-3-field">
            <label>
                <h4>
                    Email:
                </h4>
                {email}</label>
            <input className="email-field" type="text" value={value} onChange={onChange} />
        </div>
    )
}

export default UserLogin