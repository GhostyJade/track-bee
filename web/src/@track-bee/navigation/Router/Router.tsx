import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PrivateRoute from '@track-bee/navigation/Auth/PrivateRoute';

// import { useAuth } from "@track-bee/auth/AuthContext";

export interface RouteBase {
    path: string;
    element: React.ReactNode;
    authLevel?: string | undefined | null;
}

export interface RouteConfigBase {
    routes: RouteBase[];
    authLevel?: string | undefined | null;
}

export default function Router({ routes }: { routes: RouteBase[] }): JSX.Element {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}
