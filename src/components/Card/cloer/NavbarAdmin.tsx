import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../../../contexts/ThemeContext"; // << เพิ่มบรรทัดนี้

function Navbaradmin() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme(); // << ใช้ hook

  // ซ่อนปุ่ม dropdown ทั้งหมด เมื่ออยู่บนหน้า /edit-activity
  const hideDropdown = location.pathname.startsWith("/edit-activity");

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-blue-200 dark:bg-gray-900">
      <div className="flex items-center space-x-2">
        <span className="font-bold text-lg text-white">Admin</span>
        <div className="ml-6 space-x-6 font-medium text-gray-700 dark:text-gray-200">
          <Link to="/home" className="hover:underline">หน้าหลัก</Link>
          <Link to="/approve-activity" className="hover:underline">อนุมัติ</Link>
          <Link to="/staff-home" className="hover:underline">แก้ไขบัญชีเจ้าหน้าที่</Link>

        </div>
      </div>

      {!hideDropdown && (
        <div className="flex items-center space-x-3">
          {/* ปุ่ม Toggle Theme */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-full border bg-white text-gray-800 dark:bg-gray-700 dark:text-yellow-300 transition"
            title="เปลี่ยนธีม"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
          {/* ปุ่ม Dropdown เหมือนเดิม */}
          <div className="relative inline-block text-left">
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
              <span className="text-white">ADMIN</span>
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

            {/* DROPDOWN MENU */}
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
        </div>
      )}
    </nav>
  );
}

export default Navbaradmin;
