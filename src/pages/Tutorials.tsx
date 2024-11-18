import { useRef } from "react";
import Section from "../components/share/Section";

const Tutorials = () => {
const tutorialsRef = useRef(0)
tutorialsRef.current ++
console.log("Tutorials",tutorialsRef.current)
  return (
    <Section>
      <h1 className="">tutorials Component</h1>
    </Section>
  );
};

export default Tutorials;