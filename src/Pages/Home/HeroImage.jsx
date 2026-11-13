import heroImg from "../../assets/hero.png";

const HeroImage = () => {
  return (
    <div className="w-full  pb-[64px]">
      <img
        src={heroImg}
        alt="City skyline viewed from below, representing business growth and ambition"
        className="w-full h-[500px] object-cover mx-auto"
      />
    </div>
  );
};

export default HeroImage;