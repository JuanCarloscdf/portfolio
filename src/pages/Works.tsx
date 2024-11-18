import { useRef } from "react";
import Section from "../components/share/Section";

const Works = () => {
const worksRef = useRef(0)
worksRef.current ++
console.log("Works",worksRef.current)
  return (
    <Section>
      <h1 className="">works Component</h1>
    </Section >
  );
};

export default Works;