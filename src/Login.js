import React from 'react'
import LoginCard from './Components/Login/LoginCard'

export default function Login(props) {
    return (
        <div>
            <LoginCard change={props.change}/>
        </div>
    )
}
