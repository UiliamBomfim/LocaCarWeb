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
                    href="/locadora/compras"
                    color="inherit">
                    Compras
                </Button>
                <Button
                    href="/locadora/clientes/list"
                    color="inherit">
                    Clientes
                </Button>
                <Button
                    href="/locadora/locacoes"
                    color="inherit">
                    Funcionários
                </Button>
                <Button
                    href="/locadora/locacao/list"
                    color="inherit">
                    Locações
                </Button>
                <Button
                    href="/locadora/fornecedores"
                    color="inherit">
                    Fornecedores
                </Button>
                <Button
                    href="/locadora/veiculos"
                    color="inherit">
                    Veículos
                </Button>
                <Button
                    href="/locadora/relatorio/despesas"
                    color="inherit">
                    Relatório de despesas
                </Button>
                <Button
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