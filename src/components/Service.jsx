import { FaEdit, FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";
function Service({ service, onUpdate, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h2 className="text-xl font-bold mb-2">{service.name}</h2>
      <p className="text-gray-600 mb-2">{service.description}</p>
      <p className="text-green-500 font-semibold">{service.price}</p>

      <div className="flex justify-end space-x-4 mt-4">
        {/* Update Button */}
        <button
          onClick={() => onUpdate(service.id)}
          className="flex items-center text-blue-500 hover:text-blue-700"
        >
          <FaEdit className="mr-2" />
          Update
        </button>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(service.id)}
          className="flex items-center text-red-500 hover:text-red-700"
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
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

export default Service;
