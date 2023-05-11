import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';

import Router from '@track-bee/navigation/Router/Router';
import AuthProvider from '@track-bee/auth/AuthProvider';
import theme from 'main/config/themeConfig';

import routes from './main/config/routesConfig';
import { store } from './main/store';
import { Provider } from 'react-redux';

axios.defaults.baseURL = 'http://localhost:8192';

const defaultTheme = createTheme({}, theme.defaultTheme);

function App() {
    return (
        <Provider store={store}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={defaultTheme}>
                    <AuthProvider>
                        <Router routes={routes} />
                    </AuthProvider>
                </ThemeProvider>
            </StyledEngineProvider>
        </Provider>
    );
}

export default App;
