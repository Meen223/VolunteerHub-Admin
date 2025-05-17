import { useNavigate } from "react-router-dom";

function Orange({ title }) {
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-6 px-4">
      {/* Header แถบส้ม */}
      <div className="bg-orange-300 text-black text-lg py-3 px-4 flex items-center shadow-md">
        <button
          onClick={() => navigate("/activity-details")} // ✅ เพิ่มการนำทาง
          className="mr-4 text-2xl font-bold select-none"
          aria-label="Back"
        >
          ←
        </button>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Orange;
