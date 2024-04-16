import Image from "next/image";
import Navbar from "./components/nav/Navbar.component";
import Navlist from "./components/nav/Navlist.component";
import Navbrand from "./components/nav/Navbrand.component";
import LandingSection from "./components/sections/Landing.section.component";
import FeaturedSection from "./components/sections/Featured.section.component";
import AboutSection from "./components/sections/About.section.component";
import ExperienceSection from "./components/sections/Experience.section.component";
import ContactMeSection from "./components/sections/Contact.section.component";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  return (
    <>
      <ToastContainer />
      <Navbar>
        <Navbrand brandText="JayDev&Design" />
        <Navlist />
      </Navbar>
      <LandingSection />
      <div className="w-full flex flex-col items-center justify-center">
        <FeaturedSection />
        <ExperienceSection />
        <AboutSection />
        <ContactMeSection toast={toast} />
      </div>
    </>
  )
}
