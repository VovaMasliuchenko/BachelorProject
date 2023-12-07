import HeroSection from "../components/welcomePage/HeroSection";
import Footer from "../components/general/Footer";
import OurServicesSection from "../components/welcomePage/OurServicesSection";
import OurWorksSection from "../components/welcomePage/OurWorksSection";
import WhoWeAreSection from "../components/welcomePage/WhoWeAreSection";

function WelcomePage() {
    return (
      <>
         <HeroSection />
         <OurServicesSection />
         <OurWorksSection />
         <WhoWeAreSection />
         <Footer />
      </>
    );
  }
  export default WelcomePage;
  