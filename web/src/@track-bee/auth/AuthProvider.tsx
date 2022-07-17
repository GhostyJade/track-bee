import React from 'react';
import { AuthContext } from './AuthContext';

export default function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    //TODO: add auth checks

    return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>;
}
