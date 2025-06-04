import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Suspense } from 'react';
import { routes } from "@/constants/routes.js";
import Loader from "@/components/common/Loader.jsx";

// Temporary auth check - replace with actual auth logic
const isAdmin = () => {
    return true; // Replace with actual admin check
};

const ProtectedRoute = ({ children }) => {
    if (!isAdmin()) {
        return <Navigate to="/" replace />;
    }
    return children;
};

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
                                    {route.adminOnly ? (
                                        <ProtectedRoute>
                                            <route.component />
                                        </ProtectedRoute>
                                    ) : (
                                        <route.component />
                                    )}
                                </Suspense>
                            }
                        />
                    ))}
                </Route>
            </Routes>
        </Router>
    );
}