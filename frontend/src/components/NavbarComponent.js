import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router";
import { useEffect, useState } from 'react';


export default function NavbarComponent() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setUsername('');
        navigate("/login");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ backgroundColor: 'rgba(245,245,245,0.91)', color: 'black' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{ flexGrow: 1 }}>
                        {username ? `Witaj, ${username}` : 'Zaloguj się'}
                    </Typography>
                    <Typography onClick={() => navigate("/")} variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
                        SmartAcademy
                    </Typography>
                    <Button onClick={() => navigate("/students")} color="inherit">Students</Button>
                    {username ? (
                        <Button onClick={handleLogout} color="inherit">Logout</Button>
                    ) : (
                        <Button onClick={() => navigate("/login")} color="inherit">Login</Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

