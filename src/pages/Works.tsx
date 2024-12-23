import { useRef } from "react";
import MainContainer from "../components/share/Section";
import { mockWorks } from "../mocks/mockWorks";
import WorkCard from "../components/works/WorkCard";
import { mockProjects } from "../mocks/mockProjects";
import ProjectCard from "../components/works/ProjectCard";
import SectionTitle from "../components/share/SectionTitle";


const Works = () => {
  const worksRef = useRef(0)
  worksRef.current++
  console.log("Works", worksRef.current)
  return (
    <MainContainer>
      <section className="w-full">
        <SectionTitle text="Works" />
        <ul className="mt-4 w-full overflow-hidden grid grid-cols-[repeat(auto-fill,minmax(290px,340px))] md:grid-cols-[repeat(auto-fill,minmax(380px,340px))] gap-4">
          {
            mockWorks.map((item) =>
              <WorkCard work={item} key={item.id} />
            )
          }
        </ul>
      </section>
      <section>
        <SectionTitle text="My projects" />

        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          {mockProjects.map((item) =>
            <ProjectCard key={item.id} item={item} />
          )}
        </div>
      </section>
    </MainContainer >
  );
};

export default Works;