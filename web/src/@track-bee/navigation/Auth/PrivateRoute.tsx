import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@track-bee/auth/AuthContext';

export default function PrivateRoute({ children }: { children: React.ReactNode }): JSX.Element {
    const location = useLocation();
    const auth = useAuth();

    const isAuthorized = auth.isAuthenticated;

    if (!isAuthorized) {
        return <Navigate to='/login' state={{ state: { from: location } }} replace />;
    }
    return <>{children}</>;
}
