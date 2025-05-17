import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { type Activity } from "../types";

function Detailsadmin() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [activity, setActivity] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/activity/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("ไม่พบข้อมูลกิจกรรม");
        return res.json();
      })
      .then((data) => {
        setActivity({
          ...data,
          activity_type: {
            id: data.activity_type_id,
            name: data.activity_type_name,
          },
        });
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);


  if (loading) {
    return <p className="p-6">Loading…</p>;
  }
  if (error) {
    return <p className="p-6 text-red-500">Error: {error}</p>;
  }
  if (!activity) {
    return <p className="p-6">ไม่พบข้อมูลกิจกรรม</p>;
  }
  
  const {
    title,
    description,
    start_datetime,
    end_datetime,
    current_participants,
    max_participants,
    activity_type,
  } = activity;

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-green-50 rounded-xl shadow-lg relative font-sans min-h-[480px]">
      {/* Header */}
      <div className="flex items-center mb-4">
        <button
          aria-label="Back"
          className="mr-4 text-2xl font-bold"
          onClick={() => navigate("/home")}
        >
          ←
        </button>
        <h1 className="text-2xl font-bold">{title}</h1>
        <button className="ml-auto border border-black rounded-md px-3 py-1 text-sm font-semibold hover:bg-gray-100">
          + ชั่วโมง
        </button>
      </div>

      {/* Label ประเภทกิจกรรม (optional chaining) */}
      <div className="mb-4 inline-block rounded-full bg-green-300 px-4 py-1">
        <p className="text-black font-medium select-none">
          {activity_type?.name ?? "–"}
        </p>
      </div>

      {/* รายละเอียด */}
      <p className="text-xs text-black leading-tight mb-8 whitespace-pre-wrap">
        {description}
      </p>

      {/* ข้อมูล วัน-เวลา / จำนวน */}
      <div className="flex flex-col gap-6 text-sm text-black font-medium mb-6">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-gray-300 rounded"></div>
          <span>
            {new Date(start_datetime).toLocaleDateString()} –{" "}
            {new Date(end_datetime).toLocaleDateString()}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-gray-300 rounded"></div>
          <span>
            {current_participants} / {max_participants}
          </span>
        </div>
      </div>

      {/* ปุ่มล่าง */}
      <div className="absolute bottom-2 left-6 right-6 flex justify-between gap-4">
        <button
          onClick={() => navigate("/close-admin")}
          className="flex-grow bg-black text-white font-medium text-xs rounded-full hover:bg-gray-500 py-2"
        >
          ปิด
        </button>
        <button
          onClick={() => navigate(`/edit-activity/${id}`)}
          className="flex-grow bg-[#c57c23] text-white font-medium text-xs rounded-full hover:bg-yellow-900 py-2"
        >
          แก้ไข
        </button>
        <button
          onClick={() => navigate(`/cancel-activity/${id}`)}
          className="flex-grow bg-[#d23d3d] text-white font-medium text-xs rounded-full hover:bg-red-800 py-2"
        >
          ยกเลิก
        </button>
      </div>
    </div>
  );
}

export default Detailsadmin;
