import { useNavigate } from "react-router-dom";

export default function EditForm() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ✅ Logic บันทึกข้อมูล
    console.log("Activity updated");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-8 relative border border-yellow-300">
        {/* ปุ่มปิด */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={() => navigate(-1)} // ย้อนกลับ
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-center text-lg font-semibold text-gray-800 mb-6">แก้ไขข้อมูลกิจกรรม</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-600">ชื่อกิจกรรม</label>
            <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2" />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-600">รายละเอียด</label>
            <textarea rows={4} className="w-full rounded-lg border border-gray-300 px-4 py-2 resize-none" />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 text-sm text-gray-600">วันที่จัดกิจกรรม</label>
              <input type="date" className="w-full rounded-lg border border-gray-300 px-4 py-2" />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 text-sm text-gray-600">เวลาเริ่ม - สิ้นสุด</label>
              <input type="text" placeholder="เช่น 10:00 - 12:00" className="w-full rounded-lg border border-gray-300 px-4 py-2" />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-600">ประเภท</label>
            <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2" />
          </div>

          <div className="flex justify-center space-x-4 pt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg"
            >
              ยืนยัน
            </button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-6 rounded-lg"
            >
              ยกเลิก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
