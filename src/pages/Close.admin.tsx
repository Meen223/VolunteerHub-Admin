import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function getStatusLabel(status) {
  switch (status) {
    case "pending":
      return "รอดำเนินการ";
    case "approved":
      return "อนุมัติแล้ว";
    case "completed":
      return "เสร็จสิ้น";
    case "rejected":
      return "ไม่อนุมัติ";
    case "cancelled":
      return "ยกเลิก";
    case "draft":
      return "ฉบับร่าง";
    default:
      return "-";
  }
}

function Close() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:3001/activity/${id}`)
      .then(res => res.json())
      .then(data => setActivity(data))
      .catch(() => setActivity(null));
  }, [id]);

  if (!id) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white p-8 rounded-xl shadow text-green-700 text-lg font-semibold border border-green-300">
        ไม่พบกิจกรรมที่จะปิด
      </div>
    </div>
  );

  if (!activity) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-pulse text-gray-600 text-lg">กำลังโหลดข้อมูลกิจกรรม...</div>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto mt-12 bg-gradient-to-br from-green-100 via-white to-green-50 rounded-2xl shadow-xl p-0 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-green-400 py-4 px-8 flex items-center">
        <h1 className="text-white font-bold text-2xl select-none">ปิดกิจกรรม</h1>
        <span className="ml-auto inline-block bg-white text-green-700 rounded-full px-4 py-1 text-xs font-bold border border-green-200 shadow">
          {getStatusLabel(activity.status)}
        </span>
      </div>

      <div className="p-8 space-y-6 text-base text-gray-800">
        <div>
          <span className="font-semibold text-green-700">ชื่อกิจกรรม: </span>
          <span>{activity.title}</span>
        </div>
        <div>
          <span className="font-semibold text-green-700">ประเภท: </span>
          <span className="inline-block bg-green-200 text-green-900 rounded-full px-3 py-1 text-xs font-bold">
            {activity.activity_type_name}
          </span>
        </div>
        <div>
          <span className="font-semibold text-green-700">ช่วงเวลา: </span>
          <span>
            {new Date(activity.start_datetime).toLocaleString()} – {new Date(activity.end_datetime).toLocaleString()}
          </span>
        </div>
        <div>
          <span className="font-semibold text-green-700">จำนวนรับ: </span>
          <span>{activity.max_participants} คน</span>
        </div>
        {activity.location && (
          <div>
            <span className="font-semibold text-green-700">สถานที่: </span>
            <span>{activity.location}</span>
          </div>
        )}
        {typeof activity.hour_value !== "undefined" && (
          <div>
            <span className="font-semibold text-green-700">ชั่วโมงจิตอาสา: </span>
            <span>{activity.hour_value} ชั่วโมง</span>
          </div>
        )}
      </div>

      <div className="px-8 pb-8">
        <button
          className="w-full bg-gradient-to-r from-green-600 to-green-400 hover:from-green-800 hover:to-green-600 text-white font-semibold rounded-xl shadow-lg py-3 text-lg transition-all duration-200"
          onClick={() => {
            navigate(`/close-form?id=${id}`);
          }}
        >
          ไปหน้ายืนยันการปิดกิจกรรม
        </button>
      </div>
    </div>
  );
}

export default Close;
