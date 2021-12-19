import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import LoginService from '../services/LoginService';
import DropdownMenu from '../components/DropdownMenu';

 const AppBarSys = () => {
    const HomeRoutes = () => window.location.href = "/locadora/home"
    const loginService = LoginService()

    const loggedActions = () => {
        var isEmployee = LoginService.userIsEmployee();
        var user = LoginService.getUser();
        var userName = user ? user.nome.split(' ')[0] : undefined

        return (
            <>
                {
                    isEmployee ? (
                        <DropdownMenu menuTitle="Pessoas" menuItens={[
                            { url: "/locadora/clientes/list", title: "Clientes" },
                            { url: "/locadora/funcionarios/list", title: "Funcionários" },
                            { url: "/locadora/cargos/list", title: "Cargos" },
                        ]}/>
                    ) : undefined
                }
                {
                    isEmployee ? (
                        <DropdownMenu menuTitle="Financeiro" menuItens={[
                            { url: "/locadora/fornecedores/list", title: "Fornecedores" },
                            { url: "/locadora/compras/list", title: "Compras" },
                        ]}/>
                    ) : undefined
                }
                {
                    !isEmployee ? (
                        <DropdownMenu menuTitle="Cadastro" menuItens={[
                            { url: "/locadora/clientes/edit/" + user.id, title: "Editar cadastro" },
                            { url: "/locadora/clientes/delete/" + user.id, title: "Deletar cadastro" },
                        ]}/>
                    ) : undefined
                }
                <DropdownMenu menuTitle="Locação" menuItens={[
                    { url: "/locadora/veiculos/list", title: "Veículos" },
                    { url: "/locadora/locacao/list", title: "Locações" },
                ]}/>
                {
                    isEmployee ? (
                        <DropdownMenu menuTitle="Relatórios" menuItens={[
                            { url: "/locadora/relatorio/despesas/", title: "Relatório de despesas" },
                            { url: "/locadora/relatorio/receitas/", title: "Relatório de receitas" },
                        ]}/>
                    ) : undefined
                }
                {
                    userName ? (
                        <DropdownMenu menuTitle={"Olá, " + userName} menuItens={[
                            { url: "/locadora/login", title: "Logout", onClick: () => loginService.logout() },
                        ]}/>
                    ) : undefined
                }
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