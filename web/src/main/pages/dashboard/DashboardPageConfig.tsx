import DashboardPage from './DashboardPage';

export default {
    authLevel: 'user',
    routes: [
        {
            path: '/',
            element: <DashboardPage />,
        },
    ],
};
