import HeroSection from '@/components/HeroSection';
import FeedBack from '@/components/FeedBack';
import AboutHighlights from '@/components/AboutHighlights';
import ServicesHighlights from '@/components/ServicesHighlights';
import DoctorSection from '@/components/DoctorSection';
import SkinConditionSection from '@/components/SkinConditionSection';
import TreatmentApproachSection from '@/components/TreatmentApproachSection';
import SkinCareTipsSection from '@/components/SkinCareTipsSection';
import ContactSection from '@/components/ContactSection';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <AboutHighlights />
            <ServicesHighlights />
            <SkinConditionSection />
            <TreatmentApproachSection />
            <SkinCareTipsSection />
            <DoctorSection />
            <FeedBack />
            <ContactSection />
        </div>
    )
}

export default Home;