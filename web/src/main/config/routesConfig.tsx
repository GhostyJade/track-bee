import type { RouteBase, RouteConfigBase } from '@track-bee/navigation/Router/Router';
import { Navigate } from 'react-router-dom';
import LoginConfig from '../pages/Login/LoginConfig';
import DashboardPageConfig from '../pages/dashboard/DashboardPageConfig';
import ErrorsConfig from '../pages/errors/ErrorsConfig';

const routesConfig = [DashboardPageConfig, ...ErrorsConfig, LoginConfig];

function generateNavigationGroup(config: RouteConfigBase): RouteBase[] {
    const routes = config.routes.map((route) => {
        let auth = config.authLevel || config.authLevel === null ? config.authLevel : 'admin' || null;
        auth = route.authLevel || route.authLevel === null ? route.authLevel : auth;

        return {
            ...route,
            authLevel: auth,
        };
    });
    return [...routes];
}

function generateNavigation() {
    const routes: RouteBase[] = [];
    routesConfig.forEach((config) => {
        routes.push(...generateNavigationGroup(config));
    });
    return routes;
}

export default [
    ...generateNavigation(),
    {
        path: '/',
        element: <Navigate to='/' />,
        auth: 'user',
    },
    // {
    //     path: "loading",
    //     element: <LoadingScreen />,
    // },
    {
        path: '*',
        element: <Navigate to='404' />,
    },
];
