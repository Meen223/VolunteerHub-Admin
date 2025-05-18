import { useEffect, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { type Activity } from "../types";

export default function ApprovalForm() {
  const [activity, setActivity] = useState<Activity | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const activityId = searchParams.get("id");

  useEffect(() => {
    if (!activityId) return;
    fetch(`http://localhost:3002/activity/${activityId}`)
      .then(res => {
        if (!res.ok) throw new Error("ไม่พบข้อมูลกิจกรรม");
        return res.json();
      })
      .then(data => setActivity(data))
      .catch(err => setError(err.message));
  }, [activityId]);

  const handleApprove = async () => {
    if (!activityId) return;
    const res = await fetch(`http://localhost:3002/admin/approve/${activityId}`, {
      method: "PATCH",
    });
    if (res.ok) {
      alert("อนุมัติสำเร็จ");
      navigate("/approve-activity");
    } else {
      alert("เกิดข้อผิดพลาด");
    }
  };

  const handleReject = async () => {
    if (!activityId) return;
    const res = await fetch(`http://localhost:3002/admin/cancel/${activityId}`, {
      method: "PATCH",
    });
    if (res.ok) {
      alert("ปฏิเสธ/ยกเลิกกิจกรรมแล้ว");
      navigate("/approve-activity");
    } else {
      alert("เกิดข้อผิดพลาด");
    }
  };

  if (error) return <div className="text-red-600">{error}</div>;
  if (!activity) return <div>Loading...</div>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-blue-50 rounded-2xl space-y-6 relative font-sans mt-16 ">
      <Link to="/approve-activity" aria-label="Close" className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </Link>
      <h2 className="text-lg font-semibold text-blue-900">อนุมัติกิจกรรม</h2>
      <div className="space-y-2">
        <div>
          <span className="font-bold">ชื่อกิจกรรม: </span>{activity.title}
        </div>
        <div>
          <span className="font-bold">ประเภท: </span>{activity.activity_type_name}
        </div>
        <div>
          <span className="font-bold">รายละเอียด: </span>{activity.description}
        </div>
        <div>
          <span className="font-bold">วันที่: </span>
          {new Date(activity.start_datetime).toLocaleString()} - {new Date(activity.end_datetime).toLocaleString()}
        </div>
        <div>
          <span className="font-bold">สถานที่: </span>{activity.location}
        </div>
        <div>
          <span className="font-bold">จำนวนที่รับ: </span>{activity.max_participants}
        </div>
        <div>
          <span className="font-bold">สถานะ: </span>{activity.status}
        </div>
      </div>

      <div className="flex space-x-4 mt-4">
        <button onClick={handleApprove} className="flex-grow bg-green-600 hover:bg-green-800 text-white font-semibold py-3 rounded-lg">
          อนุมัติ
        </button>
        <button onClick={handleReject} className="flex-grow bg-red-600 hover:bg-red-800 text-white font-semibold py-3 rounded-lg">
          ปฏิเสธ
        </button>
      </div>
    </div>
  );
}
