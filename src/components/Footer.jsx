const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold">Healthcare Services</p>
          <p className=" mt-2">
            Providing quality care for your health and well-being.
          </p>
          <div className="mt-4">
            <a href="#" className="  mx-2">
              Home
            </a>
            <a href="#" className="">
              About Us
            </a>
            <a href="#" className=" mx-2">
              Services
            </a>
            <a href="#" className=" mx-2">
              Contact
            </a>
          </div>
          <p className=" mt-4">
            &copy; 2024 Healthcare Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
