import { Navigate, useRoutes } from 'react-router-dom';
import Layout from './layout/layout';

import LoginPage from './page/loginPage';

import LocationListPage from './page/locacao/LocationListPage';
import LocationApprovePage from './page/locacao/LocationApprovePage';
import LocationShowPage from './page/locacao/LocationShowPage';
import LocationDevolvePage from './page/locacao/LocationDevolvePage';
import LocationEndPage from './page/locacao/LocationEndPage';
import LocationCreatePage from './page/locacao/LocationCreatePage';

import ClientListPage from './page/cliente/ClientListPage';
import ClientApprovePage from './page/cliente/ClientApprovePage';
import ClientEditPage from './page/cliente/ClientEditPage';
import ClientShowPage from './page/cliente/ClientShowPage';
import ClientCreatePage from './page/cliente/ClientCreatePage';

import VehicleListPage from './page/veiculo/VehicleListPage';
import VehicleShowPage from './page/veiculo/VehicleShowPage';
import VehicleCreatePage from './page/veiculo/VehicleCreatePage';
import VehicleEditPage from './page/veiculo/VehicleEditPage';

import EmployeeListPage from './page/funcionario/EmployeeListPage';
import EmployeeCreatePage from './page/funcionario/EmployeeCreatePage';
import EmployeeShowPage from './page/funcionario/EmployeeShowPage';

import AcquisitionListPage from './page/compra/AcquisitionListPage';
import AcquisitionCreatePage from './page/compra/AcquisitionCreatePage';
import AcquisitionShowPage from './page/compra/AcquisitionShowPage';
import AcquisitionEditPage from './page/compra/AcquisitionEditPage';

import ProviderListPage from './page/provider/ProviderListPage';
import ProviderCreatePage from './page/provider/ProviderCreatePage';
import ProviderEditPage from './page/provider/ProviderEditPage';
import ProviderShowPage from './page/provider/ProviderShowPage';

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
                        {
                            path: 'create/',
                            element: <LocationCreatePage />
                        },
                    ]
                },
                {
                    path: 'veiculos/',
                    children: [
                        {
                            path: 'list',
                            element: <VehicleListPage />
                        },
                        {
                            path: 'show/:id',
                            element: <VehicleShowPage />
                        },
                        {
                            path: 'create/',
                            element: <VehicleCreatePage />
                        },
                        {
                            path: 'edit/:id',
                            element: <VehicleEditPage />
                        }
                    ]
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
                        },
                        {
                            path: 'create/',
                            element: <ClientCreatePage />
                        }
                    ]
                },
                {
                    path: 'funcionarios/',
                    children: [
                        {
                            path: 'list',
                            element: <EmployeeListPage />
                        },
                        {
                            path: 'show/:id',
                            element: <EmployeeShowPage />
                        },
                        {
                            path: 'create/',
                            element: <EmployeeCreatePage />
                        },
                        //TODO: FALTA O DE EDIT
                    ]
                },
                {
                    path: 'fornecedores/',
                    children: [
                        {
                            path: 'list',
                            element: <ProviderListPage />
                        },
                        {
                            path: 'show/:id',
                            element: <ProviderShowPage />
                        },
                        {
                            path: 'create/',
                            element: <ProviderCreatePage />
                        },
                        {
                            path: 'edit/:id',
                            element: <ProviderEditPage />
                        },
                    ]
                },
                {
                    path: 'compras/',
                    children: [
                        {
                            path: 'list',
                            element: <AcquisitionListPage />
                        },
                        {
                            path: 'create/',
                            element: <AcquisitionCreatePage />
                        },
                        {
                            path: 'show/:id',
                            element: <AcquisitionShowPage />
                        },
                        {
                            path: 'edit/:id',
                            element: <AcquisitionEditPage />
                        },
                    ]
                },
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