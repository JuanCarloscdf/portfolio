import { forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import Links from "../components/header/Links";


export type MenuMethods = {
    openMenu: () => void
    closeMenu: () => void,
}

const NavbarMenu = forwardRef<MenuMethods>((_, ref) => {
    const [isActive, setIsActive] = useState(false);
    /* const navbarmenuRef = useRef(0)
    navbarmenuRef.current++
    console.log("NavbarMenu", navbarmenuRef.current) */

    useImperativeHandle(ref, () => ({
        openMenu: () => setIsActive(true),
        closeMenu: () => setIsActive(false),
    }))
    return (
        createPortal(
            <div
                className={`${isActive ? "fixed animate-fadeIn" : "hidden"} top-[50px] xs:hidden left-0 w-full z-10 bg-medium/60 dark:bg-medium-dark/60 text-black dark:text-white `}
                style={{ backdropFilter: "blur(5px)" }}

            >
                <div className="w-full flex flex-col">
                    <div className="h-20 flex flex-col items-center justify-center">
                        <Links isNav />
                    </div>
                </div>
            </div>,
            document.getElementById("portals") as HTMLElement
        )
    );
});

export default NavbarMenu;