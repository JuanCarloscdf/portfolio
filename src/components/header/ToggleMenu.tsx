import { useState } from "react";
import IconCloseMenu from "../../icons/IconCloseMenu";
import IconMenu from "../../icons/IconMenu";
import { useMenuContenxt } from "../../hooks/useMenuContenxt";

const ToggleMenu = () => {
    const [activeMenu, setActiveMenu] = useState(false);
    const { closeMenu, openMenu } = useMenuContenxt()
    function toggle() {
        const newValue = !activeMenu
        if (newValue) {
            openMenu()
        } else {
            closeMenu()
        }
        setActiveMenu(newValue)
    }
    return (<>
        <button className="h-full xs:hidden" onClick={toggle}>
            {
                activeMenu ?
                    <IconCloseMenu className={`${activeMenu ? "animate-fadeIn" : ""}`} height={"100%"} /> :
                    <IconMenu className={`${!activeMenu ? "animate-fadeIn" : ""}`} height={"100%"} />
            }
        </button>
    </>)

};

export default ToggleMenu;