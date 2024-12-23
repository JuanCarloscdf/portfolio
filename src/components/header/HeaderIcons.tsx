import IconGithub from "../../icons/IconGithub";
import IconLinkedin from "../../icons/IconLinkedin";
import IconMail from "../../icons/IconMail";
import IconPhone from "../../icons/IconPhone";
import ToggleMenu from "./ToggleMenu";
import ToggleTheme from "./ToggleTheme";

const HeaderIcons = () => {

  return (
    <div className="flex gap-2 items-center justify-center h-full" >
      <a href="https://www.linkedin.com/in/juancarloscdf" target="_blank" className="h-full">
        <IconLinkedin height={"100%"} className="cursor-pointer hover:animate-bell" onClick={() => console.log("asdas")} />
      </a>
      <a href="https://api.whatsapp.com/send?phone=59173080372" target="_blank" className="h-full">
        <IconPhone height={"100%"} className="cursor-pointer hover:animate-bell" onClick={() => console.log("asdas")} />
      </a>
      <a href="https://github.com/JuanCarloscdf" target="_blank" className="h-full">
        <IconGithub height={"100%"} className="cursor-pointer hover:animate-bell" onClick={() => console.log("asdas")} />
      </a>
      <a href="mailto:jcmrdev@gmail.com" target="_blank" className="h-full">
        <IconMail height={"100%"} className="cursor-pointer hover:animate-bell" onClick={() => console.log("asdas")} />
      </a>
      <ToggleTheme />
      <ToggleMenu />
    </div>
  );
};

export default HeaderIcons;