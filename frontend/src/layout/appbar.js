import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/HomeOutlined';

const token = localStorage.getItem("token");

export default function AppBarSys() {

    const HomeRoutes = () => window.location.href = "/locadora/home"
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <HomeIcon onClick={HomeRoutes} />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Locação de Carros
                    </Typography>
                    {token ?
                        <Button
                            onClick={() => localStorage.removeItem('token')}
                            href="/locadora/login"
                            color="inherit">
                            Logout
                        </Button> :
                        <Button href="/locadora/login" color="inherit">Login</Button>
                    }

                </Toolbar>
            </AppBar>
        </Box>
    );
}
