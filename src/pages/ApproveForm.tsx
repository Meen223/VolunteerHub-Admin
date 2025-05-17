import { Link } from "react-router-dom";

export default function ApprovalForm() {
  return (
    <div className="max-w-xl mx-auto p-6 bg-blue-50 rounded-2xl space-y-6 relative font-sans mt-16 ">
      {/* Close button */}
      < Link to ="/home"
        aria-label="Close"
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </Link>

      {/* Title */}
      <h2 className="text-lg font-semibold text-blue-900">อนุมัติกิจกรรม</h2>

      {/* Form */}
      <form className="space-y-4">
        <div>
          <label htmlFor="activityName" className="block text-sm font-medium text-blue-900 mb-1">
            ชื่อกิจกรรม
          </label>
          <input
            id="activityName"
            type="text"
            defaultValue="โครงการจิตอาสาพัฒนาโรงเรียน"
            className="w-full rounded-lg border border-blue-200 px-4 py-2 text-blue-900 text-sm placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="activityDate" className="block text-sm font-medium text-blue-900 mb-1">
            วันที่จัดกิจกรรม
          </label>
          <input
            id="activityDate"
            type="text"
            defaultValue="15 พฤษภาคม 2566"
            className="w-full rounded-lg border border-blue-200 px-4 py-2 text-blue-900 text-sm placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="details" className="block text-sm font-medium text-blue-900 mb-1">
            รายละเอียด
          </label>
          <textarea
            id="details"
            rows={5}
            defaultValue="กิจกรรมนี้จัดขึ้นเพื่อพัฒนาโรงเรียนในชุมชน และปลูกฝังจิตสาธารณะให้กับนักเรียน"
            className="w-full rounded-lg border border-blue-200 px-4 py-2 text-blue-900 text-sm placeholder:text-blue-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="extraComment" className="block text-sm font-medium text-blue-900 mb-1">
            ความคิดเห็นเพิ่มเติม (ถ้ามี)
          </label>
          <textarea
            id="extraComment"
            rows={2}
            placeholder="เพิ่มความเห็นเกี่ยวกับการอนุมัติ..."
            className="w-full rounded-lg border border-blue-200 px-4 py-2 text-blue-900 text-sm placeholder:text-blue-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          />
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          <button
            type="submit"
            className="flex-grow bg-green-600 hover:bg-green-800 text-white font-semibold py-3 rounded-lg"
          >
            อนุมัติ
          </button>
          <button
            type="button"
            className="flex-grow bg-red-600 hover:bg-red-800 text-white font-semibold py-3 rounded-lg"
          >
            ปฏิเสธ
          </button>
        </div>
      </form>
    </div>
  );
}
