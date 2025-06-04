import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from "@/components/layout/Footer"
import ScrollToTop from '@/components/layout/ScrollToTop'
import ScrollToTopButton from '@/components/common/ScrollToTopButton'
// import SocialBar from "@/components/layout/SocialBar.jsx";

/* This is the main layout of all pages */
const Layout = () => {
    const location = useLocation();
    const isDashboard = location.pathname === '/dashboard';

    return (
        <div className="min-h-screen flex flex-col">
            <ScrollToTop/> {/* Instant scroll to top on route/page change */}
            {/* <SocialBar/> */}
            <Navbar/>
            <main className={`flex-grow ${isDashboard ? 'mt-16' : ''}`}>
                <Outlet/>
            </main>
            {!isDashboard && <Footer/>}
            <ScrollToTopButton/> {/* Scroll to top */}
        </div>
    )
} 

export default Layout;