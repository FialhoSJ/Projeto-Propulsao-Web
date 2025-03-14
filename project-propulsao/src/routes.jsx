import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/header';
import Loading from './pages/Loading/loading';

// Importação das páginas de forma assíncrona (lazy loading)
const Home = lazy(() => import('./pages/Home/home'));
const Sobre = lazy(() => import('./pages/Sobre/sobre'));
const Participacao = lazy(() => import('./pages/Participação/participacao'));
const Propulsao = lazy(() => import('./pages/Propulsão/propulsao'));
const Artigos = lazy(() => import('./pages/Artigos/artigos'));

function AppWrapper() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rota da Home sem o Header */}
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Home />
                        </Suspense>
                    }
                />

                {/* Rotas com o Header */}
                <Route
                    path="/sobre"
                    element={
                        <>
                            <Header />
                            <Suspense fallback={<Loading />}>
                                <Sobre />
                            </Suspense>
                        </>
                    }
                />
                <Route
                    path="/artigos"
                    element={
                        <>
                            <Header />
                            <Suspense fallback={<Loading />}>
                                <Artigos />
                            </Suspense>
                        </>
                    }
                />
                <Route
                    path="/participacao"
                    element={
                        <>
                            <Header />
                            <Suspense fallback={<Loading />}>
                                <Participacao />
                            </Suspense>
                        </>
                    }
                />
                <Route
                    path="/propulsao"
                    element={
                        <>
                            <Header />
                            <Suspense fallback={<Loading />}>
                                <Propulsao />
                            </Suspense>
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppWrapper;