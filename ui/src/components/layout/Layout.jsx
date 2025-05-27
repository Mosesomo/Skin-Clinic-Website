import { Outlet } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from "@/components/layout/Footer"
import ScrollToTop from '@/components/layout/ScrollToTop'
import ScrollToTopButton from '@/components/common/ScrollToTopButton'
// import SocialBar from "@/components/layout/SocialBar.jsx";

/* This is the main layout of all pages */
const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <ScrollToTop/> {/* Instant scroll to top on route/page change */}
            {/* <SocialBar/> */}
            <Navbar/>
            <main className="flex-grow">
                <Outlet/>
            </main>
            <Footer/>
            <ScrollToTopButton/> {/* Scroll to top */}
        </div>
    )
} 

export default Layout;