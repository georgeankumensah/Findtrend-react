import { Link } from "react-router-dom";
import footerImage from "../../assets/images/footerlogo.png";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="flex flex-col justify-between lg:max-w-[1280px] mx-auto  items-center gap-y-[98px] py-[62px] lg:py-[29px] lg:flex-row lg:px-[100px] lg:h-[100px] ">

     
      <img src={footerImage} alt="logo" className="" />
      <div className="flex flex-col justify-between gap-y-[40px] w-full items-center lg:flex-row lg:max-w-[544px]">
        <Link to="/" className="font-[400] text-[18px] text-center">
          Privacy Policy
        </Link>
        <Link to="/" className="font-[400] text-[18px] text-center">
          Terms and Conditions
        </Link>
        <Link to="/" className="font-[400] text-[18px] text-center">
          Contact Us
        </Link>
        <Link to="/" className="font-[400] text-[18px] text-center">
          Careers
        </Link>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
