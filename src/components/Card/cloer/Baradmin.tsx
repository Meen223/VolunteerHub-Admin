import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";

type FilterType = {
  status: string;
  type: string;
  search: string;
};

interface BaradminProps {
  onFilterChange: (filters: FilterType) => void;
}

function Baradmin({ onFilterChange }: BaradminProps) {
  const [status, setStatus] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const debouncedFilter = useRef(
    debounce((params: FilterType) => {
      onFilterChange(params);
    }, 500)
  ).current;

  useEffect(() => {
    debouncedFilter({ status, type, search });
    return () => {
      debouncedFilter.cancel();
    };
  }, [status, type, search, debouncedFilter]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 py-3 rounded-xl my-6 border border-gray-200 dark:border-gray-700 bg-transparent">
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <input
          type="text"
          placeholder="ค้นหา"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#23263b] text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 transition focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <select
          value={type}
          onChange={e => setType(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#23263b] text-gray-800 dark:text-gray-100 transition focus:ring-2 focus:ring-blue-400 outline-none"
        >
          <option value="">ประเภท</option>
          <option value="1">อาสา</option>
          <option value="2">ช่วยงาน</option>
          <option value="3">อบรม</option>
        </select>
        <select
          value={status}
          onChange={e => setStatus(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#23263b] text-gray-800 dark:text-gray-100 transition focus:ring-2 focus:ring-blue-400 outline-none"
        >
          <option value="">สถานะ</option>
          <option value="approved">อนุมัติ</option>
          <option value="pending">รอดำเนินการ</option>
          <option value="rejected">ปฏิเสธ</option>
          <option value="cancelled">ยกเลิก</option>
          <option value="completed">เสร็จสิ้น</option>
          <option value="draft">ฉบับร่าง</option>
        </select>
      </div>
      <Link
        to="/create-activity"
        className="px-5 py-2 rounded-lg font-semibold bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-800 dark:hover:bg-blue-400 transition flex items-center gap-2 shadow-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
        สร้างกิจกรรม
      </Link>
    </div>
  );
}

export default Baradmin;
