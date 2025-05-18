import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Orange from "../components/Card/cloer/Orange";

function Cancel() {
  const navigate = useNavigate();
  const { id: activityId } = useParams();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    if (!activityId) return;
    fetch(`http://localhost:3002/activity/${activityId}`)
      .then(res => res.json())
      .then(data => setActivity(data))
      .catch(() => setActivity(null));
  }, [activityId]);

  if (!activityId) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="bg-white p-8 rounded-xl shadow text-red-700 text-lg font-semibold border border-red-300">
        ไม่พบกิจกรรมที่จะยกเลิก
      </div>
    </div>
  );

  if (!activity) return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-pulse text-gray-600 text-lg">กำลังโหลดข้อมูลกิจกรรม...</div>
    </div>
  );

  return (
    <div className="max-w-xl mx-auto mt-14 bg-gradient-to-br from-red-100 via-white to-red-50 rounded-2xl shadow-xl p-0 overflow-hidden">
      <div className="bg-gradient-to-r from-red-500 to-orange-400 py-4 px-8">
        <Orange title="ยกเลิกกิจกรรม" backTo={`/activity-details/${activity.id}`} />
      </div>
      <div className="p-7 md:p-10">
        <div className="mb-6 space-y-3 text-base text-gray-800">
          <div>
            <span className="font-semibold text-red-700">ชื่อกิจกรรม: </span>
            <span>{activity.title}</span>
          </div>
          <div>
            <span className="font-semibold text-red-700">ประเภท: </span>
            <span className="inline-block bg-red-200 text-red-900 rounded-full px-3 py-1 text-xs font-bold">{activity.activity_type_name}</span>
          </div>
          <div>
            <span className="font-semibold text-red-700">ช่วงเวลา: </span>
            <span>
              {new Date(activity.start_datetime).toLocaleString()} - {new Date(activity.end_datetime).toLocaleString()}
            </span>
          </div>
          <div>
            <span className="font-semibold text-red-700">จำนวนรับ: </span>
            <span>{activity.max_participants} คน</span>
          </div>
        </div>
        <button
          className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-800 hover:to-orange-700 text-white font-semibold rounded-xl shadow-lg py-3 mt-8 text-lg transition-all duration-200"
          onClick={() => {
            navigate(`/cancel-form?id=${activityId}`);
          }}
        >
          ไปหน้ายืนยันการยกเลิกกิจกรรม
        </button>
      </div>
    </div>
  );
}

export default Cancel;
