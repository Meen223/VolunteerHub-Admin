export default function CancelForm() {
  return (
    <div className="max-w-sm mx-auto mt-16 p-6 bg-red-50 rounded-lg border border-red-200 relative font-sans ">
      {/* Close button */}
      <button
        aria-label="Close"
        className="absolute top-4 right-4 text-black text-xl font-semibold hover:text-red-600"
      >
        ×
      </button>

      {/* Title */}
      <h2 className="text-red-700 font-bold text-lg mb-6 select-none">
        ยกเลิกกิจกรรม
      </h2>

      {/* Label */}
      <label htmlFor="reason" className="text-sm text-red-700 font-semibold mb-1 block select-none">
        เหตุผลการยกเลิก
      </label>

      {/* Textarea */}
      <textarea
        id="reason"
        placeholder="โปรดระบุเหตุผลในการยกเลิกกิจกรรมนี้..."
        className="w-full min-h-[120px] resize-none rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 placeholder-red-300 focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      {/* Button */}
      <button
        type="submit"
        className="mt-8 w-full bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg py-3 transition-colors"
      >
        ยืนยันการยกเลิก
      </button>
    </div>
  )
}
