import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"))
const Works = lazy(() => import("../pages/Works"))
const Tutorials = lazy(() => import("../pages/Tutorials"))
const About = lazy(() => import("../pages/About"))
const Article = lazy(() => import("../pages/CodeArticle"))
const PageProvider = () => {
    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} />
                <Route path="/tutorials" element={<Tutorials />} />
                <Route path="/article/:id" element={<Article />} />
            </Routes>
        </Suspense>

    );
};

export default PageProvider;