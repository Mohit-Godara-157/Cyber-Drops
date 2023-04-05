import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import OurMission from "./components/OurMission";
import Partners from "./components/Partners";
import OurAlgo from "./components/OurAlgo";
import WhatWedo from "./components/WhatWedo";
import HowItworks from "./components/HowItworks";
import MeetTheTeam from "./components/MeetTheTeam";
import RoadMap from "./components/RoadMap";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="d-flex flex-column h_xxl_100 h_100vh">
        <NavBar />
        <HeroSection />
      </div>
      <OurMission />
      <Partners />
      <OurAlgo />
      <WhatWedo />
      <HowItworks />
      <MeetTheTeam />
      <RoadMap />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
