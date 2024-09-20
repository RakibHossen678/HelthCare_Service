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
    <main className="container  mx-auto p-4 lg:p-10 md:p-6 ">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 leading-tight mb-4">
          Healthcare Services
        </h1>
        <p className="text-lg text-gray-600">
          Explore a variety of healthcare services we offer to make your life
          healthier.
        </p>
      </section>

      {/* Add button */}
      <div className="flex justify-end mb-6">
        <AddModal setServices={setServices} />
      </div>

      {/* Services Grid */}
      {services.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Service
              key={service.id}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              service={service}
              setServices={setServices}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-xl">
          No services available at the moment. Check back later!
        </p>
      )}
    </main>
  );
}

export default App;
