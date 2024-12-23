import { useRef } from "react";
import AboutBanner from "../components/about/AboutBanner";

const About = () => {
  const aboutRef = useRef(0)
  aboutRef.current++
  console.log("About", aboutRef.current)
  return (
    <div className="max-w-[100vw] min-h-[100vh] pt-[60px] xs:pt-[70px] flex flex-col w-full bg-presentation dark:bg-presentation-moon ">
      <div className="w-full flex flex-col gap-4 mb-8 px-[5px] xs:px-[5vw] md:px-[8vw] lg:px-[10vw] overflow-hidden">
          <AboutBanner/>
      </div>
    </div >
  );
};

export default About;