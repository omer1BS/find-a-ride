import React from 'react';
import { Link } from "react-router-dom"; 
export default function Login() {
    return (
        <>
            <h1>Login</h1>
            <Link to="/sign-up">Sign Up</Link>
        </>
    )
}