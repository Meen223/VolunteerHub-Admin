import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [activityType, setActivityType] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`http://localhost:3002/activity/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("ไม่พบกิจกรรมนี้");
        return res.json();
      })
      .then(data => {
        setTitle(data.title);
        setDescription(data.description);
        setStartDate(data.start_datetime.slice(0, 10));
        setStartTime(data.start_datetime.slice(11, 16));
        setEndTime(data.end_datetime.slice(11, 16));
        setActivityType(data.activity_type_id.toString());
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const start_datetime = `${startDate} ${startTime}:00`;
    const end_datetime = `${startDate} ${endTime}:00`;

    try {
      const res = await fetch(`http://localhost:3002/activity/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          start_datetime,
          end_datetime,
          activity_type_id: parseInt(activityType, 10),
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "แก้ไขกิจกรรมไม่สำเร็จ");
      }

      navigate(`/activity-details/${id}`);
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (loading) return <p className="p-6 text-center">Loading…</p>;
  if (error) return <p className="p-6 text-center text-red-500">Error: {error}</p>;

  return (
    <div className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-auto bg-white bg-opacity-30 p-4">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl mx-auto p-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>

        <h2 className="text-center text-2xl font-semibold mb-6">
          แก้ไขข้อมูลกิจกรรม
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ชื่อกิจกรรม */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              ชื่อกิจกรรม
            </label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* รายละเอียด */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              รายละเอียด
            </label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full h-32 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* วันที่ + เวลา */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                วันที่จัดกิจกรรม
              </label>
              <input
                type="date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                เวลาเริ่ม
              </label>
              <input
                type="time"
                value={startTime}
                onChange={e => setStartTime(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                เวลาสิ้นสุด
              </label>
              <input
                type="time"
                value={endTime}
                onChange={e => setEndTime(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* ประเภท */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              ประเภท
            </label>
            <input
              type="text"
              value={activityType}
              onChange={e => setActivityType(e.target.value)}
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ปุ่ม ยืนยัน / ยกเลิก */}
          <div className="flex justify-center space-x-4 pt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              ยืนยัน
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              ยกเลิก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}