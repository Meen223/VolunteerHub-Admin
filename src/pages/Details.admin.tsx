function Detailsadmin  ()  {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-green-50 rounded-xl shadow-lg relative font-sans min-h-[480px]">
      {/* Header */}
      <div className="flex items-center mb-4">
        <button aria-label="Back" className="mr-4 text-2xl font-bold">
          ←
        </button>
        <h1 className="text-2xl font-bold">Lorem Ipsum</h1>
        <button className="ml-auto border border-black rounded-md px-3 py-1 text-sm font-semibold hover:bg-gray-100">
          + ชั่วโมง
        </button>
      </div>

      {/* Green label */}
      <div className="w mb-4 rounded-full bg-green-300">
        <p className="text-black font-medium select-none m-4">อบรม</p>
      </div>

      {/* Paragraph */}
      <p className="text-xs text-black leading-tight mb-8 whitespace-pre-wrap">
        What is Lorem Ipsum?&#10;
        Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum&#10;
        Where does it come from?&#10;
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
      </p>

      {/* Info text */}
      <div className="flex flex-col gap-6 text-sm text-black font-medium mb-6">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-gray-300 rounded"></div>
          <span>วันที่เริ่มต้น - วันที่สิ้นสุด</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-gray-300 rounded"></div>
          <span>จำนวน/เต็ม</span>
        </div>
      </div>

      {/* Bottom buttons container */}
      <div className="absolute bottom-2 left-6 right-6 flex justify-between gap-4">
        <button className="flex-grow bg-black text-white font-medium text-xs rounded-full hover:bg-gray-500 py-2">
          ปิด
        </button>
        <button className="flex-grow bg-[#c57c23] text-white font-medium text-xs rounded-full hover:bg-yellow-900 py-">
          แก้ไข
        </button>
        <button className="flex-grow bg-[#d23d3d] text-white font-medium text-xs rounded-full hover:bg-red-800 py-2">
          ยกเลิก
        </button>
      </div>
    </div>
  );
};

export default Detailsadmin;
