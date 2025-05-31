import { lazy } from "react";

const Home = lazy(() => import('@/pages/Home.jsx'));
const Services = lazy(() => import('@/pages/Services.jsx'));
const ShopPage = lazy(() => import('@/pages/Shop.jsx'));
const Booking = lazy(() => import('@/pages/Booking.jsx'));
const Contact = lazy(() => import('@/pages/Contact.jsx'));
const About = lazy(() => import('@/pages/About.jsx'));

export const routes = [
    { name: "home", path: "/", component: Home, index: true },
    { name: "Services", path: "/services", component: Services, index: false },
    { name: "Shop" ,path: "/shop", component: ShopPage },
    { name: "Booking" ,path: "/booking", component: Booking },
    { name: "Contact" ,path: "/contact", component: Contact },
    { name: "About" ,path: "/about", component: About },
];