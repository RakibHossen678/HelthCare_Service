import App from "../App";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-purple-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <Navbar />
      <Banner />
      <App />
      <Footer />
    </div>
  );
};

export default Layout;
