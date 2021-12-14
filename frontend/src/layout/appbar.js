import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import LoginService from '../services/LoginService';

 const AppBarSys = () => {

    const HomeRoutes = () => window.location.href = "/locadora/home"

    const loginService = LoginService()

    const loggedActios = () => {
        return (
            <>
                <Button
                    onClick={() => loginService.logout()}
                    href="/locadora/compras"
                    color="inherit">
                    Compras
                </Button>
                <Button
                    onClick={() => loginService.logout()}
                    href="/locadora/locacoes"
                    color="inherit">
                    Clientes
                </Button>
                <Button
                    onClick={() => loginService.logout()}
                    href="/locadora/locacoes"
                    color="inherit">
                    Funcionários
                </Button>
                <Button
                    onClick={() => loginService.logout()}
                    href="/locadora/locacoes"
                    color="inherit">
                    Locações
                </Button>
                <Button
                    onClick={() => loginService.logout()}
                    href="/locadora/fornecedores"
                    color="inherit">
                    Fornecedores
                </Button>
                <Button
                    onClick={() => loginService.logout()}
                    href="/locadora/veiculos"
                    color="inherit">
                    Veículos
                </Button>
                <Button
                    onClick={() => loginService.logout()}
                    href="/locadora/relatorio/despesas"
                    color="inherit">
                    Relatório de despesas
                </Button>
                <Button
                    onClick={() => loginService.logout()}
                    href="/locadora/relatorio/receitas"
                    color="inherit">
                    Relatório de receitas
                </Button>
                <Button
                    onClick={() => loginService.logout()}
                    href="/locadora/login"
                    color="inherit">
                    Logout
                </Button>
            </>
        );
    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
                        <HomeIcon onClick={HomeRoutes} />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Locação de Carros
                    </Typography>

                    { loginService.isLogged() ? loggedActios() : "" }

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default AppBarSys