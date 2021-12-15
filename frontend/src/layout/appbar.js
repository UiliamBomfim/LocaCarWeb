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

    const loggedActions = () => {
        var isEmployee = LoginService.userIsEmployee();
        var user = LoginService.getUser();

        return (
            <>
                {
                    isEmployee ? (
                        <Button
                            href="/locadora/compras/list"
                            color="inherit">
                            Compras
                        </Button>
                    ) : undefined
                }
                {
                    isEmployee ? (
                        <Button
                            href="/locadora/clientes/list"
                            color="inherit">
                            Clientes
                        </Button>
                    ) : (
                        user ? (
                            <Button
                                href={"/locadora/clientes/edit/" + user.id}
                                color="inherit">
                                Editar cadastro
                            </Button>
                        ) : undefined
                    )
                }
                {
                    isEmployee ? (
                        <Button
                            href="/locadora/funcionarios/list"
                            color="inherit">
                            Funcionários
                        </Button>
                    ) : undefined
                }
                <Button
                    href="/locadora/locacao/list"
                    color="inherit">
                    Locações
                </Button>
                {
                    isEmployee ? (
                        <Button
                            href="/locadora/fornecedores/list"
                            color="inherit">
                            Fornecedores
                        </Button>
                    ) : undefined
                }
                <Button
                    href="/locadora/veiculos/list"
                    color="inherit">
                    Veículos
                </Button>
                {
                    isEmployee ? (
                        <Button
                            href="/locadora/relatorio/despesas"
                            color="inherit">
                            Relatório de despesas
                        </Button>
                    ) : undefined
                }
                {
                    isEmployee ? (
                        <Button
                            href="/locadora/relatorio/receitas"
                            color="inherit">
                            Relatório de receitas
                        </Button>
                    ) : undefined
                }
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

                    { loginService.isLogged() ? loggedActions() : "" }

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default AppBarSys