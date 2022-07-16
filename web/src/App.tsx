import React from "react";
import { Route } from "react-router-dom";

import Router from "@track-bee/Router/Router";
import routes from "./main/Routes";

function App() {
    return (
        <Router>
            {routes.map((route, key) => (
                <Route path={route.path} element={route.element} key={key} />
            ))}
        </Router>
    );
}

export default App;
