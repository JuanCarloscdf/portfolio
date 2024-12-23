import { NavLink } from "react-router-dom";
import Divider from "./Divider";
import IconLinkedin from "../../icons/IconLinkedin";
import IconPhone from "../../icons/IconPhone";
import IconGithub from "../../icons/IconGithub";
import IconMail from "../../icons/IconMail";

const Footer = () => {

    return (
        <footer className=" bg-strong-dark text-white dark:bg-gold dark:text-strong-dark">
            <Divider></Divider>
            <div className="px-2 py-8 sm:px-10 flex flex-col sm:flex-row sm:justify-evenly">
                <div>
                    <h1 className="text-lg">Links</h1>
                    <ul className="flex flex-col gap-1">
                        <li className="">
                            <NavLink className={({ isActive }) => `${isActive ? 'text-rose dark:text-blue-900' : ''}`} to='/about'>About</NavLink>
                        </li>
                        <li className="">
                            <NavLink className={({ isActive }) => `${isActive ? 'text-rose dark:text-blue-900' : ''}`} to='/works'>Works</NavLink>

                        </li>
                        <li className="">
                            <NavLink className={({ isActive }) => `${isActive ? 'text-rose dark:text-blue-900' : ''}`} to='/tutorials'>Tutorials</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-lg">Media</h1>
                    <ul className="flex flex-col gap-2 ">
                        <li className="flex gap-3 group cursor-pointer">
                            <a href="https://www.linkedin.com/in/juancarloscdf" target="_blank" className="flex gap-2">
                                <IconLinkedin width={28} height={"100%"} className=" group-hover:animate-bell" onClick={() => console.log("asdas")} />
                                Linkedin
                            </a>
                        </li>

                        <li className="flex gap-3 group cursor-pointer">
                            <a href="https://github.com/JuanCarloscdf" target="_blank" className="flex gap-2">
                                <IconGithub width={28} height={"100%"} className=" group-hover:animate-bell" onClick={() => console.log("asdas")} />
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-lg">Contact</h1>
                    <ul className="flex flex-col gap-2">
                        <li className="flex gap-3 group cursor-pointer">
                            <a href="mailto:jcmrdev@gmail.com" target="_blank" className="flex gap-2">
                                <IconMail width={28} height={"100%"} className=" group-hover:animate-bell" onClick={() => console.log("asdas")} />
                                jcmrdev@gmail.com
                            </a>
                        </li>
                        <li className="flex gap-3 group cursor-pointer">
                            <a href="https://api.whatsapp.com/send?phone=59173080372" target="_blank" className="flex gap-2">
                                <IconPhone width={28} height={"100%"} className=" group-hover:animate-bell" onClick={() => console.log("asdas")} />
                                Whatsapp
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;