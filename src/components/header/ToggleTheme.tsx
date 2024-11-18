import { useEffect, useState } from "react";
import IconSun from "../../icons/IconSun";
import IconMoon from "../../icons/IconMoon";

function setDarkClass(isDark: boolean) {
    if (isDark) {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
}

const ToggleTheme = () => {
    const [theme, setTheme] = useState<boolean>(window.matchMedia("(prefers-color-scheme: dark)").matches);
    useEffect(() => {
        setDarkClass(theme)
    }, [theme])
    return (
        <button className={`bg-transparent p-0 m-0 hover:bg-transparent active:border-none h-full`} onClick={() => setTheme((prev) => !prev)}>
            {
                theme ?
                    <IconSun className={`${theme ? "animate-fadeIn" : ""}`} height={"100%"} /> :
                    <IconMoon className={`${!theme ? "animate-fadeIn" : ""}`} height={"100%"} />
            }
        </button>
    );
};

export default ToggleTheme;