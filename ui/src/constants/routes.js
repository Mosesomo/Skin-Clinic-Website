import { lazy } from "react";

const Home = lazy(() => import('@/pages/Home.jsx'));
const Services = lazy(() => import('@/pages/Services.jsx'));
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail.jsx'));
const ShopPage = lazy(() => import('@/pages/Shop.jsx'));
const ProductDetail = lazy(() => import('@/pages/ProductDetail.jsx'));
const Booking = lazy(() => import('@/pages/Booking.jsx'));
const Contact = lazy(() => import('@/pages/Contact.jsx'));
const About = lazy(() => import('@/pages/About.jsx'));
const Dashboard = lazy(() => import('@/pages/Dashboard.jsx'));
const UserDashboard = lazy(() => import('@/pages/UserDashboard.jsx'));

export const routes = [
    { name: "home", path: "/", component: Home, index: true },
    { name: "Services", path: "/services", component: Services, index: false },
    { name: "Service Detail", path: "/services/:slug", component: ServiceDetail, index: false },
    { name: "Shop", path: "/shop", component: ShopPage },
    { name: "Product Detail", path: "/shop/:slug", component: ProductDetail },
    { name: "Booking", path: "/booking", component: Booking },
    { name: "Contact", path: "/contact", component: Contact },
    { name: "About", path: "/about", component: About },
    { name: "Dashboard", path: "/dashboard", component: Dashboard, adminOnly: true },
    { name: "Account", path: "/account", component: UserDashboard},
];