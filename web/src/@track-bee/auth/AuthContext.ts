import React from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
}

const AuthContext = React.createContext<AuthContextType>(null!);

function useAuth(): AuthContextType {
    return React.useContext(AuthContext);
}

export { AuthContext, useAuth };
