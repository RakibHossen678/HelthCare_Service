

export const getServices = () => {
  let services = [];
  const storedServices = localStorage.getItem("services");
  if (storedServices) {
    services = JSON.parse(storedServices);
  }
  return services;
};

//delete

export const deleteServices = (id) => {
  const services = getServices();
  const remainingServices = services.filter((service) => service.id !== id);
  localStorage.setItem("services", JSON.stringify(remainingServices));
  
};
