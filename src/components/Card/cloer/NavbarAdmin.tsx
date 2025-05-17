import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbaradmin() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // ล้าง token หรือ session ที่นี่ถ้ามี
    navigate("/"); // กลับไปหน้า Login
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-sky-600">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-lg text-white">VolunteerHub</span>
        <div className="ml-6 space-x-6 font-medium text-gray-700">
          <Link to="/home" className="hover:underline text-white">หน้าหลัก</Link>
          <Link to="/approve-activity" className="hover:underline text-white">อนุมัติ</Link>
        </div>
      </div>

      <div className="relative inline-block text-left hover:underline">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="inline-flex items-center rounded-full border border-white px-4 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white"
          id="menu-button"
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
        >
          <div className="mr-2">
            <svg
              className="h-6 w-6 rounded-full bg-white text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-white">ชื่อ-สกุล</span>
          <svg
            className="ml-2 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* DROPDOWN */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-100 hover:text-red-600"
            >
              ออกจากระบบ
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbaradmin;
