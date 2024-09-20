import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto  flex justify-center p-4 lg:px-10 md:px-6">
      <img className="w-full" src={banner} alt="" />
    </div>
  );
};

export default Banner;
