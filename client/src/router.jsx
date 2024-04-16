import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Users from './pages/Users';
import Layout from './layouts/Layout';

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '*',
                element: <h2 style={{ textAlign: 'center', color: 'red' }}>404 Not Found</h2>,
            }
        ]
    },


])
