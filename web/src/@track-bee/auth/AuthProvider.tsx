import React from 'react';
import { AuthContext } from './AuthContext';

export default function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    // TODO: this should be moved to redux and must be checked using data from db.
    const setAuthenticated = (state: boolean) => {
        setIsAuthenticated(state);
    };

    //TODO: add auth checks
    return <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>{children}</AuthContext.Provider>;
}
