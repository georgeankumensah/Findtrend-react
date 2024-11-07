import Button from "../../../components/Button"
import mobileSocials from "../../../assets/images/hero-column.png"
import desktopSocials from "../../../assets/images/btn-hero-socmed.png"
import buttonImage from "../../../assets/images/img-hero.png"

const Hero = () => {
  return (
    <section>
        <h1 className="text-white text-center text-[36px] font-[900] mt-[56px] leading-[40.32px] lg:text-[72px] lg:leading-[80.64px] lg:mt-[99px]">Minimize your tabs. <br /> Find the trends!</h1>
      <p className="font-[400] text-[14px] leading-[21px] text-center mt-[16px] max-w-[300px] w-full mx-auto text-[#8B8B8B] lg:leading-[27px] lg:text-[18px] lg:max-w-[666px] lg:mt-[24px]">Don’t let your computer memories consumes all of those browser tabs. <br />
      Findtrend  let you gathers all of your favorite website into one place.</p>
      <Button title="Get Started 🔥" bold color="green" size={14} className="mx-auto mt-[32px] lg:mt-[40px]"/>
      <img src={buttonImage} alt="pointer" className="hidden lg:flex mx-auto relative -top-[69px] left-[158px] "/>
      <img src={mobileSocials} alt="socials" className="mt-[60px] mx-auto h-[307px] aspect-auto mb-[43px] lg:hidden" />
      <img src={desktopSocials} alt="socials" className="mx-auto hidden lg:block h-[178px] mt-[95px] mb-[91px]" />
    </section>
  )
}

export default Hero
