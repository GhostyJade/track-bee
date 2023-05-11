import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';

import PrivateRoute from '@track-bee/navigation/Auth/PrivateRoute';
import history from '@history';

export interface RouteBase {
    path: string;
    element: React.ReactNode;
    authLevel?: string | undefined | null;
}

export interface RouteConfigBase {
    routes: RouteBase[];
    authLevel?: string | undefined | null;
}

export default function BrowserRouter({ routes }: { routes: RouteBase[] }): JSX.Element {
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location,
    });

    React.useLayoutEffect(() => history.listen(setState), []);

    return (
        <Router navigator={history} location={state.location} navigationType={state.action}>
            <Routes>
                {routes.map((route, key) => {
                    return (
                        <Route
                            key={key}
                            path={route.path}
                            element={route.authLevel ? <PrivateRoute>{route.element}</PrivateRoute> : route.element}
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}
