import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";

export default function CloseActivityForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activityId = params.get("id");

  const [closeDate, setCloseDate] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activityId) {
      alert("ไม่พบรหัสกิจกรรม");
      return;
    }
    setLoading(true);
    // ยิง request ไป backend เพื่อปิดกิจกรรม
    const res = await fetch(`http://localhost:3002/activity/closeactivity/${activityId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ closeDate, note }), // ถ้าต้องการส่งข้อมูลเพิ่ม
    });
    setLoading(false);

    if (res.ok) {
      alert("ปิดกิจกรรมสำเร็จ");
      navigate("/home");
    } else {
      alert("เกิดข้อผิดพลาด ไม่สามารถปิดกิจกรรมได้");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-[#23263b] rounded-2xl shadow-md space-y-6 font-sans mt-16 border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-gray-900 dark:text-gray-100 text-base font-normal">ปิดกิจกรรม</h2>
        <button
          type="button"
          onClick={() => navigate("/home")}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="closeDate" className="block mb-1 text-gray-700 dark:text-gray-200 text-sm">
            วันที่ปิดกิจกรรม
          </label>
          <input
            type="date"
            id="closeDate"
            name="closeDate"
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 placeholder-gray-400 text-gray-900 dark:text-gray-100 dark:bg-[#1a1d2b] focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            placeholder="เลือกวันที่..."
            value={closeDate}
            onChange={e => setCloseDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="note" className="block mb-1 text-gray-700 dark:text-gray-200 text-sm">
            หมายเหตุเพิ่มเติม
          </label>
          <textarea
            id="note"
            name="note"
            rows={5}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-2 placeholder-gray-400 text-gray-900 dark:text-gray-100 dark:bg-[#1a1d2b] resize-none focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            placeholder="ใส่รายละเอียดที่เกี่ยวข้อง..."
            value={note}
            onChange={e => setNote(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-3 text-center transition duration-150"
          disabled={loading}
        >
          {loading ? "กำลังปิดกิจกรรม..." : "ปิดกิจกรรม"}
        </button>
      </form>
    </div>
  );
}
