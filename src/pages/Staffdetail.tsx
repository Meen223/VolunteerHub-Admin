import { Link } from "react-router-dom";
 
export default function Staffdetail() {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-pink-200 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white/30 backdrop-blur-lg w-full max-w-2xl rounded-2xl p-8 shadow-md relative">
 
        {/* Close Button */}
        < Link
            to ="/staff-home"
             className="absolute top-4 right-4 text-xl text-gray-600 hover:text-black">
          &times;
        </Link>
 
        {/* Title */}
        <h2 className="text-center text-xl font-bold text-gray-800 mb-8">รายละเอียด</h2>
 
        {/* Display-only Info */}
        <div className="space-y-6">
          {/* รหัสนิสิต */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">รหัสนิสิต</label>
            <div className="w-1/2  backdrop-blur-md rounded-md px-4 py-2 text-gray-800 shadow-inner">
              65123456
            </div>
          </div>
 
          {/* ชื่อ–นามสกุล */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อ–นามสกุล</label>
            <div className="w-full  backdrop-blur-md rounded-md px-4 py-2 text-gray-800 shadow-inner">
              นางสาวกานดา ใจดี
            </div>
          </div>
 
          {/* ประเภท */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ประเภท</label>
            <div className="w-full  backdrop-blur-md rounded-md px-4 py-2 text-gray-800 shadow-inner">
              กิจกรรมจิตอาสา
            </div>
          </div>
 
          {/* รายละเอียด */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">รายละเอียด</label>
            <div className="w-full  backdrop-blur-md rounded-md px-4 py-2 text-gray-800 min-h-[100px] shadow-inner">
              ร่วมจัดกิจกรรมบริจาคโลหิตประจำปี ณ อาคารกิจกรรม มหาวิทยาลัย
            </div>
          </div>
 
          {/* ปุ่ม */}
          <div className="pt-4 text-center">
            <Link
                to="/staff-edit-form"
                className="inline-block bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-2 px-10 rounded-full shadow-md transition"
  >
                แก้ไข
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
 