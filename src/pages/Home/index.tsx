import CallToAction from "./sections/CallToAction";
import Hero from "./sections/Hero";
import Join from "./sections/Join";
import OpenTabs from "./sections/OpenTabs";
import Platform from "./sections/Platform";
import Pricing from "./sections/Pricing";
import StartUp from "./sections/StartUp";

const Homepage = () => {
  return (
    <>
      <Hero />
      <OpenTabs/>
      <CallToAction/>
      <StartUp/>
      <Platform/>
      <Pricing/>
      <Join/>
    </>
  );
};

export default Homepage;
