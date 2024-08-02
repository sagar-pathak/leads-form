import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const loginForm = {
    margin: '60px',
}

export default function Login({handleLogin}) {
    const [username, setUsername] = useState('michaelw');
    const [password, setPassword] = useState('michaelwpass');

    return (
        <Box sx={loginForm}>
            <Stack spacing={2} direction="column">
                <TextField value={username} label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} />
                <TextField value={password} label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                    <Button variant="contained" onClick={() => handleLogin(username, password)}>Login</Button>
            </Stack>
        </Box>
    )
}