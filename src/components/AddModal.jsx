import { useEffect, useRef, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { addService, getServices } from "../utility/localstorage";

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
          className={`rounded-full bg-blue-600  px-6 py-3 text-base font-medium text-white mb-5 flex  items-center gap-2 `}
        >
          <FaPlusCircle className="" size={22} /> Add Services
        </button>
        <div
          className={`fixed left-0 top-0 flex h-full min-h-screen bg-black bg-opacity-70 w-full items-center justify-center bg-dark/90 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12   md:px-[70px] md:py-[60px]"
          >
            <h1 className="text-3xl pb-4 text-center font-semibold">
              Add Service
            </h1>
            <form onSubmit={handleForm}>
              <div className="w-full mt-4">
                <label>Name</label>
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="name"
                  placeholder="Enter Service Name"
                  aria-label="Service Name"
                />
              </div>
              <div className="w-full mt-4">
                <label>Description</label>
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="desc"
                  placeholder="Enter Description"
                  aria-label="Description"
                />
              </div>
              <div className="w-full mt-4">
                <label>Price</label>
                <input
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="number"
                  name="price"
                  placeholder="Enter Price"
                  aria-label="Price"
                />
              </div>

              <div className="w-1/2 mx-auto px-3 mt-6">
                <button
                  type="submit"
                  className="block w-full rounded-md border border-primary  p-3 text-center text-base font-medium text-white bg-blue-600 transition hover:bg-blue-dark"
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

export default AddModal;
