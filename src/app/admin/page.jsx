"use client"
import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import LoginPage from '@/components/Login'
import { useRouter } from 'next/navigation'

export default function Admin() {
    const [tokenPass, setTokenPass] = useState(false)
    const router = useRouter()

    const authenticate = (username, password) => {
        // fetch token
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(res => {
                if (!res.ok) {
                    if (res.status === 400) {
                        // Handle 400 error
                        return res.json().then(errorData => {
                            throw new Error('Bad Request: ' + errorData.message);
                        });
                    } else {
                        // Handle other errors
                        throw new Error('Network response was not ok');
                    }
                }
                return res.json()
            })
            .then((data) => {
                console.log('login success')
                localStorage.setItem("token", data.token);
                setTokenPass(true);
            }).catch(e => {
                console.log('login failed', e)
                setTokenPass(false);
            })
    }

    const handleLogin = (username, password) => {
        authenticate(username, password)
    }

    // useEffect(()=>{
    //     let localTokenValue = localStorage.getItem('token')

    // }, [])
    // useEffect(() => {
    //     let localTokenValue = localStorage.getItem('token')
    //     if (localTokenValue) {
    //         setTokenPass(true);
    //         router.push('/admin/dashboard', { scroll: false })
    //     }else{
    //         setTokenPass(false);
    //     }
    // }, [])

    useEffect(() => {
        if (tokenPass) {
            router.push('/admin/dashboard', { scroll: false })
        }
    }, [tokenPass])

    return (
        <Box>
            {!tokenPass && <LoginPage handleLogin={handleLogin} />}
            {tokenPass && "Loading..."}
        </Box>
    )
}