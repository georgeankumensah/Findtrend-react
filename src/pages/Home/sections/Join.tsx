import Button from "../../../components/Button"

const Join = () => {
  return (
    <section className="px-4 py-[80px] bg-[#A8FF35] lg:py-[140px] ">

      <h3 className="text-[36px] font-[900] leading-[40px] text-center lg:text-[72px] lg:leading-[80px]">
      Join us on email for
      <br />
      <span className="text-[#87D322]">
      more trending topics
      </span>
      </h3>
      <Button title="Join Now" size={14} className="mx-auto mt-[40px]"/>
    </section>
  )
}

export default Join
