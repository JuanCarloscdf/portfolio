import { NavLink } from "react-router-dom";

const Links = ({isNav = false}:{isNav?:boolean}) => {
/* const linksRef = useRef(0)
linksRef.current ++
console.log("Links",linksRef.current) */
  return (
    <nav className={`${isNav ? "grid items-center":"hidden xs:grid items-center" }`}>
        <ul className="flex gap-1">
          <li className="nav-link">
            <NavLink className={({ isActive }) => `${isActive ? 'text-rose dark:text-gold' : ''}`} to='/about'>About</NavLink>
          </li>
          <li className="nav-link">
            <NavLink className={({ isActive }) => `${isActive ? 'text-rose dark:text-gold' : ''}`} to='/works'>Works</NavLink>

          </li>
          <li className="nav-link">
            <NavLink className={({ isActive }) => `${isActive ? 'text-rose dark:text-gold' : ''}`} to='/tutorials'>Tutorials</NavLink>
          </li>
        </ul>
      </nav>
  );
};

export default Links;