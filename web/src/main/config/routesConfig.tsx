import type { RouteBase, RouteConfigBase } from '@track-bee/navigation/Router/Router';
import { Navigate } from 'react-router-dom';
import LoginConfig from '../app/pages/login/LoginConfig';
import HomeDashboardConfig from '../app/dashboards/home/HomeDashboardConfig';
import ErrorsConfig from '../app/pages/errors/ErrorsConfig';
import RegisterConfig from 'main/app/pages/register/RegisterConfig';
import ForgotPasswordConfig from 'main/app/pages/forgot-password/ForgotPasswordConfig';
import IssuesExplorerConfig from 'main/app/issues/IssuesExplorerConfig';

const routesConfig = [
    ...ErrorsConfig,
    HomeDashboardConfig,
    LoginConfig,
    RegisterConfig,
    ForgotPasswordConfig,
    IssuesExplorerConfig,
];

export const defaultUserHome = '/home';

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
        element: <Navigate to={defaultUserHome} />,
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
