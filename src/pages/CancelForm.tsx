import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function CancelForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activityId = params.get("id");
  const [reason, setReason] = useState("");

  const handleCancelActivity = async () => {
    if (!activityId) return alert("ไม่พบรหัสกิจกรรม");

    // PATCH ไปยัง backend
    const res = await fetch(`http://localhost:3002/admin/cancel/${activityId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ reason }), // ถ้า backend รับเหตุผลด้วย ให้ใส่บรรทัดนี้
    });

    if (res.ok) {
      alert("ยกเลิกกิจกรรมสำเร็จ");
      navigate("/home");
    } else {
      alert("เกิดข้อผิดพลาด");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-16 p-6 bg-red-50 rounded-lg border border-red-200 relative font-sans ">
      <button
        aria-label="Close"
        className="absolute top-4 right-4 text-black text-xl font-semibold hover:text-red-600"
        onClick={() => navigate("/cancel-activity")}
      >
        ×
      </button>

      <h2 className="text-red-700 font-bold text-lg mb-6 select-none">
        ยกเลิกกิจกรรม
      </h2>
      <label
        htmlFor="reason"
        className="text-sm text-red-700 font-semibold mb-1 block select-none"
      >
        เหตุผลการยกเลิก
      </label>
      <textarea
        id="reason"
        placeholder="โปรดระบุเหตุผลในการยกเลิกกิจกรรมนี้..."
        className="w-full min-h-[120px] resize-none rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-400"
        value={reason}
        onChange={e => setReason(e.target.value)}
      />

      <button
        type="submit"
        className="mt-8 w-full bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg py-3 transition-colors"
        onClick={handleCancelActivity}
      >
        ยืนยันการยกเลิก
      </button>
    </div>
  );
}
