import { useEffect, useRef, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { addService, getServices } from "../utility/localstorage";
import PropTypes from "prop-types";

const AddModal = ({ setServices }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const handleForm = (e) => {
    e.preventDefault();
    const storedService = getServices();
    const form = e.target;
    const name = form.name.value;
    const description = form.desc.value;
    const price = form.price.value;
    const newService = {
      id: storedService.length + 1,
      name,
      description,
      price,
    };
    addService(newService);
    const storedServices = getServices();
    setServices(storedServices);
    setModalOpen(false);
    form.reset();
  };

  return (
    <>
      <div className=" ">
        <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-medium text-white mb-5 flex items-center gap-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out`}
        >
          <FaPlusCircle className="" size={22} /> Add Services
        </button>
        <div
          className={`fixed inset-0 flex h-full w-full bg-black bg-opacity-70 items-center justify-center px-4 py-5 transition-all duration-300 ease-in-out ${
            modalOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <div
            ref={modal}
            className="relative w-full max-w-[570px] rounded-[20px] bg-white shadow-lg px-8 py-12 transition-all transform md:px-[70px] md:py-[60px]"
          >
            <h1 className="text-3xl pb-4 text-center font-semibold text-gray-800">
              Add Service
            </h1>
            <form onSubmit={handleForm}>
              <div className="w-full mt-4">
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring focus:ring-opacity-50 transition"
                  required
                  type="text"
                  name="name"
                  placeholder="Enter Service Name"
                  aria-label="Service Name"
                />
              </div>
              <div className="w-full mt-4">
                <label className="block text-gray-700 font-medium">
                  Description
                </label>
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring focus:ring-opacity-50 transition"
                  required
                  type="text"
                  name="desc"
                  placeholder="Enter Description"
                  aria-label="Description"
                />
              </div>
              <div className="w-full mt-4">
                <label className="block text-gray-700 font-medium">Price</label>
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none focus:ring focus:ring-opacity-50 transition"
                  required
                  type="number"
                  name="price"
                  placeholder="Enter Price"
                  aria-label="Price"
                />
              </div>

              <div className="w-full mt-6">
                <button
                  type="submit"
                  className="block w-full rounded-lg bg-blue-600 text-white font-semibold p-3 text-center shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out"
                >
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
AddModal.propTypes = {
  setServices: PropTypes.func,
};
export default AddModal;
