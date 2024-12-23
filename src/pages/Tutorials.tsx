import { useRef } from "react";
import MainContainer from "../components/share/Section";
import SectionTitle from "../components/share/SectionTitle";
import { mockCat } from "../mocks/mockCategories";
import CatCArd from "../components/tutorial/CatCArd";


const Tutorials = () => {
  const tutorialsRef = useRef(0)
  tutorialsRef.current++
  console.log("Tutorials", tutorialsRef.current)
  return (
    <MainContainer>
      <SectionTitle text="Tutorials" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-8">
        {
          mockCat.map((item) =>
            <CatCArd key={item.id} item={item} />
          )
        }
      </div>
    </MainContainer>
  );
};

export default Tutorials;