import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

export default function Router({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>{children}</Routes>
        </BrowserRouter>
    );
}
