import OpenMobile from "../../../assets/images/open-mobile.png"
import OpenDesktop from "../../../assets/images/open-desktop.png"


const OpenTabs = () => {
  return (
    <section className="bg-[#A8FF35] px-4 flex justify-center flex-col gap-y-[32px] py-[80px] lg:py-[140px] lg:gap-y-[60px]">
      <h2 className="text-[32px] font-[700] text-center leading-[40.32px] lg:text-[72px]">Open new tabs is sh*t </h2>
      <img src={OpenMobile} alt="open tab"  className="w-[344px] h-[211px] mx-auto lg:hidden"/>
      <img src={OpenDesktop} alt="open tab"  className="hidden lg:block h-[202px] w-[745px] mx-auto"/>
      <p className="text-[14px] text-center font-[400] max-w-[340px] mx-auto leading-[21px] lg:max-w-[666px] lg:text-[18px] ">A solution for your browser tabs and don’t make your device get slower over time. Get ease and faster to discover a trend with just one tab.</p>
    </section>
  )
}

export default OpenTabs
