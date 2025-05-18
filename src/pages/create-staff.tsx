// src/pages/create-staff.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateStaff: React.FC = () => {
  const navigate = useNavigate();

  // State สำหรับแต่ละ input
  const [staffId, setStaffId] = useState("");
  const [role, setRole] = useState("อัตรากำลัง");
  const [fullName, setFullName] = useState("");
  const [type, setType] = useState("");
  const [detail, setDetail] = useState("");

  // Handler สำหรับปิด modal หรือออกจากหน้า
  const handleClose = () => {
    navigate(-1); // ย้อนกลับ
  };

  // Handler สำหรับ submit ข้อมูล
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ... ส่งข้อมูลไป backend หรือทำอย่างอื่น
    alert("ส่งข้อมูลสำเร็จ!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-300 via-pink-200 to-blue-100">
      <div className="relative bg-pink-200 rounded-3xl shadow-xl px-10 py-10 max-w-lg w-full">
        {/* ปุ่มปิด */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-7 text-2xl text-gray-600 hover:text-black"
          aria-label="close"
        >
          ×
        </button>

        <h2 className="text-center text-2xl font-semibold mb-8 text-gray-800">
          สร้างบัญชีเจ้าหน้าที่ <span className="font-bold">staff</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* รหัส staff + ตำแหน่ง */}
          <div className="flex space-x-3">
            <div className="flex-1">
              <label className="block text-gray-700 mb-1">รหัส Staff</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={staffId}
                onChange={e => setStaffId(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">ตำแหน่ง</label>
              <select
                className="w-full px-3 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={role}
                onChange={e => setRole(e.target.value)}
              >
                <option value="อัตรากำลัง">อัตรากำลัง</option>
                <option value="เจ้าหน้าที่">เจ้าหน้าที่</option>
                <option value="ผู้ดูแล">ผู้ดูแล</option>
                {/* เพิ่ม option อื่น ๆ ตามต้องการ */}
              </select>
            </div>
          </div>

          {/* ชื่อ-นามสกุล */}
          <div>
            <label className="block text-gray-700 mb-1">ชื่อ-นามสกุล</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
          </div>

          {/* ประเภท */}
          <div>
            <label className="block text-gray-700 mb-1">ประเภท</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={type}
              onChange={e => setType(e.target.value)}
            />
          </div>

          {/* รายละเอียด */}
          <div>
            <label className="block text-gray-700 mb-1">รายละเอียด</label>
            <textarea
              className="w-full min-h-[80px] px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={detail}
              onChange={e => setDetail(e.target.value)}
            />
          </div>

          {/* ปุ่ม */}
          <div className="flex justify-center space-x-6 mt-6">
            <button
              type="submit"
              className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-8 rounded-md shadow transition active:scale-95"
            >
              ยืนยัน
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-8 rounded-md shadow transition active:scale-95"
              onClick={() => alert("ลบข้อมูล")}
            >
              ลบข้อมูล
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStaff;
