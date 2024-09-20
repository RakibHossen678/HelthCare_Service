import { useEffect, useState } from "react";
import "./App.css";
import Service from "./components/Service";
import { deleteServices, getServices } from "./utility/localstorage";
import AddModal from "./components/AddModal";

function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const storedServices = getServices();
    setServices(storedServices);
  }, []);

  const handleUpdate = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    deleteServices(id);
    const storedServices = getServices();
    setServices(storedServices);
  };

  return (
    <main className="w-10/12 mx-auto">
      <h1 className="text-center text-4xl font-bold py-10">
        Healthcare Services
      </h1>
      <div className=" flex justify-end items-center">
        <AddModal setServices={setServices} />
      </div>
      {services.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service) => (
            <Service
              key={service.id}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              service={service}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 text-xl">
          No services available.
        </p>
      )}
    </main>
  );
}

export default App;
