function Pink({ name, status, type, dateRange, capacity, hours }) {
  const statusColor =
    status === "อนุมัติ"
      ? "text-green-600"
      : status === "ปฏิเสธ"
      ? "text-red-600"
      : "text-pink-700";

  const typeColor =
    type === "อาสา"
      ? "bg-pink-300"
      : type === "อบรม"
      ? "bg-yellow-300"
      : type === "ช่วยงาน"
      ? "bg-blue-300"
      : "bg-gray-300";

  return (
    <div className="border rounded-lg shadow bg-pink-100 transition hover:shadow-lg">
      {/* ด้านบนซ้ายแสดงประเภท */}
      <div className="flex justify-between px-4 py-1 text-sm">
        <span className={`px-2 py-1 rounded-full font-medium text-black ${typeColor}`}>
          {type}
        </span>
        <span className={`font-semibold ${statusColor}`}>{status}</span>
      </div>

      <div className="px-6 py-4 bg-white rounded-b-lg">
        <h3 className="font-bold text-lg border-b border-gray-300 pb-1 mb-3">{name}</h3>
        <p className="text-sm text-gray-700 mb-3">
          It is a long established fact that a reader will be distracted by the readable content of a page...
        </p>
        <p className="text-xs text-gray-600 mb-1">📅 {dateRange}</p>
        <p className="text-xs text-gray-600 mb-2">👥 {capacity}</p>
        <p className="text-xs text-gray-600 mb-3">⏱️ {hours} ชั่วโมง</p>

        <div className="text-right">
          <button className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm hover:bg-pink-800 transition">
            รายละเอียด
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pink;
