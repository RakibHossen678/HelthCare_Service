import { useEffect, useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { getServices, updateService } from "../utility/localstorage";
import PropTypes from "prop-types";

const UpdateModal = ({ setServices, id }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const trigger = useRef(null);
  const modal = useRef(null);

  // Close on click outside
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

  // Close if the escape key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const services = getServices();
  const filteredService = services.filter((service) => service.id === id);

  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.desc.value;
    const price = form.price.value;
    const updatedService = {
      id: filteredService[0].id,
      name,
      description,
      price,
    };
    updateService(id, updatedService);
    const storedServices = getServices();
    setServices(storedServices);
    setModalOpen(false);
    form.reset();
  };

  return (
    <>
      <div className="">
        <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className="flex items-center text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
        >
          <FaEdit className="mr-2" />
          Update
        </button>

        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4 py-5">
            <div
              ref={modal}
              className="w-full max-w-lg rounded-lg bg-white px-8 py-10 shadow-lg md:px-12"
            >
              <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Update Service
              </h1>
              <form onSubmit={handleForm}>
                <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-1">
                    Service Name
                  </label>
                  <input
                    defaultValue={filteredService[0]?.name}
                    name="name"
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Enter Service Name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-600 font-medium mb-1">
                    Description
                  </label>
                  <input
                    defaultValue={filteredService[0]?.description}
                    name="desc"
                    type="text"
                    required
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Enter Description"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-600 font-medium mb-1">
                    Price
                  </label>
                  <input
                    defaultValue={filteredService[0]?.price}
                    name="price"
                    type="number"
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Enter Price"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Update Service
                </button>
              </form>
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setModalOpen(false)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

UpdateModal.propTypes = {
  id: PropTypes.number,
  setServices: PropTypes.func,
};

export default UpdateModal;
