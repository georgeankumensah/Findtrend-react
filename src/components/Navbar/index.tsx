import Logo from "../../assets/images/logo.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Button from "../Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-[88px] lg:h-[99px]  bg-black px-[18px] py-[24px] lg:max-w-[1280px] mx-auto">
      <div className="flex items-center gap-[10px]">
        <img src={Logo} alt="logo" className="aspect-square w-[40px] " />
        <span className="hidden lg:block text-white font-[700] text-[24px]">
          Findtrend
        </span>
      </div>
      <ul className="hidden lg:flex items-center gap-x-[40px]">
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "active"
                : "capitalise text-white text-[18px] font-[400]"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "active"
                : "capitalise text-white text-[18px] font-[400]"
            }
          >
            How it work
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "active"
                : "capitalise text-white text-[18px] font-[400]"
            }
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "active"
                : "capitalise text-white text-[18px] font-[400]"
            }
          >
            Solution
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "active"
                : "capitalise text-white text-[18px] font-[400]"
            }
          >
            Features
          </NavLink>
        </li>
      </ul>
      <div className="hidden lg:flex items-center">
        <Button title="Login" size={20} onClick={()=>{}} />
        <Button title="Register" size={20} color="white" onClick={()=>{}}  className="w-[129px] h-[42px]"/>
      </div>
      <HiOutlineMenuAlt4
        color=" white"
        className="h-[24px] w-[24px] aspect-square lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
