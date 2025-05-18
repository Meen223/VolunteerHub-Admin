import { Link } from "react-router-dom";
import Baradmin from "../components/Card/cloer/Baradmin";
import Barstaff from "../components/Card/cloer/Barstaff";
import Navbaradmin from "../components/Card/cloer/NavbarAdmin";
 
export default function Staffhome() {
  return (
    <div>
      <div>
        <Barstaff onFilterChange={undefined}/>
      </div>

      <div className="min-h-screen bg-gradient-to-t from-rose-200 to-white flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-xl w-full max-w-7xl h-[80vh] flex flex-col">

          {/* Header */}
          <div className="bg-blue-200 text-gray-800 rounded-t-xl px-6 py-3 font-semibold flex items-center justify-between">
            <span>Staff</span>
            {/* ปุ่มสร้าง */}
            
          </div>

          {/* Column Titles */}
          <div className="flex items-center px-6 py-3 bg-white font-semibold border-b border-gray-300 sticky top-0 z-10">
            <div className="w-1/3">รายชื่อ</div>
            <div className="w-1/3">สถานะ</div>
          </div>

          {/* Scrollable List */}
          <div className="flex-1 overflow-y-auto divide-y divide-gray-200">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="flex items-center px-6 py-4 bg-white">
                <div className="w-1/3">ชื่อ–สกุล {i + 1}</div>
                <div className="w-1/3">สถานะ</div>
                <div className="w-1/3 text-right">
                  <Link
                    to="/staff-detail"
                    className="bg-blue-300 hover:bg-blue-400 text-white py-1 px-4 rounded-full"
                  >
                    รายละเอียด
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
