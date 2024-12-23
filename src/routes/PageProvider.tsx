import { lazy, ReactNode, Suspense, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"))
const Works = lazy(() => import("../pages/Works"))
const Tutorials = lazy(() => import("../pages/Tutorials"))
const About = lazy(() => import("../pages/About"))
const Article = lazy(() => import("../pages/CodeArticle"))
const GistList = lazy(() => import("../pages/GistList"))

const Wrapper = ({ children }: { children: ReactNode }) => {
    const location = useLocation();

    useLayoutEffect(() => {
        // Scroll to the top of the page when the route changes
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [location.pathname]);

    return children;
};

const PageProvider = () => {
    return (
        <Suspense>
            <Wrapper>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/works" element={<Works />} />
                    <Route path="/tutorials" element={<Tutorials />} />
                    <Route path="/article/:id" element={<Article />} />
                    <Route path="/gistlist/:category" element={<GistList />} />
                </Routes>
            </Wrapper>
        </Suspense>
    );
};

export default PageProvider;