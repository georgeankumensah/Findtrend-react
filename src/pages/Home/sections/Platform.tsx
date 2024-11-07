import Platforms from "../../../assets/images/platform.png"
import Post1 from "../../../assets/images/tweet 1.png"
import Post2 from "../../../assets/images/tweet 2.png"
import Post3 from "../../../assets/images/tweet 3.png"
import Button from "../../../components/Button";


const Platform = () => {
  return (
    <section className="bg-[#FAFAFA] px-4 py-[80px] lg:py-[140px]">
      <h3 className="text-center text-[36px] font-[900] leading-[42.77px] lg:text-[64px] lg:font-[700] lg:leading-[76px] ">
        All platform connect to Findtrend
      </h3>
      <img src={Platforms} alt="platforms" className="mt-[32px] h-[64px] object-cover object-left lg:mx-auto lg:h-[124px] aspect-auto  " />
      <img src={Post1} alt="twitter post" className="mt-[32px] w-[339px] h-[116px] lg:w-[800px] lg:h-[274px] lg:mt-[77px] mx-auto" />
      <img src={Post2} alt="twitter post" className="mt-[16px] w-[339px] h-[334px] lg:w-[800px] lg:h-[804px] lg:mt-[43px] mx-auto" />
      <img src={Post3} alt="twitter post" className="mt-[16px] w-[339px] h-[116px] lg:w-[800px] lg:h-[274px] lg:mt-[40px] mx-auto" />
      <Button title="View More Trend" size={14} className="h-[44px] mt-[32px] lg:mt-[80px] mx-auto"/>
    </section>
  );
};

export default Platform;
