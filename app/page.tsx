import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/Process";
import SocialProof from "@/components/SocialProof";
import CTASection from "@/components/CtaSection";
import FooterSection from "@/components/footer";
import WithWithout from "@/components/WithWithout";

export default function Home() {
    return (
        <>
            <HeroSection/>
            <ServicesSection/>
            <PortfolioSection/>
            <WithWithout/>
            <AboutSection/>
            <ProcessSection/>
            <SocialProof/>
            <CTASection/>
            <FooterSection/>
        </>
    );
}
