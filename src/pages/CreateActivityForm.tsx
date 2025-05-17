import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function CreateActivityForm() {
  const navigate = useNavigate();

  // state สำหรับเก็บค่า input แต่ละตัว
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [activityTypeId, setActivityTypeId] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [maxParticipants, setMaxParticipants] = useState("");
  const [hourValue, setHourValue] = useState("");
  const [creatorId, setCreatorId] = useState("");  // หรือดึงจาก token ก็ได้
  const [error, setError] = useState<string | null>(null);

  const handleCancel = () => navigate("/home");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ตรวจสอบครบทุกช่อง
    if (
      !title ||
      !description ||
      !activityTypeId ||
      !date ||
      !startTime ||
      !endTime ||
      !location ||
      !maxParticipants ||
      !hourValue ||
      !creatorId
    ) {
      setError("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    // รวม date+time เป็น ISO string
    const start_datetime = `${date}T${startTime}:00`;
    let end_datetime = `${date}T${endTime}:00`;

    // ตรวจสอบช่วงเวลา ถ้า end <= start ให้บวกข้ามวัน
    const sd = new Date(start_datetime);
    let ed = new Date(end_datetime);
    if (ed <= sd) {
      ed.setDate(ed.getDate() + 1);
      end_datetime = ed.toISOString().slice(0, 19);
    }

    try {
      const res = await fetch("http://localhost:3001/admin/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          activity_type_id: Number(activityTypeId),
          start_datetime,
          end_datetime,
          location,
          max_participants: Number(maxParticipants),
          hour_value: Number(hourValue),
          creator_id: Number(creatorId),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "เกิดข้อผิดพลาดในการสร้างกิจกรรม");
      }

      // เมื่อสร้างสำเร็จ → กลับหน้า /home
      navigate("/home");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-16 p-8 bg-white rounded-xl shadow-md font-sans">
      {/* Header */}
      <div className="flex justify-center relative pb-6 border-b border-gray-200">
        <h1 className="text-lg font-semibold">สร้างกิจกรรม</h1>
        <Link
          to="/home"
          onClick={handleCancel}
          className="absolute right-0 top-0 p-3 text-xl font-bold text-gray-600 hover:text-gray-900"
        >
          ×
        </Link>
      </div>

      {/* Error */}
      {error && <p className="mt-4 text-red-500 text-sm text-center">{error}</p>}

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-6 text-sm text-gray-800 font-medium">
        {/* ชื่อกิจกรรม */}
        <div>
          <label htmlFor="title" className="block mb-1">ชื่อกิจกรรม</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* รายละเอียด */}
        <div>
          <label htmlFor="description" className="block mb-1">รายละเอียด</label>
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={5}
            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* ประเภทกิจกรรม (ID) */}
        <div>
          <label htmlFor="type" className="block mb-1">ประเภท (ID)</label>
          <input
            id="type"
            type="number"
            value={activityTypeId}
            onChange={e => setActivityTypeId(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* วันที่และเวลา */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="date" className="block mb-1">วันที่จัดกิจกรรม</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="startTime" className="block mb-1">เวลาเริ่ม</label>
            <input
              id="startTime"
              type="time"
              value={startTime}
              onChange={e => setStartTime(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="endTime" className="block mb-1">เวลาสิ้นสุด</label>
            <input
              id="endTime"
              type="time"
              value={endTime}
              onChange={e => setEndTime(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* สถานที่ */}
        <div>
          <label htmlFor="location" className="block mb-1">สถานที่</label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* จำนวนผู้เข้าร่วม (สูงสุด) */}
        <div>
          <label htmlFor="maxParticipants" className="block mb-1">จำนวนผู้เข้าร่วม (สูงสุด)</label>
          <input
            id="maxParticipants"
            type="number"
            value={maxParticipants}
            onChange={e => setMaxParticipants(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* ค่าชั่วโมง (hour_value) */}
        <div>
          <label htmlFor="hourValue" className="block mb-1">ค่าชั่วโมง (hour_value)</label>
          <input
            id="hourValue"
            type="number"
            step="0.5"
            value={hourValue}
            onChange={e => setHourValue(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Creator ID */}
        <div>
          <label htmlFor="creatorId" className="block mb-1">Creator ID</label>
          <input
            id="creatorId"
            type="number"
            value={creatorId}
            onChange={e => setCreatorId(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="ใส่รหัสผู้ใช้งานที่สร้างกิจกรรม"
          />
        </div>

        {/* ปุ่มสร้าง/ยกเลิก */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            type="submit"
            className="w-36 rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 transition"
          >
            สร้าง
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-36 rounded-md bg-gray-300 py-2 text-gray-700 hover:bg-gray-400 transition"
          >
            ยกเลิก
          </button>
        </div>
      </form>
    </div>
  );
}
