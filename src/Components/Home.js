import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ExpenseList from './expense/List.js';
import Receipts from './expense/Receipts.js';


export default function Home() {
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        console.log(authToken)
        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div>
            <p></p>
            <ExpenseList/>
            <Receipts/>
        </div>
    )
}