import { createTheme, ThemeProvider } from '@mui/material';

import Router from '@track-bee/navigation/Router/Router';
import AuthProvider from '@track-bee/auth/AuthProvider';
import theme from 'main/config/themeConfig';

import routes from './main/config/routesConfig';

const defaultTheme = createTheme({}, theme.defaultTheme);

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <AuthProvider>
                <Router routes={routes} />
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
