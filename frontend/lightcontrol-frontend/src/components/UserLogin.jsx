import React, { useState } from 'react'
import '../styles/UserLogin.css'
import Button from './Button'

const UserLogin = () => {
    const [name, setName] = useState("")
    const [pp, setPp] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = {
            name: name,
            pp: pp
,
            email:email
        }
        await addPlace(result)
    }

    return (
        <div className="user-form-container">
            <form className="user-form" onSubmit={handleSubmit}>
                <NameFormField value={name} onChange={(e => setName(e.target.value))} />
                <PPFormField value={password} onChange={(e) => setPp(e.target.value)} />
                <EmailFormField value={email} onChange={(e) => setEmail(e.target.value)} />
                <Button name="LogIn" type="submit" />
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