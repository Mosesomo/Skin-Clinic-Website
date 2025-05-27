import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Suspense } from 'react';
import { routes } from "@/constants/routes.js";
import Loader from "@/components/common/Loader.jsx";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            index={route.index}
                            path={route.path}
                            element={
                                <Suspense fallback={<Loader />}>
                                    <route.component />
                                </Suspense>
                            }
                        />
                    ))}
                </Route>
            </Routes>
        </Router>
    );
}