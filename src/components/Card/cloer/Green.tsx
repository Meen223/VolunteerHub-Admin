{/* <!-- การ์กหลักอบรม (green) --> */}

function Green  ()  {
  return (

    <div className="border rounded-lg shadow bg-green-100 hover:bg-green-900">
      <div className="flex justify-end px-4 py-1 text-sm font-semibold hover:text-white hover:bg-green-900 text-green-700">อบรม</div>
      <div className="px-6 py-4 bg-white rounded-b-lg">
        <h3 className="font-bold text-lg border-b border-gray-300 pb-1 mb-3">Lorem Ipsum</h3>
        <p className="text-sm text-gray-700 mb-3">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...
        </p>
        <p className="text-xs text-gray-600 mb-1">วันที่-วันที่</p>
        <p className="text-xs text-gray-600 mb-2">จำนวน/เต็ม</p>
        <p className="text-xs text-gray-600 mb-3">+ ชั่วโมง</p>
        <div className="px-6 py-4 bg-white rounded-b-lg text-right">
          <button className="bg-green-700 text-white px-4 py-1 rounded-full text-sm hover:bg-green-950 transition">รายละเอียด</button>
        </div>  
        
      </div>
    </div>
  );
};

export default Green;