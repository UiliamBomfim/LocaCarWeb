import { Navigate, useRoutes } from 'react-router-dom';
import RentalList from './components/UserLists';
import Layout from './layout/layout';
import LocacaoPage from './page/locacaoPage';
import LoginPage from './page/loginPage';
import AlugadoCarroPage from './page/alugadoCarroPage'

const Routers = () => {
    return useRoutes([
        {
            path: '/locadora',
            element: <Layout />,
            children: [{
                element: <Navigate to='/locadora/home' replace />
            },
            {
                path: 'home',
                element: <RentalList />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'locacao',
                element: <LocacaoPage />
            },
            {
                path: 'locacaofinal',
                element: <AlugadoCarroPage />
            }
            ]
        },
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '/locadora/home',
                    element: <RentalList />
                }
            ]
        }
    ])
}

export default Routers;