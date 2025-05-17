
import { useNavigate,Link } from "react-router-dom";

export default function CloseActivityForm() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: submit form data
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6 font-sans mt-16">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-gray-900 text-base font-normal">ปิดกิจกรรม</h2>
        <button
          type="button"
          onClick={() => navigate("/close-admin")} // ✅ ปุ่ม X กลับไป /close-admin
          className="text-gray-400 hover:text-gray-600 focus:outline-none"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="closeDate"
            className="block mb-1 text-gray-700 text-sm"
          >
            วันที่ปิดกิจกรรม
          </label>
          <input
            type="date"
            id="closeDate"
            name="closeDate"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            placeholder="เลือกวันที่..."
          />
        </div>

        <div>
          <label
            htmlFor="note"
            className="block mb-1 text-gray-700 text-sm"
          >
            หมายเหตุเพิ่มเติม
          </label>
          <textarea
            id="note"
            name="note"
            rows={5}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 placeholder-gray-300 text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            placeholder="ใส่รายละเอียดที่เกี่ยวข้อง..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-3 text-center transition duration-150"
        >
          ปิดกิจกรรม
        </button>
      </form>
    </div>
  );
}
