import { FaCheck } from "react-icons/fa6";
import SaveImage from "../../../assets/images/save.png";
import SaveImageDesktop from "../../../assets/images/save-desktop.png";
import Button from "../../../components/Button";

const Pricing = () => {
  return (
    <section className="px-4 py-[80px] lg:py-[140px] ">
      <h3 className="text-white font-[900] leading-[42.77px] text-[36px]  text-center lg:text-[64px]">
        Get your best deal
      </h3>
      <div className="flex justify-center items-center mt-[32px] lg:mt-[40px]">
        <label className="inline-flex items-center cursor-pointer">
          <span className="mr-3 text-sm  text-white lg:text-[24px] lg:font-[300]">Monthly</span>
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 lg:h-[52px] lg:w-[104px] bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#a7ff35ab]  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[8px] after:start-[8px] after:bg-[#A8FF35] after:border-gray-300 after:border after:rounded-full after:h-[36px] after:w-[36px] after:transition-all  peer-checked:bg-[#b2f35eed]"></div>
          <span className="ms-3 text-sm  text-[#c9c8c8]  lg:text-[24px] lg:font-[300]">
            Yearly
          </span>
        </label>
      </div>
      <img
        src={SaveImage}
        alt="save 10%"
        className="relative  mx-auto left-[60px] lg:hidden"
      />
      <img
        src={SaveImageDesktop}
        alt="save 10%"
        className="relative mx-auto left-[170px] -top-[40px] hidden lg:block"
      />
      <div className="flex flex-col mt-[17px] gap-y-[24px] lg:flex-row gap-x-[40px] items-center lg:justify-center">
        {/* start of card */}
        <div className="flex flex-col bg-white h-[602px] w-[339px] rounded-[15px] py-[24px] px-[30px]">
          <h4 className="text-[32px] font-[400]  leading-[32px] ">Personal</h4>
          <p className="text-[18px] font-[400] leading-[18px] mt-[14px]">
            Special first packet for all
          </p>
          <hr className="bg-[#000000]  mt-[24px]" />
          <p className="text-[60px] font-[400] leading-[60px] mt-[32px]">
            $8
            <span className="text-[18px]"> /Month</span>
          </p>
          <p className="text-[18px] font-[400] leading-[18px] mt-[24px]"><FaCheck className="inline-flex mr-[8px]"/> Up to 5 page each group</p>
          <p className="text-[18px] font-[400] leading-[18px] mt-[24px]"><FaCheck className="inline-flex mr-[8px] "/> Up to 10 group page</p>
          <p className="text-[18px] font-[400] leading-[18px] mt-[24px]"><FaCheck className="inline-flex mr-[8px] "/> 5 Days group page saved</p>

          <Button
            title="Start Free Trial"
            size={18}
            color="green"
            bold
            className=" mt-auto w-[278px]"
          />
        </div>
        {/* end of card */}
        {/* start of card */}
        <div className="flex flex-col bg-[#A8FF35] h-[602px] w-[339px] rounded-[15px] py-[24px] pt-[30px] px-[30px]">
          <h4 className="text-[32px] font-[400]  leading-[32px] ">Regular</h4>
          <p className="text-[18px] font-[400] leading-[18px] mt-[14px]">
          Recommended for personal pro
          </p>
          <hr className="bg-[#000000]  mt-[24px]" />
          <p className="text-[60px] font-[400] leading-[60px] mt-[32px]">
            $20
            <span className="text-[18px]"> /Month</span>
          </p>
          <p className="text-[18px] font-[400] leading-[18px] mt-[24px]"><FaCheck className="inline-flex mr-[8px]"/> Up to 15 page each group</p>
          <p className="text-[18px] font-[400] leading-[18px] mt-[24px]"><FaCheck className="inline-flex mr-[8px] "/> Download page up to 20 page</p>
          <p className="text-[18px] font-[400] leading-[18px] mt-[24px]"><FaCheck className="inline-flex mr-[8px] "/> Up to 10 group page</p>
          <p className="text-[18px] font-[400] leading-[18px] mt-[24px]"><FaCheck className="inline-flex mr-[8px] "/> 15 Days group page saved</p>

          <Button
            title="Start Free Trial"
            size={18}
            color="black"
            bold
            className=" mt-auto w-[278px]"
          />
        </div>
        {/* end of card */}
        {/* start of card */}
        <div className="flex flex-col bg-white h-[602px] w-[339px] rounded-[15px] py-[24px] px-[30px]">
          <h4 className="text-[32px] font-[400]  leading-[32px] ">Personal</h4>
          <p className="text-[18px] font-[400] leading-[18px] mt-[14px]">
            Special first packet for all
          </p>
          <hr className="bg-[#000000]  mt-[24px]" />
          <p className="text-[60px] font-[400] leading-[60px] mt-[32px]">
            $48
            <span className="text-[18px]"> /Month</span>
          </p>
          <p className="text-[18px] font-[400] leading-[18px] mt-[24px]"><FaCheck className="inline-flex mr-[8px]"/> Unlimited group pages</p>
          <p className="text-[18px] font-[400] leading-[18px] mt-[24px]"><FaCheck className="inline-flex mr-[8px] "/> Unlimited download page</p>
          <p className="text-[18px] font-[400] leading-[18px] mt-[24px]"><FaCheck className="inline-flex mr-[8px] "/> Unlimited page each group</p>
          <p className="text-[18px] font-[400] leading-[18px] mt-[24px]"><FaCheck className="inline-flex mr-[8px] "/> Customize sorting group pages</p>
          <p className="text-[18px] font-[400] leading-[18px] mt-[24px]"><FaCheck className="inline-flex mr-[8px] "/> Customize group page name</p>
          <p className="text-[18px] font-[400] leading-[18px] mt-[24px]"><FaCheck className="inline-flex mr-[8px] "/> 30 Days group page saved</p>

          <Button
            title="Start Free Trial"
            size={18}
            color="green"
            bold
            className=" mt-auto w-[278px]"
          />
        </div>
        {/* end of card */}
      </div>
    </section>
  );
};

export default Pricing;
