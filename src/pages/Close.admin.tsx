import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Orange from "../components/Card/cloer/Orange";

function Close() {
  const navigate = useNavigate();
  const { id } = useParams(); // รับ id จาก URL
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ดึงข้อมูลกิจกรรม
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`http://localhost:3001/activity/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("ไม่พบกิจกรรมนี้");
        return res.json();
      })
      .then(data => {
        setActivity(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleCloseActivity = async () => {
    if (!id) return;
    // call API ปิดกิจกรรม
    try {
      const res = await fetch(`http://localhost:3001/activity/closeactivity/${id}`, {
        method: "PUT"
      });
      const result = await res.json();
      if (res.ok) {
        alert(result.message);
        navigate("/home");
      } else {
        alert(result.message || "เกิดข้อผิดพลาด");
      }
    } catch (err) {
      alert("เกิดข้อผิดพลาด: " + err.message);
    }
  };

  if (loading) return <div className="text-center py-8">กำลังโหลดข้อมูล...</div>;
  if (error) return <div className="text-center text-red-600 py-8">{error}</div>;
  if (!activity) return null;

  return (
    <div>
      <Orange title="ปิดกิจกรรม" />
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-6 mt-6">
        <h2 className="font-bold text-xl mb-2">{activity.title}</h2>
        <div className="text-gray-700 mb-2">{activity.description}</div>
        <div className="text-gray-500 mb-2">
          {new Date(activity.start_datetime).toLocaleString()} - {new Date(activity.end_datetime).toLocaleString()}
        </div>
        <div className="text-gray-700 mb-2">จำนวนผู้เข้าร่วมสูงสุด: {activity.max_participants} คน</div>
        <div className="text-gray-700 mb-2">ประเภทกิจกรรม: {activity.activity_type_name}</div>
        <div className="flex justify-end mt-6">
          <button
            onClick={handleCloseActivity}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            ยืนยันปิดกิจกรรม
          </button>
        </div>
      </div>
    </div>
  );
}

export default Close;
