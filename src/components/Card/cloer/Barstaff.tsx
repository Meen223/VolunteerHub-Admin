import { useState } from "react";
import { Link } from "react-router-dom";
 
function Barstaff({ onFilterChange }) {
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
 
  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;
    setStatus(selectedStatus);
    if (onFilterChange) onFilterChange({ status: selectedStatus, type });
  };
 
  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);
    if (onFilterChange) onFilterChange({ status, type: selectedType });
  };
 
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white/70 rounded-xl shadow my-4">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="ค้นหา"
          className="px-6 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          value={type}
          onChange={handleTypeChange}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">ประเภท</option>
          <option value="อาสา">อาสา</option>
          <option value="ช่วยงาน">ช่วยงาน</option>
          <option value="อบรม">อบรม</option>
        </select>
        <select
          value={status}
          onChange={handleStatusChange}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">สถานะ</option>
          <option value="อนุมัติ">อนุมัติ</option>
          <option value="ปฏิเสธ">ปฏิเสธ</option>
        </select>
      </div>
 
      <Link
        to="/create-staff"
        className="flex items-center mt-4 sm:mt-0 px-5 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>สร้าง Staff</span>
      </Link>
    </div>
  );
}
 
export default Barstaff;
