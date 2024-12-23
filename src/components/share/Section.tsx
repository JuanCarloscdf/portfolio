import { ReactNode } from "react";

const MainContainer = ({ children }: { children: ReactNode }) => {
    return (
        <section className="max-w-[100vw] min-h-[100vh] pt-[60px] xs:pt-[70px] flex flex-col w-full bg-presentation dark:bg-presentation-moon">
            <div className="w-full flex flex-col gap-4 mb-8 px-[5px] xs:px-[5vw] md:px-[8vw] lg:px-[10vw] ">
                {children}
            </div>
        </section>
    );
};

export default MainContainer;