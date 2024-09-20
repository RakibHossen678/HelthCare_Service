import { FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import UpdateModal from "./UpdateModal";

function Service({ service, onDelete, setServices }) {
  return (
    <div className="bg-purple-50 rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-500 ease-in-out">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        {service.name}
      </h2>
      <p className="text-gray-600 mb-3">{service.description}</p>
      <p className="text-lg font-medium text-green-600">${service.price}</p>

      <div className="flex justify-between items-center mt-5">
        {/* Update Button */}
        <UpdateModal id={service.id} setServices={setServices} />

        {/* Delete Button */}
        <button
          onClick={() => onDelete(service.id)}
          className="flex items-center text-red-600 hover:text-red-800 font-medium transition-colors duration-200"
        >
          <FaTrashAlt className="mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
}

Service.propTypes = {
  service: PropTypes.object,
  onDelete: PropTypes.func,
  setServices: PropTypes.func,
};

export default Service;
