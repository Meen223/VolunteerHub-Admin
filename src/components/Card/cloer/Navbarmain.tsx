
import { Link } from "react-router-dom";

function Navbarmain() {
  return (
    <nav className="bg-blue-500 border-sky-500 dark:bg-gray-900 p-8">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold">❀ VolunteerHub</div>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/main" className="text-white">หน้าหลัก</Link>
          </li>
          <li>
            <Link to="/activities" className="text-white">กิจกรรมของฉัน</Link>
          </li>
          <li>
            <Link to="/history" className="text-white">ประวัติกิจกรรม</Link>
          </li>
          <li>
            <Link to="/profile" className="text-white">ระเบียนนิสิต</Link>
          </li>
        </ul>
        <div className="relative inline-block text-left">
          <button
            type="button"
            className="inline-flex items-center rounded-full border border-white px-4 py-1.5 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white"
            id="menu-button"
            aria-expanded="true"
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
        </div>
      </div>
    </nav>
  );
}

export default Navbarmain;






