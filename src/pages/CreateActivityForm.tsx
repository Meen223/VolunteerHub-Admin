import { Link } from "react-router-dom";

export default function CreateActivityForm() {
  return (
    <div className="max-w-xl mx-auto mt-16 p-8 bg-white rounded-xl shadow-md relative font-sans">
      {/* Header */}
      <div className="flex justify-center relative pb-6 border-b border-gray-200">
        <h1 className="text-lg font-semibold">สร้างกิจกรรม</h1>
        
        <Link
          to="/home"
          aria-label="Close"
          className="absolute right-0 top-0 p-3 text-xl font-bold text-gray-600 hover:text-gray-900"
        >
          ×
        </Link>
      </div>

      {/* Form */}
      <form className="mt-6 space-y-6 text-sm text-gray-800 font-medium">
        <div>
          <label htmlFor="name" className="block mb-1">
            ชื่อกิจกรรม
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder=""
          />
        </div>

        <div>
          <label htmlFor="details" className="block mb-1">
            รายละเอียด
          </label>
          <textarea
            id="details"
            rows={5}
            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder=""
          />
        </div>

        <div>
          <label htmlFor="type" className="block mb-1">
            ประเภท
          </label>
          <input
            id="type"
            type="text"
            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder=""
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="date" className="block mb-1">
              วันที่จัดกิจกรรม
            </label>
            <input
              id="date"
              type="date"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="time" className="block mb-1">
              เวลาเริ่ม - สิ้นสุด
            </label>
            <input
              id="time"
              type="text"
              placeholder="09:00 - 12:00"
              className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            type="submit"
            className="w-36 rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 transition"
          >
            สร้าง
          </button>
          <Link
            to="/home"
            className="w-36 rounded-md bg-gray-300 py-2 text-gray-700 hover:bg-gray-400 transition text-center"
          >
            ยกเลิก
          </Link>
        </div>
      </form>
    </div>
  )
}