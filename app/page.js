'use client'
import Navbar from "./_components/nav/Navbar.component";
import Navlist from "./_components/nav/Navlist.component";
import Navbrand from "./_components/nav/Navbrand.component";
import LandingSection from "./_components/sections/Landing.section.component";
import FeaturedSection from "./_components/sections/Featured.section.component";
import AboutSection from "./_components/sections/About.section.component";
import ExperienceSection from "./_components/sections/Experience.section.component";
import ContactMeSection from "./_components/sections/Contact.section.component";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link, Button, Element, Events, animateScroll as scroll, scroller, scrollSpy } from 'react-scroll';
import { useEffect, useState } from "react";

export default function Home() {

  const [elem, setElem] = useState(null)

  useEffect(() => {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', to, element)
    })

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', to, element)
    })

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end')
    }
  }, [])

  useEffect(() => {
    if (elem !== null) {
      switch (elem) {
        case "story":
          scroller.scrollTo("story", {
            duration: 1500,
            delay: 100,
            smooth: true,
          })
          break;
        case "feat":
          scroller.scrollTo("feat", {
            duration: 1500,
            delay: 100,
            smooth: true,
          })
          break;
        case "exp":
          scroller.scrollTo("exp", {
            duration: 1500,
            delay: 100,
            smooth: true,
          })
          break;
        case "contact":
          scroller.scrollTo("contact", {
            duration: 1500,
            delay: 100,
            smooth: true,
          })
          break;
        default:
          break;
      }
      setElem(null)
    }
    else {
      return;
    }
  }, [elem])

  return (
    <>
      <ToastContainer />
      <Navbar>
        <Navbrand brandText="JayDev&Design" />
        <Navlist setElem={setElem} />
      </Navbar>
      <LandingSection setElem={setElem} />
      <div className="w-full flex flex-col items-center justify-center">
        <Element name="feat">
          <FeaturedSection />
        </Element>
        <Element name="exp">
          <ExperienceSection />
        </Element>
        <Element name="story">
          <AboutSection />
        </Element>
        <Element name="contact">
          <ContactMeSection toast={toast} />
        </Element>
      </div>
    </>
  )
}
