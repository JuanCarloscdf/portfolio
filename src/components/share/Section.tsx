import { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
    return (
        <section className="max-w-[100vw] min-h-[100vh] pt-[60px] xs:pt-[70px] flex flex-col w-full bg-presentation dark:bg-presentation-moon">
            {children}
        </section>
    );
};

export default Section;