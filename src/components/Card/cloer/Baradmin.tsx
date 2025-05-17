import { useState } from "react";
import { Link } from "react-router-dom";

function Baradmin({ onFilterChange }) {
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;
    setStatus(selectedStatus);
    onFilterChange({ status: selectedStatus, type });
  };

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);
    onFilterChange({ status, type: selectedType });
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-2 bg-white rounded-md my-4">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="ค้นหา"
          className="px-8 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={type}
          onChange={handleTypeChange}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">ประเภท</option>
          <option value="อาสา">อาสา</option>
          <option value="ช่วยงาน">ช่วยงาน</option>
          <option value="อบรม">อบรม</option>
        </select>

        <select
          value={status}
          onChange={handleStatusChange}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">สถานะ</option>
          <option value="อนุมัติ">อนุมัติ</option>
          <option value="ปฏิเสธ">ปฏิเสธ</option>
        </select>
      </div>

      <Link
        to="/create-activity"
        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-blue-500 hover:text-white flex items-center mt-2 sm:mt-0"
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
        <span>สร้างกิจกรรม</span>
      </Link>
    </div>
  );
}

export default Baradmin;
