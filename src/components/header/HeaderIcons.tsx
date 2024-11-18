import IconGithub from "../../icons/IconGithub";
import IconLinkedin from "../../icons/IconLinkedin";
import IconMail from "../../icons/IconMail";
import IconPhone from "../../icons/IconPhone";
import ToggleMenu from "./ToggleMenu";
import ToggleTheme from "./ToggleTheme";

const HeaderIcons = () => {

  return (
    <div className="flex gap-2 items-center justify-center h-full" >
      <IconLinkedin height={"100%"} className="cursor-pointer hover:animate-bell" onClick={() => console.log("asdas")} />
      <IconPhone height={"100%"} className="cursor-pointer hover:animate-bell" onClick={() => console.log("asdas")} />
      <IconGithub height={"100%"} className="cursor-pointer hover:animate-bell" onClick={() => console.log("asdas")} />
      <IconMail height={"100%"} className="cursor-pointer hover:animate-bell" onClick={() => console.log("asdas")} />
      <ToggleTheme />
      <ToggleMenu/>
    </div>
  );
};

export default HeaderIcons;