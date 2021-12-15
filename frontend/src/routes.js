import { Navigate, useRoutes } from 'react-router-dom';
import Layout from './layout/layout';

import LoginPage from './page/loginPage';

import LocationListPage from './page/locacao/LocationListPage';
import LocationApprovePage from './page/locacao/LocationApprovePage';
import LocationShowPage from './page/locacao/LocationShowPage';
import LocationDevolvePage from './page/locacao/LocationDevolvePage';
import LocationEndPage from './page/locacao/LocationEndPage';

import AlugadoCarroPage from './page/alugadoCarroPage'

import ClientListPage from './page/cliente/ClientListPage';
import ClientApprovePage from './page/cliente/ClientApprovePage';
import ClientEditPage from './page/cliente/ClientEditPage';
import ClientShowPage from './page/cliente/ClientShowPage';

import Home from './page/Home';

const Routers = () => {
    return useRoutes([
        {
            path: '/locadora',
            element: <Layout />,
            children: [
                {
                    element: <Navigate to='/locadora/home' replace />
                },
                {
                    path: 'login',
                    element: <LoginPage />
                },
                {
                    path: 'locacao/',
                    children: [
                        {
                            path: 'list',
                            element: <LocationListPage />
                        },
                        {
                            path: 'approve/:id',
                            element: <LocationApprovePage />
                        },
                        {
                            path: 'show/:id',
                            element: <LocationShowPage />
                        },
                        {
                            path: 'devolve/:id',
                            element: <LocationDevolvePage />
                        },
                        {
                            path: 'end/:id',
                            element: <LocationEndPage />
                        },
                    ]
                },
                {
                    path: 'locacaofinal',
                    element: <AlugadoCarroPage />
                },
                {
                    path: 'clientes/',
                    children: [
                        {
                            path: 'list',
                            element: <ClientListPage />
                        },
                        {
                            path: 'approve/:id',
                            element: <ClientApprovePage />
                        },
                        {
                            path: 'edit/:id',
                            element: <ClientEditPage />
                        },
                        {
                            path: 'show/:id',
                            element: <ClientShowPage />
                        }
                    ]
                }
            ]
        },
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/locadora/home',
                    element: <Home />
                }
            ]
        }
    ])
}

export default Routers;