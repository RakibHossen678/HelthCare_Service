//get service
export const getServices = () => {
  let services = [];
  const storedServices = localStorage.getItem("services");
  if (!storedServices) {
    localStorage.setItem("services", JSON.stringify(defaultServices));
  } else {
    services = JSON.parse(storedServices);
  }
  return services;
};

//add service

export const addService = (newService) => {
  const services = getServices();
  services.push(newService);
  localStorage.setItem("services", JSON.stringify(services));
};

//update Service

export const updateService = (id, updatedService) => {
  const services = getServices();
  const updatedServiceArray = services.map((service) =>
    service.id === id ? { ...service, ...updatedService } : service
  );
  localStorage.setItem("services", JSON.stringify(updatedServiceArray));
};

//delete

export const deleteServices = (id) => {
  const services = getServices();
  const remainingServices = services.filter((service) => service.id !== id);
  localStorage.setItem("services", JSON.stringify(remainingServices));
};

const defaultServices = [
  {
    id: 1,
    name: "Consultation",
    description: "General health consultation",
    price: "50",
  },
  {
    id: 2,
    name: "Therapy",
    description: "Physical therapy session",
    price: "70",
  },
  {
    id: 3,
    name: "Dental Checkup",
    description: "Routine dental examination",
    price: "40",
  },
  {
    id: 4,
    name: "X-Ray",
    description: "Full-body x-ray service",
    price: "100",
  },
  { id: 5, name: "Vaccination", description: "Flu vaccination", price: "$30" },
  {
    id: 6,
    name: "Blood Test",
    description: "Complete blood panel testing",
    price: "60",
  },
  {
    id: 7,
    name: "Chiropractic Adjustment",
    description: "Spine alignment and adjustment",
    price: "80",
  },
  {
    id: 8,
    name: "Mental Health Counseling",
    description: "One-on-one counseling session",
    price: "90",
  },
  {
    id: 9,
    name: "Eye Examination",
    description: "Comprehensive eye health check",
    price: "$",
  },
  {
    id: 10,
    name: "Prenatal Care",
    description: "Routine care during pregnancy",
    price: "120",
  },
  // {
  //   id: 11,
  //   name: "Nutrition Consultation",
  //   description: "Personalized dietary advice",
  //   price: "65",
  // },
  // {
  //   id: 12,
  //   name: "Skin Care Treatment",
  //   description: "Dermatology consultation for skin issues",
  //   price: "85",
  // },
  // {
  //   id: 13,
  //   name: "Hearing Test",
  //   description: "Comprehensive hearing examination",
  //   price: "45",
  // },
  // {
  //   id: 14,
  //   name: "MRI Scan",
  //   description: "Magnetic resonance imaging scan",
  //   price: "250",
  // },
  // {
  //   id: 15,
  //   name: "CT Scan",
  //   description: "Computerized tomography scan",
  //   price: "300",
  // },
  // {
  //   id: 16,
  //   name: "Ultrasound",
  //   description: "Ultrasound imaging service",
  //   price: "150",
  // },
  // {
  //   id: 17,
  //   name: "Allergy Testing",
  //   description: "Comprehensive allergy test panel",
  //   price: "95",
  // },
  // {
  //   id: 18,
  //   name: "Physical Exam",
  //   description: "Complete physical examination",
  //   price: "75",
  // },
  // {
  //   id: 19,
  //   name: "Vaccination (COVID-19)",
  //   description: "COVID-19 vaccine administration",
  //   price: "20",
  // },
  // {
  //   id: 20,
  //   name: "Sleep Study",
  //   description: "Overnight sleep disorder study",
  //   price: "400",
  // },
];
