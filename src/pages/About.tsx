import { useRef } from "react";
import Section from "../components/share/Section";

const About = () => {
  const aboutRef = useRef(0)
  aboutRef.current++
  console.log("About", aboutRef.current)
  return (
    <Section>
      <div className="flex flex-col relative mt-[50px] px-2  sm:px-[10vw] md:px-[15vw]">
        {/* text */}
        <div className=" pt-[70vw] xs:pt-[20vh] mr-auto flex flex-col px-4 gap-2 max-w-[450px] md:max-w-[550] pb-8" >
          <h1 className=" text-xl xs:text-xxl font-bold ">Hello!, my name is <span className="text-rose dark:text-gold">Juan Carlos</span>  </h1>
          <p>
            Hi! I’m web developer passionate about creating intuitive digital experiences. My journey began in 2022 when I saw the potential of web technologies to support small businesses online.
          </p>
          <p>
            My standout project, <a href="https://www.yasminmodas.store" target="_blank" className=" text-rose dark:text-gold">yasminmodas.store</a>, is an e-commerce site for a fashion business in Brazil, where I honed my frontend. This experience solidified my commitment to accessibility and performance best practices.
          </p>
          <p>
            I focus on building accessible, optimized sites that are easy to navigate and user-friendly.
          </p>
          <h2>Here are some of the technologies I’ve been working with recently:</h2>
          <div className="w-full px-4">
              <ul className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] list-disc text-rose dark:text-gold">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Cloudflare Workers</li>
                <li>Cloudflare Pages</li>
                <li>Hono</li>
              </ul>
          </div>

        </div>
        {/* image */}
        <div className="absolute top-0 right-0 bottom-0  sm:right-[10vw]  lg:right-[18vw] z-1  w-full  max-w-[320px] px-2" >
          <div className="w-[100%] h-full bg-white/10 rounded-xl">
          </div>
        </div>
      </div>
    </Section >
  );
};

export default About;