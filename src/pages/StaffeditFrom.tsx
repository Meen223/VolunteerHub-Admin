import { Link } from "react-router-dom";
 
export default function StaffeditFrom() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-200 to-pink-300 flex items-center justify-center p-4">
      <div className="bg-pink-200 w-full max-w-2xl rounded-2xl p-8 shadow-md relative">
 
        {/* ปุ่มปิด */}
        <button className="absolute top-4 right-4 text-xl text-black hover:text-gray-800">
          &times;
        </button>
 
        {/* หัวเรื่อง */}
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
          แก้ไขข้อมูล <span className="font-bold">staff</span>
        </h2>
 
        {/* ฟอร์ม */}
        <form className="space-y-6">
 
          {/* รหัสนิสิต + Dropdown */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-800 mb-1">รหัสนิสิต</label>
              <input
                type="text"
                className="w-full bg-white rounded-md px-4 py-2 focus:outline-none shadow-inner"
              />
            </div>
 
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-800 mb-1 invisible">.</label>
              <select className="w-full bg-white rounded-md px-4 py-2 focus:outline-none shadow-inner">
                <option>จัดการสิทธ์</option>
                <option>นิสิต</option>
                <option>Staff</option>
              </select>
            </div>
          </div>
 
          {/* ชื่อ–นามสกุล */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">ชื่อ–นามสกุล</label>
            <input
              type="text"
              className="w-full bg-white rounded-md px-4 py-2 focus:outline-none shadow-inner"
            />
          </div>
 
          {/* ประเภท */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">ประเภท</label>
            <input
              type="text"
              className="w-full bg-white rounded-md px-4 py-2 focus:outline-none shadow-inner"
            />
          </div>
 
          {/* รายละเอียด */}
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">รายละเอียด</label>
            <textarea
              rows={4}
              className="w-full bg-white rounded-md px-4 py-2 focus:outline-none shadow-inner"
            />
          </div>
 
          {/* ปุ่ม */}
          <div className="flex justify-center gap-6 pt-4">
           
            <div className="flex justify-center gap-6 pt-4">
            <div className="flex justify-center gap-6 pt-4">
                <Link
                    to="/staff-home"
                    className="w-40 text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-full shadow-md"
                >
                    ยืนยัน
                </Link>
                <Link
                    to="/staff-home"
                    className="w-40 text-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-full shadow-md"
                >
                    ลบข้อมูล
                </Link>
                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}