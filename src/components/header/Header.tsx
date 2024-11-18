import { useRef } from "react";
import Logo from "../../icons/Logo";
import HeaderIcons from "./HeaderIcons";
import { useNavigate } from "react-router-dom";
import { useScrollY } from "../../hooks/useScrollY";
import Links from "./Links";

const Header = () => {
  const navigate = useNavigate()
  const { isActive } = useScrollY()

  //console.log(isActive,'header');

  const headerRef = useRef(0)
  headerRef.current++
  //console.log(headerRef.current);



  return (
    <header className={`overflow-hidden px-2 md:px-12 fixed flex justify-between top-0 left-0 w-full  z-10 ${isActive ? "h-0" : "h-[50px] xs:h-[65px]"}  bg-strong/50 dark:bg-transparent transition-all duration-400`} style={{ backdropFilter: "blur(5px)", boxShadow: "0 0 2px rgba(125,125,125,0.7)" }}>
      <Logo height="60%" className="my-auto cursor-pointer" onClick={() => navigate('/')} />
      <Links />
      <div className="flex gap-1 py-4 xs:py-6">
        <HeaderIcons />
      </div>
    </header>
  );
};

export default Header;