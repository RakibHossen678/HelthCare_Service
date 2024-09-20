import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  return (
    <section className="flex justify-between items-center container mx-auto p-4 lg:px-10 md:p-6">
      <h1 className="text-3xl text font-bold text-[#020043]">HeathCare</h1>
      <ul className=" items-center space-x-7 hidden  lg:flex">
        <li className="text-[#020043] font-medium hover:text-blue-600">Home</li>
        <li className="text-[#020043] font-medium hover:text-blue-600">
          Services
        </li>
        <li className="text-[#020043] font-medium hover:text-blue-600">Blog</li>
        <li className="text-[#020043] font-medium hover:text-blue-600">
          About Us
        </li>
      </ul>
      <button className="flex  items-center font-medium border-2 border-[#020043] rounded-md  lg:px-3 lg:py-2 px-2 py-1 text-[#020043] hover:bg-[#020043] space-x-2 hover:text-white">
        <span>Appointment</span> <GoArrowUpRight size={20} />
      </button>
    </section>
  );
};

export default Navbar;
