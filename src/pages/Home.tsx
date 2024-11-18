import { useRef } from "react";
import HomePresentation from "../components/home/HomeTitle";
import Section from "../components/share/Section";


const Home = () => {
const homeRef = useRef(0)
homeRef.current ++
console.log("Home",homeRef.current)
  return (
    <Section>
      <HomePresentation/>
    </Section>

  );
};

export default Home;