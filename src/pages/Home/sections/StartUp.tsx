import allianz from "../../../assets/images/allianz.png";
import microsoft from "../../../assets/images/microsoft.png"
import upwork from "../../../assets/images/upwork.png"
import volvo from "../../../assets/images/volvo.png"
import grab from "../../../assets/images/grab.png"
import verizon from "../../../assets/images/verizon.png"
import coinbase from "../../../assets/images/coinbase.png"
import expedia from "../../../assets/images/expedia.png"
import airtable from "../../../assets/images/airtable.png"
import magneto from "../../../assets/images/magneto.png"
import carrera from "../../../assets/images/carrera.png"
import bonanza from "../../../assets/images/bonanza.png"
import wetransfer from "../../../assets/images/wetransfer.png"
import suzuki from "../../../assets/images/suzuki.png"
import algolia from "../../../assets/images/algolia.png"
import heineken from "../../../assets/images/heineken.png"

const startUpData = [
  {
    name: "microsoft",
    imageUrl: microsoft,
  },
  {
    name: "allianz",
    imageUrl: allianz,
  },
  {
    name: "upwork",
    imageUrl: upwork,
  },
  {
    name: "volvo",
    imageUrl: volvo,
  },
  {
    name: "grab",
    imageUrl: grab,
  },
  {
    name: "verizon",
    imageUrl: verizon,
  },
  {
    name: "coinbase",
    imageUrl: coinbase,
  },
  {
    name: "expedia",
    imageUrl: expedia,
  },
  {
    name: "airtable",
    imageUrl: airtable,
  },
  {
    name: "magneto",
    imageUrl: magneto,
  },
  {
    name: "carrera",
    imageUrl: carrera,
  },
  {
    name: "bonanza",
    imageUrl: bonanza,
  },
  {
    name: "wetransfer",
    imageUrl: wetransfer,
  },
  {
    name: "suzuki",
    imageUrl: suzuki,
  },
  {
    name: "algolia",
    imageUrl: algolia,
  },
  {
    name: "heineken",
    imageUrl: heineken,
  },
];

const StartUp = () => {
  return (
    <section className="bg-white px-4  py-[80px] ">
      <h3 className="text-center text-[36px] font-[900] leading-[42.77px]lg:text-[64px] lg:font-[700] lg:leading-[76px] ">
        Findtrend make +1000 Startup grow
      </h3>
      <div className="grid grid-cols-2 gap-[15px] mt-[32px] lg:mt-[80px] max-w-[1160px] mx-auto lg:grid-cols-4">
        {startUpData.map((startup, idx) => {
          return (
            <div key={idx} className="flex bg-[#F5F5F5] h-[74px] w-[162px] justify-center items-center rounded-[8px] lg:w-[266px] lg:h-[120px]">
              <img src={startup.imageUrl} alt={startup.name} className="w-[95px] h-[24px] aspect-auto object-contain lg:w-[190px] lg:h-[40px]" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StartUp;
