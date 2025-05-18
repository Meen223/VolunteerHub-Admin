import { useNavigate } from "react-router-dom";

function Orange({ title, backTo }) {
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-6 px-4">
      {/* Header แถบส้ม */}
      <div className="bg-orange-400 text-black text-lg py-3 px-4 flex items-center shadow-md rounded-lg">
        <button
          onClick={() => navigate(backTo)} 
          className="mr-4 text-2xl font-bold select-none hover:text-orange-700 transition"
          aria-label="Back"
        >
          ←
        </button>
        <span className="font-bold tracking-tight">{title}</span>
      </div>
    </div>
  );
}

export default Orange;
