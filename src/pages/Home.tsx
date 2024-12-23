import MainContainer from "../components/share/Section";
import SectionTitle from "../components/share/SectionTitle";
import { lazy, Suspense } from "react";
import SkeewedTitle from "../components/tools/SkeewedTitle";
const MagicWords = lazy(() => import("../components/canvas/MagicWords"))

const Home = () => {

  return (
    <MainContainer>
      <SectionTitle text="Tools" />
      <SkeewedTitle />
      <section className="w-full">
        <h1 className="text-base font-light mb-3 text-rose dark:text-gold">Push and drag to reveal the message</h1>
        <Suspense>
          <MagicWords canvasHeight={500} />
        </Suspense>
      </section>
    </MainContainer>
  );
};

export default Home;